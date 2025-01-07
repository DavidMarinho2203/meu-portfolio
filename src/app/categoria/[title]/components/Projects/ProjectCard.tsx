import { Project } from "@/app/types/categoryProjects";
import Image from "next/image";


function ProjectCard({ title, description, image }: Project) {

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 duration-300">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110"
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
  );
}

export default ProjectCard;