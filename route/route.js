export class Router {
    handleRequest(req, res) {
        if (req.url === '/add') {
            this.handleAddRoute(res);
        }
        else if (req.url === '/dashboard' && req.method === 'POST') {
            this.handleDashboardRoute(req, res);
        }
        else if (req.url === '/') {
            this.handleHomeRoute(res);
        }
        else {
            this.handleNotFound(res);
        }
    }
    handleAddRoute(res) {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/dashboard" method="POST">');
        res.write('<input name="Name" type="text" placeholder="Enter your name"/>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    handleDashboardRoute(req, res) {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];
            console.log(`Name received: ${decodeURIComponent(name)}`);
            res.write(`<h1>Hello, ${decodeURIComponent(name)}! Welcome to the dashboard.</h1>`);
            res.end();
        });
    }
    handleHomeRoute(res) {
        res.write('<h1>Landing page</h1>');
        res.end();
    }
    handleNotFound(res) {
        res.write('<h1>404 - Page Not Found</h1>');
        res.end();
    }
}