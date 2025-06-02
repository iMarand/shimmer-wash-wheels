
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Package, CreditCard, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Revenue",
      value: "$2,847",
      description: "+12% from yesterday",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Cars Serviced",
      value: "24",
      description: "+3 from yesterday",
      icon: Car,
      color: "text-blue-600"
    },
    {
      title: "Active Bookings",
      value: "8",
      description: "3 premium services",
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Customer Satisfaction",
      value: "98%",
      description: "Based on 45 reviews",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const recentBookings = [
    { id: 1, customer: "John Doe", car: "BMW X5", service: "Premium Wash", time: "10:30 AM", status: "In Progress" },
    { id: 2, customer: "Sarah Wilson", car: "Tesla Model 3", service: "Express Wash", time: "11:00 AM", status: "Waiting" },
    { id: 3, customer: "Mike Johnson", car: "Audi A4", service: "Full Detail", time: "11:30 AM", status: "Scheduled" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Today's Schedule</span>
            </CardTitle>
            <CardDescription>Current and upcoming appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">{booking.customer}</p>
                    <p className="text-sm text-gray-600">{booking.car} • {booking.service}</p>
                    <p className="text-xs text-gray-500">{booking.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'Waiting' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Car className="h-6 w-6" />
                <span className="text-sm">Add Car</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">New Booking</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                <Package className="h-6 w-6" />
                <span className="text-sm">Packages</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <CreditCard className="h-6 w-6" />
                <span className="text-sm">Process Payment</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
