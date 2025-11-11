const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Example endpoint
app.get('/creditscore/:customerNumber', (req, res) => {
  const data = {
    "1001": { name: "John Doe", creditScore: 750 },
    "1002": { name: "Jane Smith", creditScore: 680 }
  };

  const customer = data[req.params.customerNumber];

  if (customer) {
    res.status(200).json({
      status: 'success',
      message: 'Credit score retrieved successfully',
      data: customer
    });
  } else {
    res.status(404).json({
      status: 'error',
      message: 'Customer not found'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
