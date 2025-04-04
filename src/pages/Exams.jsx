import { ClipboardList, Clock, Award, BarChart2 } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Exams() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center">
              <ClipboardList className="mr-2 h-6 w-6" />
              Examination Center
            </h2>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Upcoming Exams" 
                value="7" 
                icon={Clock} 
                trendColor="red"
              />
              <StatCard title="Completed" value="23" icon={ClipboardList} />
              <StatCard 
                title="Average Score" 
                value="82%" 
                icon={Award} 
                trend="↑ 5%"
                trendColor="green"
              />
              <StatCard title="Top Subject" value="Science" icon={BarChart2} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Exam Schedule
                </h3>
                {/* Schedule component */}
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Performance Analytics
                </h3>
                {/* Charts component */}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Examination System • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}