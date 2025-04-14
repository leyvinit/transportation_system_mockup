
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-16 md:pb-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Smart Vehicle Management <span className="text-blue-600">Simplified</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Monitor, manage, and optimize your entire vehicle fleet with real-time insights and comprehensive analytics.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Request Demo
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <svg className="absolute top-0 left-0 -mt-16 -ml-16 text-blue-100" width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="8" height="8" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern-squares)" />
              </svg>
              
              <div className="relative">
                <div className="shadow-xl rounded-2xl overflow-hidden border border-gray-200 bg-white">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">Fleet Summary</h2>
                      <span className="text-sm text-gray-500">Last updated: Just now</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-blue-600 font-semibold">Active Vehicles</div>
                        <div className="text-3xl font-bold mt-1">42</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-green-600 font-semibold">On Route</div>
                        <div className="text-3xl font-bold mt-1">24</div>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <div className="text-amber-600 font-semibold">Maintenance</div>
                        <div className="text-3xl font-bold mt-1">5</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 font-semibold">Total Distance</div>
                        <div className="text-3xl font-bold mt-1">16.4k</div>
                        <div className="text-xs text-gray-500">miles this month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
