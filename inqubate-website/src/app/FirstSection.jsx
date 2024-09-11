'use client'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber'


export default function FirstSection(){
    return (
        <div className="w-screen h-screen">
            <Canvas>
                <mesh>
                    <tubeGeometry/>
                    <meshStandardMaterial/>
                </mesh>
            </Canvas>
        </div>
    )
}
