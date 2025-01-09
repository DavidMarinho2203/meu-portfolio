import { Project } from '@/app/types/categoryProjects';
import ProjectCard from './ProjectCard';

interface propProjects {
  projects: Project[],
  title: string;
}

const Projects = ({ projects, title }: propProjects) => {
  return (
    <section className="py-20 bg-white">
      <div className="container flex flex-col mx-auto px-6 text-center gap-5 p-5">
        <h2 className="text-4xl sm:text-4xl font-bold text-gray-800 leading-tight">Projetos ({title})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;