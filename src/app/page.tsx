import Header from "@/components/Header";
import { Github, Linkedin, } from "lucide-react";
import skills from "@/data/Skills";
import VideoCompoment from "@/components/VideoComponent";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] overflow-hidden flex justify-center items-center pb-10">

      <VideoCompoment arquivoMP4={"/videos/sobre.mp4"} arquivoStatic={"/videos/static/sobre.webp"}/>

      {/* Camada escura sobre o vídeo (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
      {/* Conteúdo acima do vídeo */}
      <Header />

      <div className="bg-gray-800/50 w-[90%] md:w-[90%] rounded-lg shadow-lg z-20 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center container mx-auto p-8 mt-[10vh]">

        <div className="flex flex-col items-center justify-center gap-5 md:w-[300px] lg:w-[400px]">


          <video
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            poster={"/videos/static/logo.webp"}
          >
            <source src="/videos/logo.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
          </video>

          <div className="flex w-full p-4 gap-5 justify-center text-white">
            <a href="https://github.com/DavidMarinho2203" target="_blank" rel="noopener noreferrer" title="Ir para o Github"> 
              <Linkedin className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300 w-8 h-8" />
            </a>
            <a href="mailto:davidbeckhampm.dev@gmail.com" target="_blank" rel="noopener noreferrer" title="Ir para o Linkedin">
              <Github className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300 w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 md:w-fit text-white">
          <h1 className="text-start text-xl font-bold lg:text-3xl">Olá, eu sou o David Beckham 👋</h1>

          {[
            "Desenvolvedor frontend em formação, determinado a transformar ideias em interfaces reais e funcionais. Trabalho com React, Next.js e Tailwind CSS, focando em construir aplicações limpas, modernas e fáceis de usar."
            , "Sou movido por aprendizado constante e pela vontade de crescer na área. Cada projeto é uma oportunidade de praticar, errar, ajustar e evoluir. Gosto de codar com propósito: escrever componentes reutilizáveis, cuidar da performance e entregar algo que realmente funcione no dia a dia."
            , "Meu foco é ser direto e eficiente, tanto no código quanto na experiência do usuário. Acredito que soluções simples bem feitas fazem mais diferença do que efeitos bonitos que ninguém usa. Busco construir coisas que ajudem, que funcionem, que resolvam."
            , "Ainda tô no começo da jornada, mas levo a sério cada linha de código. Aprendo com cada desafio, cada bug e cada projeto que coloco no ar. Tô aqui pra crescer e pra fazer acontecer."
          ].map((item, index) => (
            <p key={index} className="text-start text-lg font-sans text-gray-300">
              {item}
            </p>
          ))}

          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="">
                <p className="text-start text-sm font-sans  p-2 bg-green-900/30 rounded-lg m-2 text-green-500 border-[1px] border-green-500">
                  {skill}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>

  );
}
