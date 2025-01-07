import { Project } from '@/app/types/categoryProjects';
import ProjectCard from './ProjectCard';
import type CategoryProjects from '@/app/types/categoryProjects';

interface propProjects {
  projects: Project[],
  title: string;
}

const Projects = ({ projects, title }: propProjects) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projetos ({title})</h2>
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