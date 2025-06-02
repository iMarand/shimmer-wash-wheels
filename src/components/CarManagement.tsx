
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Car, Settings, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarManagement = () => {
  const [cars, setCars] = useState([
    { id: 1, owner: "John Doe", make: "BMW", model: "X5", year: "2022", color: "Black", plate: "ABC-123", lastService: "2024-05-15" },
    { id: 2, owner: "Sarah Wilson", make: "Tesla", model: "Model 3", year: "2023", color: "White", plate: "XYZ-789", lastService: "2024-05-20" },
    { id: 3, owner: "Mike Johnson", make: "Audi", model: "A4", year: "2021", color: "Silver", plate: "DEF-456", lastService: "2024-05-18" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCar, setNewCar] = useState({
    owner: '', make: '', model: '', year: '', color: '', plate: ''
  });

  const handleAddCar = (e: React.FormEvent) => {
    e.preventDefault();
    const car = {
      id: cars.length + 1,
      ...newCar,
      lastService: new Date().toISOString().split('T')[0]
    };
    setCars([...cars, car]);
    setNewCar({ owner: '', make: '', model: '', year: '', color: '', plate: '' });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Car Management</h2>
          <p className="text-gray-600">Manage customer vehicles and service history</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          <Car className="h-4 w-4 mr-2" />
          Add New Car
        </Button>
      </div>

      {/* Add Car Form */}
      {showAddForm && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Add New Vehicle</CardTitle>
            <CardDescription>Enter the vehicle details for registration</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddCar} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="owner">Owner Name</Label>
                <Input
                  id="owner"
                  value={newCar.owner}
                  onChange={(e) => setNewCar({...newCar, owner: e.target.value})}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="make">Make</Label>
                <Select onValueChange={(value) => setNewCar({...newCar, make: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="Tesla">Tesla</SelectItem>
                    <SelectItem value="Audi">Audi</SelectItem>
                    <SelectItem value="Mercedes">Mercedes</SelectItem>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="Honda">Honda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  value={newCar.model}
                  onChange={(e) => setNewCar({...newCar, model: e.target.value})}
                  placeholder="X5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={newCar.year}
                  onChange={(e) => setNewCar({...newCar, year: e.target.value})}
                  placeholder="2022"
                  required
                />
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <Select onValueChange={(value) => setNewCar({...newCar, color: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Silver">Silver</SelectItem>
                    <SelectItem value="Red">Red</SelectItem>
                    <SelectItem value="Blue">Blue</SelectItem>
                    <SelectItem value="Gray">Gray</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="plate">License Plate</Label>
                <Input
                  id="plate"
                  value={newCar.plate}
                  onChange={(e) => setNewCar({...newCar, plate: e.target.value})}
                  placeholder="ABC-123"
                  required
                />
              </div>
              <div className="flex space-x-2 md:col-span-2 lg:col-span-3">
                <Button type="submit" className="flex-1">Add Vehicle</Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{car.make} {car.model}</CardTitle>
                    <CardDescription>{car.year} • {car.color}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Owner</p>
                  <p className="font-medium">{car.owner}</p>
                </div>
                <div>
                  <p className="text-gray-500">License Plate</p>
                  <p className="font-medium">{car.plate}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Last Service</p>
                  <p className="font-medium">{car.lastService}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Settings className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" className="flex-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  Book Service
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarManagement;
