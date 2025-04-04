import { Calendar, Clock, Bell } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function AcademicCalendar() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl"> 
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4 text-center">
            <h2 className="text-xl font-bold text-white flex items-center justify-center"> 
              <Calendar className="mr-2 h-5 w-5" />
              Academic Calendar
            </h2>
          </div>

          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"> 
              <StatCard 
                title="Current Term" 
                value="Fall 2023" 
                icon={Calendar}
                compact 
              />
              <StatCard 
                title="Days Left" 
                value="42" 
                icon={Clock}
                trendColor="red"
                compact
              />
              <StatCard 
                title="Events" 
                value="8" 
                icon={Bell}
                trend="+2"
                trendColor="green"
                compact
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-3 mb-6 overflow-x-auto"> 
              <h3 className="text-md font-semibold text-gray-800 mb-3"> 
                Term Schedule
              </h3>
              
             
              <div className="grid grid-cols-7 gap-1 text-sm min-w-max"> 
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => ( 
                  <div key={day} className="font-medium text-gray-500 py-1 text-center">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days - 5 rows max */}
                {Array.from({length: 35}).map((_, i) => (
                  <div 
                    key={i} 
                    className={`p-1 rounded-md text-center ${
                      i === 15 ? 'bg-indigo-100 text-indigo-600 font-medium' : 
                      i < 31 ? 'hover:bg-gray-100' : 'text-gray-300'
                    }`}
                  >
                    {i < 31 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>

            
            <div className="space-y-2"> 
              <h3 className="text-md font-semibold text-gray-800">
                Upcoming Events
              </h3>
              {[
                { id: 1, name: 'Midterms', date: 'Oct 15-19', type: 'exam' }, 
                { id: 2, name: 'PT Meeting', date: 'Oct 25', type: 'event' },
                { id: 3, name: 'Sports Day', date: 'Nov 3', type: 'activity' }
              ].map(event => (
                <div key={event.id} className="flex items-center p-2 bg-white border border-gray-200 rounded-md text-sm">
                  <div className={`p-1 rounded-full mr-3 ${
                    event.type === 'exam' ? 'bg-red-100 text-red-600' :
                    event.type === 'event' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <Calendar className="h-3 w-3" /> 
                  </div>
                  <div className="truncate"> 
                    <span className="font-medium">{event.name}</span>
                    <span className="text-gray-500 text-xs ml-2">{event.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="text-center mt-4 text-xs text-gray-500">
          <p>Calendar • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}