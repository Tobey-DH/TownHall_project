import http from 'http';
import { createReadStream, existsSync, statSync } from 'fs';
import { createRequire } from 'module';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../_site');
const port = process.env.PORT || 8080;

function send(res, status, headers, streamPath) {
  res.writeHead(status, headers);
  if (streamPath) createReadStream(streamPath).pipe(res); else res.end();
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent(url.parse(req.url).pathname || '/');
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    const filePath = path.join(root, reqPath);

    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mime = ext === '.html' ? 'text/html' : ext === '.css' ? 'text/css' : ext === '.js' ? 'text/javascript' : 'application/octet-stream';
      send(res, 200, { 'Content-Type': mime }, filePath);
    } else {
      send(res, 404, { 'Content-Type': 'text/plain' });
    }
  } catch (e) {
    send(res, 500, { 'Content-Type': 'text/plain' });
  }
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
