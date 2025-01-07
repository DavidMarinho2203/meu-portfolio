import AboutCard from './AboutCard';
import { aboutCards, aboutText } from './aboutData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">{aboutText.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {aboutText.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;