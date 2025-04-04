import { Contact, BookUser, Badge, Users } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Staff() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center">
              <Contact className="mr-2 h-6 w-6" />
              Staff Directory
            </h2>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard title="Teachers" value="84" icon={BookUser} />
              <StatCard title="Administrators" value="23" icon={Badge} />
              <StatCard 
                title="Support Staff" 
                value="42" 
                icon={Users} 
                trend="↑ 2"
                trendColor="green"
              />
              <StatCard title="Departments" value="8" icon={Users} />
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                All Staff Members
              </h3>
              {/* Staff table component */}
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Staff Directory • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}