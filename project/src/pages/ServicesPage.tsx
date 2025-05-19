import React from 'react';
import {
  Briefcase,
  Globe,
  Palette,
  Layers,
  BrainCircuit,
  Code,
  PenTool,
  Lightbulb,
  Bot,
  CheckCircle,
  Share2,
  FileText
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, examples, color }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
      <div className={`${color} p-6 flex justify-center`}>
        <div className="bg-white bg-opacity-20 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">What We Offer</h4>
          <ul className="space-y-2">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ServicesPage: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Web Development",
      description: "Custom website solutions tailored to showcase African businesses, organizations, and cultural initiatives with responsive designs that work across all devices.",
      icon: <Code size={32} className="text-white" />,
      examples: [
        "Custom website design and development",
        "E-commerce solutions for African artisans and businesses",
        "Content management systems for easy updates",
        "Responsive design for mobile and desktop devices",
        "Website maintenance and support"
      ],
      color: "bg-blue-600"
    },
    {
      title: "Graphic Design",
      description: "Visual communication solutions that blend contemporary design principles with African artistic traditions to create compelling and culturally resonant graphics.",
      icon: <Palette size={32} className="text-white" />,
      examples: [
        "Logo design and brand identity",
        "Marketing materials and promotional assets",
        "Digital illustrations and infographics",
        "Social media graphics and templates",
        "Print design for brochures, flyers, and posters"
      ],
      color: "bg-purple-600"
    },
    {
      title: "Brand Design",
      description: "Comprehensive brand development services that help African businesses and organizations establish distinctive identities that resonate with their target audiences.",
      icon: <Layers size={32} className="text-white" />,
      examples: [
        "Brand strategy and positioning",
        "Visual identity systems and style guides",
        "Brand messaging and voice development",
        "Brand collateral and marketing materials",
        "Brand audits and refresh for existing businesses"
      ],
      color: "bg-green-600"
    },
    {
      title: "Social Media Management",
      description: "Strategic social media services that help African businesses build meaningful connections with their audiences through authentic, engaging, and culturally relevant content.",
      icon: <Share2 size={32} className="text-white" />,
      examples: [
        "Social media strategy development",
        "Content calendar planning and execution",
        "Community management and engagement",
        "Performance analytics and reporting",
        "Paid social media campaign management"
      ],
      color: "bg-pink-600"
    },
    {
      title: "Content Creation",
      description: "Professional content development services that tell compelling stories about Africa, its cultures, businesses, and initiatives through various media formats.",
      icon: <FileText size={32} className="text-white" />,
      examples: [
        "Blog posts and articles highlighting African perspectives",
        "Video production and editing for digital platforms",
        "Podcast production and distribution",
        "Photography services for businesses and events",
        "Email newsletter content and campaign management"
      ],
      color: "bg-indigo-600"
    },
    {
      title: "Prompt Engineering",
      description: "Specialized AI prompt creation and optimization services to help African businesses leverage artificial intelligence tools effectively for their unique needs.",
      icon: <BrainCircuit size={32} className="text-white" />,
      examples: [
        "Custom AI prompt development for specific business needs",
        "Optimization of existing prompts for better results",
        "Training on effective prompt creation techniques",
        "AI integration consulting for African businesses",
        "Culturally sensitive content generation systems"
      ],
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Briefcase size={64} className="text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Professional services designed to help African businesses and organizations thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 shadow-lg mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Custom Solutions for African Businesses</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              We specialize in creating tailored solutions that address the unique needs and challenges of
              African businesses and organizations. Our team combines technical expertise with cultural
              understanding to deliver services that help our clients connect with their audiences effectively.
            </p>
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <p className="text-xl text-gray-300 mb-12">
            We combine technical expertise with deep cultural understanding to create solutions
            that are both effective and culturally relevant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">African-Centered</h3>
              <p className="text-gray-400">
                Our solutions are designed with an understanding of African contexts, cultures, and business environments.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="bg-green-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Innovative</h3>
              <p className="text-gray-400">
                We leverage cutting-edge technologies and creative approaches to solve complex challenges.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="bg-purple-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PenTool size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Collaborative</h3>
              <p className="text-gray-400">
                We work closely with our clients, ensuring their vision and goals are at the center of every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
