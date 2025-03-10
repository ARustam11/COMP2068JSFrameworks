const connect = require('connect');
const url = require('url');

const app = connect();

// Calculate function to handle mathematical operations
function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    // Checking if parameters are valid
    if (isNaN(x) || isNaN(y)) {
        res.end('Error!!! Provide valid numbers for x and y');
        return;
    }

    let result;
    let operator;

    // Calculations
    switch (method) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error!!! Division by zero is not allowed');
                return;
            }
            result = x / y;
            operator = '/';
            break;
        default:
            res.end('Use add, subtract, multiply, or divide');
            return;
    }

    res.end(`${x} ${operator} ${y} = ${result}`);
}

app.use('/lab2', calculate);

// Startingthe server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});