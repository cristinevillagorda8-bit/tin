import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1.5 rounded-full text-red-900">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Colegio de Montalban</span>
              <span className="text-xs text-red-200 uppercase tracking-wider">Online Registration Portal</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="bg-red-800 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Admissions</a>
              <a href="#" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};