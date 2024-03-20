const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            throw new Error(`Invalid method '${method}'.`);
    }
    return `${x} ${method} ${y} = ${result}`;
}

app.use((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    if (!method || isNaN(x) || isNaN(y)) {
        res.end('Invalid URL format.');
        return;
    }

    try {
        const result = calculate(method, x, y);
        res.end(result);
    } catch (error) {
        res.end(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
