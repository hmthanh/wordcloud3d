import { useEffect, useRef, useState } from "react"
import { Color } from "three"
import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'

type TextProps = typeof Text

export function Word({ children, ...props }: any) {
    const color = new Color()
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef<TextProps>()
    const [hovered, setHovered] = useState<boolean>(false)
    const over = (e: any) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover¨
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => {
            document.body.style.cursor = 'auto'
        }
    }, [hovered])

    // Tie component to the render-loop
    useFrame(() => {
        if (ref.current) {
            const text = ref.current as any
            text.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
        }
    })

    return (
        <Billboard {...props}>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
        </Billboard>
    )
}