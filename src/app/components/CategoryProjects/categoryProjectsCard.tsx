import CategoryProjects from '@/app/types/categoryProjects';
import { Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryProjectsCard = ({ title, description, image, projects }: CategoryProjects) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 duration-300 w-full sm:max-w-[300px] md:max-w-[400px]">
    <div className="relative">
      <Image src={image} alt={title} width={500} height={500}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 "
      />

    </div>
    <div className="flex flex-col justify-between gap-5 p-5 h-64">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <div className="flex space-x-4">
        {projects && (
          <Link href={`/categoria/${title}`} className="flex gap-1 cursor-pointer hover:text-blue-600 duration-200 transition-all" >
             <Wrench /> Projetos
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default CategoryProjectsCard;