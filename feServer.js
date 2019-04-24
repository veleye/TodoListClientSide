// app.js

var http = require('http');
var fs = require('fs');
var url = require('url');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  


	var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

	  if(pathname == "/") {
        var html = fs.readFileSync("homePage.html", "utf8");
        res.write(html);
	  }else if (pathname == "/helper.js") {
        var script = fs.readFileSync("helper.js", "utf8");
        res.write(script);
      }else if (pathname == "/main.css") {
            var cssRegister = fs.readFileSync("main.css", "utf8");
            res.write(cssRegister);
      }else if(pathname == "/registerPage.html") {
            var registerHtml = fs.readFileSync("registerPage.html", "utf8");
            res.write(registerHtml);
      }else if(pathname == "/todoListPage.html") {
        var registerHtml = fs.readFileSync("todoListPage.html", "utf8");
        res.write(registerHtml);
      }else if(pathname == "/todoListPageCssHelper.css") {
        var registerCss = fs.readFileSync("todoListPageCssHelper.css", "utf8");
        res.write(registerCss);
      }else if(pathname == "/todoListPageHelper.js") {
        var script = fs.readFileSync("todoListPageHelper.js", "utf8");
        res.write(script);
      }else if(pathname == "/userTodoLists.html") {
        var registerHtml = fs.readFileSync("userTodoLists.html", "utf8");
        res.write(registerHtml);
      }else if(pathname == "/userTodoLists.js") {
        var script = fs.readFileSync("userTodoLists.js", "utf8");
        res.write(script);
      }else if(pathname == "/userTodoLists.css") {
        var css = fs.readFileSync("userTodoLists.css", "utf8");
        res.write(css);
      }else if(pathname == "/homePage.js") {
        var script = fs.readFileSync("homePage.js", "utf8");
        res.write(script);
      }
        res.end();
    });

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000');  

