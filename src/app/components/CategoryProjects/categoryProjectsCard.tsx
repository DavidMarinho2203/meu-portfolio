import CategoryProjects from '@/app/types/categoryProjects';
import { Construction, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryProjectsCard = ({ title, description, image, projects }: CategoryProjects) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 duration-300">
    <div className="relative">
      <Image src={image} alt={title}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </div>
    <div className="p-6 h-[14rem] flex flex-col justify-between gap-5">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <div className="flex space-x-4">
        {projects ? (
          <Link
            href={`/categoria/${title}`}
            className="flex gap-1 cursor-pointer hover:text-blue-600 duration-200 transition-all"
          >
            <Wrench />
            Projetos
          </Link>
        ) : (
          <p className='flex items-center text-gray-600 hover:text-blue-600 transition-colors group gap-1 select-none'><Construction />Ainda não existe...</p>)}
      </div>
    </div>
  </div>
);

export default CategoryProjectsCard;