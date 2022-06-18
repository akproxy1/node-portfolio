const fs = require('fs');
const http = require('http');
const url = require('url');


/////////////////////////////////
// SERVER
const home = fs.readFileSync(
  `${__dirname}/home.html`,
  'utf-8'
);

const contact = fs.readFileSync(
  `${__dirname}/contact.html`,
  'utf-8'
);

const about = fs.readFileSync(
  `${__dirname}/about.html`,
  'utf-8'
);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // home page
  if (pathname === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    res.end(home);

    // About page
  } else if (pathname === '/about') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    res.end(about);

    // Contact page
  } else if (pathname === '/contact') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    res.end(contact);

    // Not found
  } else if (pathname === '/home') {
    res.writeHead(301, {
      'Location': 'http://' + req.headers['host']
    });

    return res.end();

    // Contact page
  }
  else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening to requests on port 5000');
});
