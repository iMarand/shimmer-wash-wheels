
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Car, Package } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCar, setSelectedCar] = useState('');

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const packages = [
    { id: 1, name: 'Express Wash', price: 15, duration: '15 min' },
    { id: 2, name: 'Premium Wash', price: 35, duration: '45 min' },
    { id: 3, name: 'Full Detail', price: 75, duration: '2 hours' },
    { id: 4, name: 'Deluxe Package', price: 120, duration: '3 hours' }
  ];

  const cars = [
    { id: 1, name: 'BMW X5 (ABC-123)' },
    { id: 2, name: 'Tesla Model 3 (XYZ-789)' },
    { id: 3, name: 'Audi A4 (DEF-456)' }
  ];

  const upcomingBookings = [
    { id: 1, date: '2024-06-03', time: '10:00 AM', car: 'BMW X5', service: 'Premium Wash', customer: 'John Doe', status: 'Confirmed' },
    { id: 2, date: '2024-06-03', time: '2:00 PM', car: 'Tesla Model 3', service: 'Full Detail', customer: 'Sarah Wilson', status: 'Pending' },
    { id: 3, date: '2024-06-04', time: '9:00 AM', car: 'Audi A4', service: 'Express Wash', customer: 'Mike Johnson', status: 'Confirmed' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking created:', {
      date: selectedDate,
      time: selectedTime,
      package: selectedPackage,
      car: selectedCar
    });
    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedPackage('');
    setSelectedCar('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Booking System</h2>
        <p className="text-gray-600">Schedule new appointments and manage existing bookings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* New Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>New Booking</span>
            </CardTitle>
            <CardDescription>Schedule a new car wash appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <Label htmlFor="car">Select Vehicle</Label>
                <Select onValueChange={setSelectedCar} value={selectedCar}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {cars.map((car) => (
                      <SelectItem key={car.id} value={car.name}>
                        <div className="flex items-center space-x-2">
                          <Car className="h-4 w-4" />
                          <span>{car.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="package">Service Package</Label>
                <Select onValueChange={setSelectedPackage} value={selectedPackage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.name}>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4" />
                            <span>{pkg.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">${pkg.price}</div>
                            <div className="text-xs text-gray-500">{pkg.duration}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div>
                <Label htmlFor="time">Time Slot</Label>
                <Select onValueChange={setSelectedTime} value={selectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{time}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                disabled={!selectedDate || !selectedTime || !selectedPackage || !selectedCar}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Next scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{booking.date}</span>
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{booking.time}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Customer</p>
                      <p className="font-medium">{booking.customer}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Vehicle</p>
                      <p className="font-medium">{booking.car}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500">Service</p>
                      <p className="font-medium">{booking.service}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                    <Button size="sm" variant="outline" className="flex-1">Cancel</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>All appointments for {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeSlots.slice(0, 12).map((time, index) => (
              <div key={time} className={`p-3 border rounded-lg ${
                index < 3 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{time}</span>
                  {index < 3 && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Booked
                    </span>
                  )}
                </div>
                {index < 3 && (
                  <div className="mt-2 text-sm text-gray-600">
                    <p>BMW X5 - Premium Wash</p>
                    <p>John Doe</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSystem;
