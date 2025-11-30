import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Path = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const pathRef = useRef<SVGPathElement | null>(null)
    const pathRef1 = useRef<SVGPathElement | null>(null)

    useGSAP(() => {
        if (!pathRef.current) return

        const length = pathRef.current.getTotalLength()
        console.log("PATH LENGTH →", length)

        // prep the line
        gsap.set(pathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length,
        })

        // animate while scrolling
        gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
                // markers: true,        
            },
        })

    }, [])

    return (
        <div className="min-h-[300vh] bg-black p-10">
            <h1 className="text-white text-4xl mb-40">Scroll Down 👇</h1>

            <svg
                ref={svgRef}
                width="1259"
                height="2264"
                viewBox="0 0 1259 2264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
            >
                <path
                    ref={pathRef}
                    d="M251.546 0.462585C1103.55 349.963 1528.05 557.963 1072.55 569.963C708.146 579.563 258.379 602.963 79.0461 613.463L0.546082 1260.96L613.046 1457.46H1178.55V2105.46L636.546 2034.96L357.546 1802.96L51.5461 1759.96L134.046 2262.46L463.546 2215.46"
                    stroke="white"
                    strokeWidth="4"
                />

            </svg>
        </div>
    )
}

export default Path
