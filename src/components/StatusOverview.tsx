
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Truck, Car, Bike } from "lucide-react";

const data = [
  { name: "Cars", value: 32, color: "#3B82F6" },
  { name: "Trucks", value: 18, color: "#10B981" },
  { name: "Vans", value: 12, color: "#6366F1" },
  { name: "Bikes", value: 8, color: "#F59E0B" }
];

const CustomizedLabel = ({ x, y, width, value }) => {
  return (
    <text x={x + width + 5} y={y + 12} fill="#888888" fontSize={12} textAnchor="start">
      {value}
    </text>
  );
};

const vehicleTypeIcons = {
  Cars: Car,
  Trucks: Truck,
  Vans: Truck,
  Bikes: Bike
};

const StatusOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Fleet Composition</h2>
        <div className="text-sm text-gray-500">Total: 70 vehicles</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide={true} />
              <Tooltip 
                formatter={(value) => [`${value} vehicles`, 'Count']} 
                labelFormatter={() => ''}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
              />
              <Bar 
                dataKey="value" 
                barSize={24}
                radius={[4, 4, 4, 4]}
                label={<CustomizedLabel />}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <div className="space-y-4">
            {data.map(item => {
              const IconComponent = vehicleTypeIcons[item.name] || Car;
              return (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <IconComponent className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.value} vehicles</div>
                  </div>
                  
                  <div className="ml-auto flex gap-2">
                    <div className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium">
                      {Math.floor(item.value * 0.7)} Active
                    </div>
                    <div className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md font-medium">
                      {Math.floor(item.value * 0.3)} Service
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOverview;
