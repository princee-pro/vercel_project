// src/components/StatCard.jsx
export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  trendColor = 'gray' 
}) {
  const colorClasses = {
    green: 'text-green-600 bg-green-50',
    red: 'text-red-600 bg-red-50', 
    gray: 'text-gray-600 bg-gray-50'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1 text-gray-800">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[trendColor]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {trend && (
        <p className={`mt-3 text-sm font-medium ${colorClasses[trendColor]}`}>
          {trend}
        </p>
      )}
    </div>
  );
}