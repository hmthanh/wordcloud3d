import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import Cloud from './Cloud'
import { TrackballControls } from '@react-three/drei'

function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}

export default App
