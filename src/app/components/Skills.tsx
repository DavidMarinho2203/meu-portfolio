

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React','Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Ferramentas', items: ['Git', 'VS Code', 'Figma'] },
    { category: 'Soft Skills', items: ['Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas', 'Adaptabilidade'] }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">Habilidades</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillSet, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold text-blue-600">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;