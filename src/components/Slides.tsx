"use client"

import { ImageProps, Image as DImage, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Group, MathUtils } from "three"

function DreiImage(props: ImageProps) {
  const ref = useRef(null)
  const group = useRef<Group>(null)
  const data = useScroll()

  useFrame((state, delta) => {
    if (group.current && ref.current && data) {
      group.current.position.z = MathUtils.damp(
        group.current.position.z,
        Math.max(0, data.delta * 100),
        4,
        delta
      )

      //   @ts-ignore
      ref.current.material.grayscale = MathUtils.damp(
        // @ts-ignore
        ref.current.material.grayscale,
        Math.max(0, 1 - data.delta * 1000),
        4,
        delta
      )
    }
  })
  return (
    <group ref={group}>
      <DImage ref={ref} {...props} />
    </group>
  )
}

function Slide({ urls = [""], ...props }) {
  const ref = useRef(null)
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3

  return (
    <group ref={ref} {...props}>
      <DreiImage position={[-width * w, 0, 0]} scale={[5, 7]} url={urls[0]} />
      <DreiImage position={[0, 0, 0]} url={urls[1]} scale={[7, 5]} />
      <DreiImage position={[width * w, 0, 1]} url={urls[2]} scale={[5, 5]} />
    </group>
  )
}

export default function Slides() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
      <Slide
        position={[0, 0, 0]}
        urls={[
          "https://utfs.io/f/f7b2f2be-fc1e-4e92-a099-087383a0029b-juf66t.webp",
          "https://utfs.io/f/caec00ac-387f-47c4-a017-a16f768b136d-i4pr10.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/e0fca1d3-42c9-448e-9ac3-22604648bae7-qi6l65.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ]}
      />
      <Slide
        position={[width * 1, 0, 0]}
        urls={[
          "https://utfs.io/f/140b046a-5820-4afa-b30f-5fc1d9bf607f-ya53td.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/12c4299d-53bc-40e5-85d1-40c828b3adf3-boyi5g.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/d2cda3a5-6ba4-4b8d-9273-ae80b2d5a457-eytg6y.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]}
      />
      <Slide
        position={[width * 2, 0, 2]}
        urls={[
          "https://utfs.io/f/4adc7892-e7df-46d6-a0d5-cf1d43aee828-v3l82n.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/12c4299d-53bc-40e5-85d1-40c828b3adf3-boyi5g.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/d2cda3a5-6ba4-4b8d-9273-ae80b2d5a457-eytg6y.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]}
      />
      <Slide
        position={[width * 2, 3, 0]}
        urls={[
          "https://utfs.io/f/4adc7892-e7df-46d6-a0d5-cf1d43aee828-v3l82n.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/12c4299d-53bc-40e5-85d1-40c828b3adf3-boyi5g.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://utfs.io/f/d2cda3a5-6ba4-4b8d-9273-ae80b2d5a457-eytg6y.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]}
      />
    </>
  )
}
