import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform float u_isDark;
  uniform float u_scrollY;

  varying vec2 vUv;

  // Generic 2D Noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Mouse interaction distortion
    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.x *= u_resolution.x / u_resolution.y;
    
    // Create a liquid ripple effect around the mouse
    float dist = distance(st, mouse);
    float ripple = sin(dist * 20.0 - u_time * 2.0) * exp(-dist * 5.0);
    vec2 distortedSt = st + normalize(st - mouse) * ripple * 0.05;

    // Background noise flow with parallax from scrolling
    vec2 noisePos = distortedSt * 3.0;
    noisePos.y += u_time * 0.1 - (u_scrollY * 0.002);
    noisePos.x += u_time * 0.05;
    float n = snoise(noisePos);
    
    // Add another layer of noise for complexity
    float n2 = snoise(noisePos * 2.0 - u_time * 0.15) * 0.5;
    float finalNoise = (n + n2) * 0.5 + 0.5;

    // Mix colors based on noise
    vec3 color = mix(u_color1, u_color2, finalNoise);

    // Apply base background color (slate dark/light)
    vec3 baseColor = mix(vec3(0.98, 0.99, 1.0), vec3(0.05, 0.06, 0.08), u_isDark);
    
    // Blend noise color with base color
    // Reduce intensity to keep it subtle and elegant like Oumahi, especially in light mode
    float intensity = mix(0.05, 0.15, u_isDark);
    
    // If close to mouse, increase intensity
    intensity += exp(-dist * 3.0) * mix(0.1, 0.2, u_isDark);

    vec3 finalColor = mix(baseColor, color, intensity);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function ShaderPlane() {
  const mesh = useRef();
  const material = useRef();
  const { size, viewport } = useThree();
  const { theme } = useTheme();

  // Handle actual resolved theme
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  
  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      u_scrollY: { value: 0 },
      u_color1: { value: new THREE.Color("#10b981") }, // Emerald
      u_color2: { value: new THREE.Color("#6366f1") }, // Indigo
      u_isDark: { value: resolvedTheme === "dark" ? 1.0 : 0.0 },
    }),
    [size, resolvedTheme]
  );

  // Mouse tracking with lerping (easing)
  const mouseTarget = useRef(new THREE.Vector2(0, 0));
  const mouseCurrent = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Invert Y for WebGL coordinates
      mouseTarget.current.set(e.clientX, size.height - e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame((state, delta) => {
    if (material.current) {
      material.current.uniforms.u_time.value += delta;
      material.current.uniforms.u_scrollY.value = window.scrollY;
      
      // Lerp mouse for smooth liquid effect
      mouseCurrent.current.lerp(mouseTarget.current, 0.1);
      material.current.uniforms.u_mouse.value.copy(mouseCurrent.current);
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Support high DPI displays
        gl={{ alpha: false, antialias: true }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
