const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Example customer data
const customers = [
  { customerNumber: '1001', name: 'John Doe', creditScore: 300 },
  { customerNumber: '1002', name: 'Jane Smith', creditScore: 500 },
  { customerNumber: '1003', name: 'Michael Lee', creditScore: 600 },
  { customerNumber: '1004', name: 'Michael Lee', creditScore: 700},
  { customerNumber: '1005', name: 'Michael Lee', creditScore: 800 }
];

// Endpoint using query parameter
app.get('/creditscore', (req, res) => {
  const customerNumber = req.query.customerNumber;

  if (!customerNumber) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a customerNumber as a query parameter'
    });
  }

  const customer = customers.find(c => c.customerNumber === customerNumber);

  if (customer) {
    res.status(200).json({
      status: 'success',
      message: 'Credit score retrieved successfully',
      data: {
        customerNumber: customer.customerNumber,
        name: customer.name,
        creditScore: customer.creditScore
      }
    });
  } else {
    res.status(404).json({
      status: 'error',
      message: `Customer with number ${customerNumber} not found`
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
