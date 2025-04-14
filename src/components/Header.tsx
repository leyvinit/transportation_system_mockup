
import { Gauge, Bell, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Gauge className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">FleetMaster</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8">
              <a href="#" className="text-blue-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Vehicles</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Maintenance</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Reports</a>
            </nav>
            
            <div className="flex items-center ml-6">
              <button className="p-1 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-gray-50">Dashboard</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50">Vehicles</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50">Maintenance</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50">Reports</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="User avatar" 
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
              </div>
              <button className="ml-auto p-1 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
