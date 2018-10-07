const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const nextConfig = require('./next.config')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3000 : 6661
const app = next({ dev, conf: nextConfig })
const handle = app.getRequestHandler()

const beerPath = /^\/beer\/(\d+)$/

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    const matches = pathname.match(beerPath)

    if (matches) {
      const [, id] = matches
      app.render(req, res, '/beer', { id, ...query })
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
