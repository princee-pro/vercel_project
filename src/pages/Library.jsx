import { Book, BookOpen, UserCheck, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Library() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center">
              <Book className="mr-2 h-6 w-6" />
              Library Portal
            </h2>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard title="Total Books" value="12,487" icon={Book} />
              <StatCard 
                title="Available" 
                value="3,842" 
                icon={BookOpen} 
                trend="↑ 5%"
                trendColor="green"
              />
              <StatCard title="Checked Out" value="1,203" icon={UserCheck} />
              <StatCard 
                title="Overdue" 
                value="87" 
                icon={Clock} 
                trendColor="red"
              />
            </div>

            {/* Book Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Popular Titles
                </h3>
                {/* Book list component */}
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Checkouts
                </h3>
                {/* Checkout history */}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Library System • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}