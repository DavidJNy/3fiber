import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Box(props) {
    
    return (
        <div id="canvas-container">
            <Canvas>
                <mesh>
                    <boxBufferGeometry />
                    <meshPhongMaterial />
                </mesh>
                <ambientLight args={[0xff0000]} intensity={0.1} />
                <directionalLight position={[0, 0, 5]} intensity={0.5} />
            </Canvas>
            {/* <Canvas>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                
            </Canvas> */}
        </div>
    )
}
