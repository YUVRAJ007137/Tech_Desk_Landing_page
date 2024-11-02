import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <div className="text-[#D4AF37] mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
