import Header from '@/components/Header'
import { ExternalLink, Github } from 'lucide-react'
import React from 'react'
import Projetos from '@/data/Projetos'
import Link from 'next/link'
import VideoCompoment from '@/components/VideoComponent'
import Image from 'next/image'


const page = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] overflow-hidden flex justify-center items-center pb-10">

            <VideoCompoment arquivoMP4={"/videos/projetos.mp4"} arquivoStatic={"/videos/static/projetos.jpeg"} />

            <Header />

            <div className=" w-full md:w-[90%] rounded-lg shadow-lg z-20 flex flex-col gap-20 justify-center container mx-auto p-8 mt-[10vh]">

                <h2 className='font-bold text-4xl md:text-5xl text-white text-center'> Meus Projetos</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {Projetos.map((item, index) => (
                        <div key={index} className="flex flex-col justify-between gap-5 min-w-40 p-4 bg-gray-800/50 rounded-lg">

                            <div className='flex flex-col gap-5'>
                                <Image src={item.image} alt={item.title} width={800} height={200} className="w-full h-[200px] lg:h-[200px] rounded-lg object-cover" title={`Imagem do projeto ${item.title}`} />

                                <h2 className="text-center text-xl font-bold lg:text-3xl text-white">{item.title}</h2>
                                <p className="text-center text-lg font-sans text-gray-300">{item.description}</p>

                            </div>

                            <div className='flex gap-3 items-center justify-center'>
                                {item?.site && (
                                    <Link href={item.site} target="_blank" rel="noopener noreferrer" title='Ir para o site no Online'>
                                        <ExternalLink className="hover:text-green-500 text-gray-300/50 cursor-pointer transition-all ease-in-out duration-300 w-8 h-8" />
                                    </Link>
                                )}
                                <a href={item?.github} target="_blank" rel="noopener noreferrer" title='Ir para o código no Github'>
                                    <Github className="hover:text-green-500 text-gray-300/50 cursor-pointer transition-all ease-in-out duration-300 w-8 h-8" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default page
