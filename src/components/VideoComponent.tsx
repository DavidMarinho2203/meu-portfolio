import React from 'react'

const VideoCompoment = ({ arquivoMP4 }: { arquivoMP4: string }) => {
    return (
        <>
            {/* Vídeo de fundo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={`${arquivoMP4}`} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>

            {/* Camada escura sobre o vídeo (opcional) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        </>
    )
}

export default VideoCompoment
