
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Calendar, Package, CreditCard, Settings } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ServiceHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const serviceHistory = [
    {
      id: 1,
      date: '2024-06-01',
      customer: 'John Doe',
      car: 'BMW X5',
      plate: 'ABC-123',
      service: 'Premium Wash',
      amount: 35,
      status: 'Completed',
      rating: 5,
      notes: 'Customer requested extra attention to wheels'
    },
    {
      id: 2,
      date: '2024-06-01',
      customer: 'Sarah Wilson',
      car: 'Tesla Model 3',
      plate: 'XYZ-789',
      service: 'Full Detail',
      amount: 75,
      status: 'Completed',
      rating: 5,
      notes: 'Interior leather treatment included'
    },
    {
      id: 3,
      date: '2024-05-31',
      customer: 'Mike Johnson',
      car: 'Audi A4',
      plate: 'DEF-456',
      service: 'Express Wash',
      amount: 15,
      status: 'Completed',
      rating: 4,
      notes: 'Quick service during lunch break'
    },
    {
      id: 4,
      date: '2024-05-30',
      customer: 'Alice Brown',
      car: 'Honda Civic',
      plate: 'GHI-789',
      service: 'Deluxe Package',
      amount: 120,
      status: 'Completed',
      rating: 5,
      notes: 'First-time customer, very satisfied'
    },
    {
      id: 5,
      date: '2024-05-29',
      customer: 'Bob Smith',
      car: 'Ford F-150',
      plate: 'JKL-012',
      service: 'Premium Wash',
      amount: 35,
      status: 'Refunded',
      rating: 2,
      notes: 'Customer complaint about water spots'
    }
  ];

  const filteredHistory = serviceHistory.filter(record => {
    const matchesSearch = record.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.plate.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status.toLowerCase() === statusFilter;
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'today' && record.date === '2024-06-01') ||
                       (dateFilter === 'week' && new Date(record.date) >= new Date('2024-05-26')) ||
                       (dateFilter === 'month' && new Date(record.date) >= new Date('2024-05-01'));
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'refunded': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getRatingStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Service History</h2>
        <p className="text-gray-600">Complete record of all car wash services</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Search and filter service records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="Search by customer, car, or plate..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Car className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Services</p>
                <p className="text-xl font-bold">{serviceHistory.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-xl font-bold">${serviceHistory.reduce((sum, record) => sum + record.amount, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Package className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg. Rating</p>
                <p className="text-xl font-bold">
                  {(serviceHistory.reduce((sum, record) => sum + record.rating, 0) / serviceHistory.length).toFixed(1)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-xl font-bold">
                  {serviceHistory.filter(record => new Date(record.date) >= new Date('2024-05-01')).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Records */}
      <Card>
        <CardHeader>
          <CardTitle>Service Records ({filteredHistory.length})</CardTitle>
          <CardDescription>Detailed history of all services performed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHistory.map((record) => (
              <div key={record.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Car className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{record.customer}</h3>
                      <p className="text-sm text-gray-600">{record.car} ({record.plate})</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">${record.amount}</p>
                    <Badge className={getStatusColor(record.status)}>
                      {record.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Service</p>
                    <p className="font-medium">{record.service}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium">{record.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rating</p>
                    <p className="font-medium text-yellow-600">{getRatingStars(record.rating)}</p>
                  </div>
                </div>
                
                {record.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Notes:</strong> {record.notes}
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="h-4 w-4 mr-1" />
                    Rebook
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceHistory;
