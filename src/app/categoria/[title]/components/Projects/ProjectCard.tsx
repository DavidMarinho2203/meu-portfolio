import { Project } from "@/app/types/categoryProjects";
import Image from "next/image";
import { useState } from "react";

function ProjectCard({ title, description, image }: Project) {
  const [zoomImagem, setZoomImagem] = useState(false);

  const toggleZoom = () => setZoomImagem(!zoomImagem);

  return (
    <>
      <div className="p-4">
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 duration-300"
          onClick={toggleZoom} // Ativa o zoom ao clicar no card
        >
          <div className="relative">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110 object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-200 text-sm">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Zoom */}
      {zoomImagem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 flex-col gap-5 p-5">
          <button
            onClick={toggleZoom}
            className=" text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Fechar
          </button>

          <div className="max-w-[90vw] bg-white flex flex-col justify-center items-center gap-5 p-6 rounded-lg text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tightv">{title}</h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ">{description}</p>
          </div>

          <div
            className="overflow-auto"
            style={{ cursor: 'zoom-out' }} // Indica que clicar fechará o zoom
          >
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] overflow-auto ">
              <Image
                src={image}
                alt={title}
                layout="intrinsic"
                width={1200} // Ajuste o valor conforme necessário
                height={800} // Ajuste o valor conforme necessário
                className="object-contain w-full h-auto rounded-lg"
              />

            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default ProjectCard;
