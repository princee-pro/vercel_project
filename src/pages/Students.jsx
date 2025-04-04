import { GraduationCap, BookOpen, Users } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Students() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
      {/* Centered Container */}
      <div className="w-full max-w-6xl">
        {/* White Card Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center">
              <GraduationCap className="mr-2 h-6 w-6" />
              Student Management
            </h2>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="Total Students" 
                value="1,842" 
                icon={Users} 
                trend="↑ 8%"
                trendColor="green"
              />
              <StatCard 
                title="Active Courses" 
                value="24" 
                icon={BookOpen}
              />
              <StatCard 
                title="Graduating" 
                value="327" 
                icon={GraduationCap} 
                trendColor="gray"
              />
            </div>

            {/* Additional Content Section */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Student Registrations
              </h3>
              {/* Add your student list/table here */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Student Portal • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}