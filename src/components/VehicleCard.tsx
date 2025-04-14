
import { Battery, Zap, MapPin, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  id: string;
  name: string;
  type: string;
  status: "active" | "maintenance" | "charging" | "inactive";
  batteryLevel: number;
  location: string;
  lastUpdate: string;
  image: string;
}

const statusConfig = {
  active: { color: "bg-green-100 text-green-800", icon: MapPin },
  maintenance: { color: "bg-amber-100 text-amber-800", icon: AlertTriangle },
  charging: { color: "bg-blue-100 text-blue-800", icon: Zap },
  inactive: { color: "bg-gray-100 text-gray-800", icon: Battery }
};

const VehicleCard = ({ id, name, type, status, batteryLevel, location, lastUpdate, image }: VehicleCardProps) => {
  const StatusIcon = statusConfig[status].icon;
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3">
          <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", statusConfig[status].color)}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
          <div className="flex items-center">
            <Battery className="w-4 h-4 text-gray-400 mr-1" />
            <span className={cn("text-sm font-medium",
              batteryLevel > 70 ? "text-green-600" : 
              batteryLevel > 30 ? "text-amber-600" : "text-red-600"
            )}>
              {batteryLevel}%
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-400">Updated {lastUpdate}</span>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
