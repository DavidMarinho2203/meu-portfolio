import { CategoryProjectsData } from '@/app/data/CategoryProjectsData';
import CategoryProjectsCard from './categoryProjectsCard';


const CategoryProjects = () => {
  return (
    <section id="categoryProjects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Categorias de Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CategoryProjectsData.map((category, index) => (
            <CategoryProjectsCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProjects;