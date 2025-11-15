const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const contactHandler = require("./api/contact").handler;
const estimateHandler = require("./api/estimate").handler;

const PUBLIC_DIR = __dirname;
const PORT = process.env.PORT || 8787;

function sendApiResponse(res, result) {
  res.writeHead(result.statusCode || 200, result.headers || {});
  res.end(result.body || "");
}

function composeEvent(req, body) {
  return {
    httpMethod: req.method,
    headers: req.headers,
    path: req.url,
    body
  };
}

async function handleApi(req, res) {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;
  const chunks = [];

  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", async () => {
    const body = Buffer.concat(chunks).toString("utf8");
    let result;
    try {
      if (pathname === "/api/contact") {
        result = await contactHandler(composeEvent(req, body));
      } else if (pathname === "/api/estimate") {
        result = await estimateHandler(composeEvent(req, body));
      } else {
        result = {
          statusCode: 404,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ error: "not_found" })
        };
      }
    } catch (error) {
      console.error("API error", error);
      result = {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "server_error" })
      };
    }
    sendApiResponse(res, result);
  });
}

function serveStatic(req, res) {
  const parsed = url.parse(req.url);
  let pathname = parsed.pathname;
  if (pathname === "/") {
    pathname = "/index.html";
  }
  const filePath = path.join(PUBLIC_DIR, pathname);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
    const stream = fs.createReadStream(filePath);
    stream.on("error", () => {
      res.writeHead(500);
      res.end("Server Error");
    });
    res.writeHead(200, { "Content-Type": getMimeType(filePath) });
    stream.pipe(res);
  });
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4"
  };
  return map[ext] || "application/octet-stream";
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) {
    handleApi(req, res);
  } else {
    serveStatic(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`BICP dev server running at http://localhost:${PORT}`);
});
