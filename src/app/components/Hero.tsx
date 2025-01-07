import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {

  function scrollToSection(local: string) {
    const section = document.getElementById(`${local}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Rolagem suave
    }

  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Desenvolvedor Web Full Stack
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <SocialLink href="https://github.com/DavidMarinho2203" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/david-beckham-278644227/" icon={<Linkedin />} />
              <SocialLink href="mailto:davidbeckhampm.dev@gmail.com" icon={<Mail />} />
            </div>
            <button onClick={() => scrollToSection("categoryProjects")} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200">
              Ver Projetos
            </button>
          </div>
          <div className="lg:w-1/2 w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Developer workspace"
              className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 duration-200 hover:bg-blue-500 hover:text-white"
  >
    {icon}
  </a>
);

export default Hero;