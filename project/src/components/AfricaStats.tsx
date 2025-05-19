import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Info } from 'lucide-react';

const mineralData = [
  { name: 'Platinum', percentage: 90 },
  { name: 'Chromium', percentage: 80 },
  { name: 'Diamonds', percentage: 60 },
  { name: 'Manganese', percentage: 46 },
  { name: 'Gold', percentage: 40 },
];

const populationData = [
  { name: '0-14', value: 41 },
  { name: '15-24', value: 19 },
  { name: '25-54', value: 32 },
  { name: '55+', value: 8 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export const AfricaStats: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Africa Facts & Potential</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mineral Resources Chart */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Global Mineral Resources Share</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mineralData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Population Demographics */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Population Demographics</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={populationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {populationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Key Facts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Info size={20} className="text-blue-400 mr-2" />
              <h4 className="text-lg font-semibold">Economic Growth</h4>
            </div>
            <p className="text-gray-300">Home to 6 of the world's 10 fastest-growing economies, with an average GDP growth of 4.6% annually.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Info size={20} className="text-blue-400 mr-2" />
              <h4 className="text-lg font-semibold">Youth Population</h4>
            </div>
            <p className="text-gray-300">60% of Africa's population is under 25, representing the world's largest youth workforce by 2030.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Info size={20} className="text-blue-400 mr-2" />
              <h4 className="text-lg font-semibold">Natural Resources</h4>
            </div>
            <p className="text-gray-300">Contains 30% of the world's mineral reserves and 8% of global oil reserves.</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-400 text-center">
          <p>Data sources: World Bank, African Development Bank, United Nations Economic Commission for Africa</p>
        </div>
      </div>
    </section>
  );
};