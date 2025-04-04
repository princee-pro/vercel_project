import { useAuth } from '../contexts/AuthContext';
import { LogOut, Home, Book, Users, Settings, BarChart2, GraduationCap, Calendar, BookOpen, Contact, ClipboardList } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="absolute inset-0 flex bg-gradient-to-br from-gray-50 to-gray-100">
     
      <div className="hidden md:flex w-64 bg-white shadow-lg flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center">
            <Home className="mr-2 h-6 w-6" />
            TSS NYANZA
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {[
            { name: 'Dashboard', icon: Home, path: '/dashboard' },
            { name: 'Students', icon: GraduationCap, path: '/students' },
            { name: 'Calendar', icon: Calendar, path: '/calendar' },
            { name: 'Library', icon: BookOpen, path: '/library' },
            { name: 'Staff', icon: Contact, path: '/staff' },
            { name: 'Exams', icon: ClipboardList, path: '/exams' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="flex items-center w-full text-gray-600 hover:text-red-600 p-3 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-indigo-600 px-8 py-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-700 p-2 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              </div>
              <div className="md:hidden">
                <button 
                  onClick={logout}
                  className="flex items-center text-sm font-medium text-indigo-100 hover:text-white transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1.5" />
                  Sign out
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}!</h2>
              <p className="text-gray-500 mt-2">Here's your dashboard overview</p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Total Users', value: '2,543', icon: Users, trend: 'up', change: '+12%' },
                { title: 'Active Content', value: '1,234', icon: Book, trend: 'up', change: '+5%' },
                { title: 'Reports', value: '876', icon: BarChart2, trend: 'down', change: '-3%' },
                { title: 'Settings', value: 'Configured', icon: Settings, trend: 'neutral', change: 'Updated' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${
                      stat.trend === 'up' ? 'bg-green-50 text-green-600' :
                      stat.trend === 'down' ? 'bg-red-50 text-red-600' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className={`mt-3 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' :
                    stat.trend === 'down' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { id: 1, action: 'New user registered', time: '5 min ago', user: 'John Doe' },
                  { id: 2, action: 'Content updated', time: '1 hour ago', user: 'Jane Smith' },
                  { id: 3, action: 'System check', time: '3 hours ago', user: 'System' }
                ].map(activity => (
                  <div key={activity.id} className="flex items-start pb-4 border-b border-gray-200 last:border-0">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time} • {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Dashboard v2.0 • {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}