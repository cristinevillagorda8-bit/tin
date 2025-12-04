import React from 'react';
import { Navbar } from './components/Navbar';
import { RegistrationForm } from './components/RegistrationForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Welcome to <span className="text-red-900">CdM</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Start your journey towards academic excellence. Fill out the form below to begin your admission process.
          </p>
        </div>

        <RegistrationForm />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2024 Colegio de Montalban. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">Kasiglahan Village, Rodriguez, Rizal</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;