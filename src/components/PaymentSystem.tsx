
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, DollarSign, Package, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PaymentSystem = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const pendingPayments = [
    { id: 1, customer: 'John Doe', service: 'Premium Wash', amount: 35, booking: 'Today 10:00 AM', status: 'Pending' },
    { id: 2, customer: 'Sarah Wilson', service: 'Full Detail', amount: 75, booking: 'Today 2:00 PM', status: 'Pending' },
    { id: 3, customer: 'Mike Johnson', service: 'Express Wash', amount: 15, booking: 'Tomorrow 9:00 AM', status: 'Scheduled' },
  ];

  const recentTransactions = [
    { id: 1, customer: 'Alice Brown', service: 'Premium Wash', amount: 35, date: '2024-06-01', method: 'Card', status: 'Completed' },
    { id: 2, customer: 'Bob Smith', service: 'Deluxe Package', amount: 120, date: '2024-06-01', method: 'Cash', status: 'Completed' },
    { id: 3, customer: 'Carol Davis', service: 'Express Wash', amount: 15, date: '2024-05-31', method: 'Card', status: 'Completed' },
  ];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment:', { amount, method: paymentMethod });
    setAmount('');
    setPaymentMethod('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Payment System</h2>
        <p className="text-gray-600">Process payments and manage transactions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Processing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              <span>Process Payment</span>
            </CardTitle>
            <CardDescription>Accept payment for completed services</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <Label htmlFor="customer">Select Customer/Booking</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a pending payment" />
                  </SelectTrigger>
                  <SelectContent>
                    {pendingPayments.map((payment) => (
                      <SelectItem key={payment.id} value={payment.id.toString()}>
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <p className="font-medium">{payment.customer}</p>
                            <p className="text-xs text-gray-500">{payment.service} • {payment.booking}</p>
                          </div>
                          <span className="font-bold ml-4">${payment.amount}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="pl-10"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="method">Payment Method</Label>
                <Select onValueChange={setPaymentMethod} value={paymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="digital">Digital Wallet</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  disabled={!amount || !paymentMethod}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Process Payment
                </Button>
                <Button type="button" variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Payment Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Summary</CardTitle>
            <CardDescription>Payment overview for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-700">$2,847</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 font-medium">Transactions</p>
                  <p className="text-2xl font-bold text-blue-700">24</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-600 font-medium">Pending</p>
                  <p className="text-2xl font-bold text-orange-700">$125</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-600 font-medium">Avg. Ticket</p>
                  <p className="text-2xl font-bold text-purple-700">$47</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Payment Methods</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Credit/Debit Cards</span>
                    <span className="font-medium">$2,200 (77%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cash</span>
                    <span className="font-medium">$547 (19%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Digital Wallet</span>
                    <span className="font-medium">$100 (4%)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Payments</CardTitle>
          <CardDescription>Services completed but not yet paid</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <CreditCard className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">{payment.customer}</p>
                    <p className="text-sm text-gray-600">{payment.service} • {payment.booking}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold text-lg">${payment.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      payment.status === 'Pending' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    Pay Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest completed payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Service</th>
                  <th className="text-center p-2">Amount</th>
                  <th className="text-center p-2">Method</th>
                  <th className="text-center p-2">Date</th>
                  <th className="text-center p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{transaction.customer}</td>
                    <td className="p-2">{transaction.service}</td>
                    <td className="p-2 text-center font-bold">${transaction.amount}</td>
                    <td className="p-2 text-center">{transaction.method}</td>
                    <td className="p-2 text-center">{transaction.date}</td>
                    <td className="p-2 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSystem;
