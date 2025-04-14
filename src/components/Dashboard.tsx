
import VehicleCard from "./VehicleCard";
import StatusOverview from "./StatusOverview";
import { Filter, Search, ChevronDown } from "lucide-react";

const vehicles = [
  {
    id: "v001",
    name: "Tesla Model S",
    type: "Electric Sedan",
    status: "active",
    batteryLevel: 78,
    location: "Downtown, Seattle",
    lastUpdate: "5 min ago",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80"
  },
  {
    id: "v002",
    name: "Ford F-150 Lightning",
    type: "Electric Truck",
    status: "charging",
    batteryLevel: 45,
    location: "South Industrial Park",
    lastUpdate: "12 min ago",
    image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&q=80"
  },
  {
    id: "v003",
    name: "BMW i4",
    type: "Electric Sedan",
    status: "maintenance",
    batteryLevel: 92,
    location: "Service Center",
    lastUpdate: "2 hours ago",
    image: "https://images.unsplash.com/photo-1549275301-c9a3f69dee49?auto=format&fit=crop&q=80"
  },
  {
    id: "v004",
    name: "Rivian Delivery Van",
    type: "Commercial EV",
    status: "active",
    batteryLevel: 65,
    location: "North Distribution Center",
    lastUpdate: "28 min ago",
    image: "https://images.unsplash.com/photo-1621689562244-9cdb2681a76c?auto=format&fit=crop&q=80"
  },
  {
    id: "v005",
    name: "Zero SR/F",
    type: "Electric Motorcycle",
    status: "inactive",
    batteryLevel: 12,
    location: "Main St Warehouse",
    lastUpdate: "1 day ago",
    image: "https://images.unsplash.com/photo-1558981285-501cd9af9426?auto=format&fit=crop&q=80"
  },
  {
    id: "v006",
    name: "Volvo EX90",
    type: "Electric SUV",
    status: "active",
    batteryLevel: 83,
    location: "Regional Airport",
    lastUpdate: "36 min ago",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
  },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage and monitor your fleet in real-time</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search vehicles..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
            />
          </div>
          
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="h-4 w-4 mr-2" />
            Filters
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Status Overview */}
      <div className="mb-8">
        <StatusOverview />
      </div>
      
      {/* Vehicle Cards */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Vehicle Fleet</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
