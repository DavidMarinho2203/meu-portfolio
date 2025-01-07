import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const AboutCard = ({ title, description, Icon }: AboutCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-blue-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutCard;