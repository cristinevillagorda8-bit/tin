import React, { useState } from 'react';
import { StudentFormData, CourseEnum } from '../types';
import { refineStatement } from '../services/geminiService';
import { User, BookOpen, MapPin, Send, Wand2, Loader2, CheckCircle } from 'lucide-react';

const INITIAL_DATA: StudentFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  birthDate: '',
  email: '',
  phoneNumber: '',
  address: '',
  course: CourseEnum.NONE,
  yearLevel: '1st Year',
  statementOfPurpose: ''
};

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<StudentFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRefine = async () => {
    if (!formData.statementOfPurpose) return;
    setIsRefining(true);
    try {
      const refinedText = await refineStatement(formData.statementOfPurpose);
      setFormData(prev => ({ ...prev, statementOfPurpose: refinedText }));
    } catch (error) {
      alert("AI Assistant is currently unavailable. Please check your internet or try again later.");
    } finally {
      setIsRefining(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend PHP/Python API call
    setTimeout(() => {
      console.log("Sending data to backend:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-center border-t-4 border-green-500 mt-10 animate-fade-in">
        <div className="flex justify-center mb-4 text-green-500">
          <CheckCircle size={64} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Submitted!</h2>
        <p className="text-gray-600 mb-6">
          Thank you, <span className="font-semibold">{formData.firstName}</span>. Your application to Colegio de Montalban has been received. 
          Please check your email ({formData.email}) for further instructions regarding the entrance examination.
        </p>
        <button 
          onClick={() => { setSubmitted(false); setFormData(INITIAL_DATA); }}
          className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
        >
          Register Another Student
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-8 mb-12 border border-gray-100">
      <div className="bg-yellow-500 p-4 border-b border-yellow-400">
        <h2 className="text-red-900 font-bold text-xl flex items-center gap-2">
          <User className="w-5 h-5" />
          Student Registration Form
        </h2>
        <p className="text-red-900/80 text-sm">A.Y. 2024 - 2025</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        
        {/* Personal Information */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b flex items-center gap-2">
            <User className="w-4 h-4 text-yellow-600" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none transition"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none transition"
                placeholder="Dela"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none transition"
                placeholder="Cruz"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                required
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                required
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
                placeholder="0912 345 6789"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b flex items-center gap-2">
            <MapPin className="w-4 h-4 text-yellow-600" />
            Address & Contact
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
                placeholder="juan.cruz@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address</label>
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none"
                placeholder="House No., Street, Barangay, City/Municipality"
              />
            </div>
          </div>
        </section>

        {/* Academic Details */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-600" />
            Academic Preference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Course</label>
              <select
                required
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none bg-white"
              >
                <option value="" disabled>Select a course</option>
                {Object.values(CourseEnum).filter(c => c !== "").map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year Level</label>
              <select
                name="yearLevel"
                value={formData.yearLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none bg-white"
              >
                <option value="1st Year">1st Year (Freshman)</option>
                <option value="2nd Year">2nd Year (Transferee)</option>
                <option value="3rd Year">3rd Year (Transferee)</option>
                <option value="4th Year">4th Year (Transferee)</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Statement of Purpose</label>
              <button
                type="button"
                onClick={handleRefine}
                disabled={isRefining || !formData.statementOfPurpose}
                className="text-xs flex items-center gap-1 text-purple-600 hover:text-purple-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRefining ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />}
                Enhance with AI
              </button>
            </div>
            <textarea
              name="statementOfPurpose"
              rows={4}
              value={formData.statementOfPurpose}
              onChange={handleChange}
              placeholder="Why do you want to study at Colegio de Montalban? (Draft here and click 'Enhance with AI')"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 outline-none resize-none"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Tell us about your goals. You can write a rough draft and use our AI assistant to polish it.
            </p>
          </div>
        </section>

        {/* Submit Button */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-red-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Processing...
              </>
            ) : (
              <>
                Submit Application <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
