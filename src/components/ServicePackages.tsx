
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Clock, Package, Settings } from 'lucide-react';

const ServicePackages = () => {
  const packages = [
    {
      id: 1,
      name: "Express Wash",
      price: 15,
      duration: "15 min",
      description: "Quick exterior wash and dry",
      features: ["Exterior wash", "Quick dry", "Tire cleaning"],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Premium Wash",
      price: 35,
      duration: "45 min",
      description: "Complete interior and exterior cleaning",
      features: ["Exterior wash", "Interior vacuum", "Dashboard cleaning", "Tire shine", "Air freshener"],
      popular: true,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Full Detail",
      price: 75,
      duration: "2 hours",
      description: "Professional detailing service",
      features: ["Complete exterior wash", "Full interior detailing", "Wax application", "Engine bay cleaning", "Leather conditioning"],
      popular: false,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Deluxe Package",
      price: 120,
      duration: "3 hours",
      description: "Ultimate car care experience",
      features: ["Everything in Full Detail", "Paint protection", "Headlight restoration", "Undercarriage wash", "6-month guarantee"],
      popular: false,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const addOnServices = [
    { name: "Wax Application", price: 20, icon: Settings },
    { name: "Engine Cleaning", price: 25, icon: Settings },
    { name: "Leather Treatment", price: 15, icon: Settings },
    { name: "Paint Protection", price: 50, icon: Settings },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of car care services designed to keep your vehicle looking its best
        </p>
      </div>

      {/* Main Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
            pkg.popular ? 'ring-2 ring-green-500 ring-opacity-50' : ''
          }`}>
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <div className={`mx-auto p-3 rounded-full bg-gradient-to-r ${pkg.color} w-16 h-16 flex items-center justify-center mb-4`}>
                <Package className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="text-3xl font-bold text-gray-900">${pkg.price}</div>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {pkg.duration}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity`}>
                <Car className="h-4 w-4 mr-2" />
                Select Package
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add-on Services */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-on Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {addOnServices.map((addon, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <addon.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{addon.name}</p>
                      <p className="text-sm text-gray-500">+${addon.price}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Add</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Package Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Package Comparison</CardTitle>
          <CardDescription>Compare features across all our service packages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Feature</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center p-2">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Exterior Wash</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Interior Cleaning</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Wax Application</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">✓</td>
                  <td className="text-center p-2">✓</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Paint Protection</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicePackages;
