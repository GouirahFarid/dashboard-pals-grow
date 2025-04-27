
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign } from 'lucide-react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const RecentTransactions = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      description: "Grocery Store",
      amount: -82.56,
      category: "Groceries",
      date: "Today"
    },
    {
      id: 2,
      description: "Monthly Transfer to Savings",
      amount: -300,
      category: "Savings",
      date: "Yesterday"
    },
    {
      id: 3,
      description: "Salary Deposit",
      amount: 2450,
      category: "Income",
      date: "Jul 15"
    },
    {
      id: 4,
      description: "Electric Bill",
      amount: -95.40,
      category: "Utilities",
      date: "Jul 14"
    },
    {
      id: 5,
      description: "Online Subscription",
      amount: -14.99,
      category: "Entertainment",
      date: "Jul 13"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BadgeDollarSign className="mr-2 h-5 w-5 text-[#9b87f5]" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.category} • {transaction.date}
                </p>
              </div>
              <div className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : ''}`}>
                {transaction.amount > 0 ? '+' : ''}
                ${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
