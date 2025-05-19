import React from 'react';
import { CheckCircle as CircleCheck } from 'lucide-react';

interface FactsSectionProps {
  title: string;
  facts: string[];
  iconColor: string;
}

export const FactsSection: React.FC<FactsSectionProps> = ({ title, facts, iconColor }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {facts.map((fact, index) => (
          <li key={index} className="flex">
            <CircleCheck size={20} className={`${iconColor} mt-1 mr-3 flex-shrink-0`} />
            <span className="text-gray-300">{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};