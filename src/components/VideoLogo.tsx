'use client'
import { useEffect, useRef, useState } from "react"

const VideoLogo = () => {
  const videoRef = useRef<HTMLDivElement | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowVideo(true)
      },
      { threshold: 0.3 }
    )

    if (videoRef.current) observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  return (
    <div ref={videoRef}>
      {showVideo && (
        <video
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/static/logo.webp"
        >
          <source src="/videos/logo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
      )}
    </div>
  )
}

export default VideoLogo
