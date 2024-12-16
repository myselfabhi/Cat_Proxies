// server.js
const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  try {
    createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // console.log(parsedUrl);
      // console.log(pathname, query);

      if (pathname === "/a") {
        app.render(req, res, "/a", query)
      } else if (pathname === "/b") {
        app.render(req, res, "/b", query)
      } else {
        handle(req, res, parsedUrl)
      }
    }).listen(3001, (err) => {
      if (err) throw err
      console.log("> Ready on http://localhost:3001")
    })
  } catch (err) {}
})
