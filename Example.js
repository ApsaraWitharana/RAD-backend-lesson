// import * as http from 'http';
// import * as fs from 'fs'; 
// const server = http.createServer((req, res) => {
//    // fs.writeFileSync('example.txt',(req.url + ''+req.method));
//    // console.log(req);
// //    if(req.url === '/'){
// //      res.write('<h1>Hellow world</h');
// //      res.end();
// //    }else if (req.url === '/add'){
// //      res.write('<h1>Hello Customer</h');
// //      res.end();
// //    }else{
// //      res.write('<h1>Hellow</h');
// //    }
//         if(req.url === '/add'){
//             fs.writeFile('example.txt',req.url,() =>{
//                 res.write('<h1>Hellow Customer</h>');
//                 return res.end();
//             });  
//         }
//         res.write('<h1>Hellow World</h>');
//         res.end();
//         console.log(req)
//         process.exit();
// });
// server.listen(3000,()=>{
//     console.log("Srver strated at port 3000")
// });
// import * as http from 'http';
// import * as fs from 'fs'; 
// const server = http.createServer((req, res) => {
//     if (req.url === '/add') {
//         fs.writeFile('example.txt', req.url, (err) => {   
//             res.write('<h1>Hello Customer</h1>');
//             res.end();
//         });
//         return;
//     }
//     res.write('<h1>Hello World</h1>');
//     res.end();
//     console.log(req);
//     // process.exit();
// });
// server.listen(3000, () => {
//     console.log('Server started at port 3000');
// });
// import * as http from 'http';
// const server = http.createServer((req, res) => {
//     if (req.url === '/add') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html>');
//         res.write('<body>');
//         res.write('<form action="/dashboard" method="POST">');
//         res.write('<input name="Name" type="text" placeholder="Enter your name"/>');
//         res.write('<button type="submit">Submit</button>');
//         res.write('</form>');
//         res.write('</body>');
//         res.write('</html>');
//         res.end();
//         return;
//     }
//     if (req.url === '/dashboard' && req.method === 'POST') {
//         const body: Buffer[] = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const name = parsedBody.split('=')[1]; // Extract the 'Name' field
//             console.log(`Name received: ${decodeURIComponent(name)}`);
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('<html>');
//             res.write('<body>');
//             res.write(`<h1>Hello, ${decodeURIComponent(name)}! Welcome to the dashboard.</h1>`);
//             res.write('</body>');
//             res.write('</html>');
//             res.end();
//         });
//         return;
//     }
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Landing page</h1>');
//         res.end();
//         return;
//     }
//     // Fallback for unknown routes
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('<h1>404 - Page Not Found</h1>');
//     res.end();
// });
// server.listen(3000, () => {
//     console.log('Server started at port 3000');
// });
// import * as http from 'http';
// import { Router } from './route/route';
// const router = new Router();
// const server = http.createServer((req, res) => {
//     router.handleRequest(req, res);
// });
// server.listen(3000, () => {
//     console.log('Server started at port 3000');
// });
//==========node ================//
// import  express from 'express';
// const app = express();
// app.get('/',(req,res,next)=>{
//     console.log(req);
//     res.send('<h1>Express works</h1>')
// });
// app.get('/add',(req,res,next)=>{
//     console.log(req);
//     res.send('<h1>Express works -Add</h1>')
// });
// app.get('/delete',(req,res,next)=>{
//     console.log(req);
//     res.send('<h1>Express works -Delete</h1>')
// });
// app.listen(3000, () => {
//     console.log('Server started at port 3000');
// });
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/send', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/massage" method="POST">
                    <input name="Name" type="text" placeholder="Enter your name"/>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});
app.post('/massage', (req, res) => {
    console.log(req.body.Name);
    res.send(`<h1>Message received: ${req.body.Name}</h1>`);
});
app.listen(3000, () => {
    console.log('Server started at port 3000');
});
