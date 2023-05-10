// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

const express = require('express')
const compression = require('compression')
const nodemailer = require("nodemailer")
const { renderPage } = require('vite-plugin-ssr/server')
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = express()

  app.use(compression())
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  if (isProduction) {
    const sirv = require('sirv')
    app.use(sirv(`${root}/dist/client`))
  } else {
    const vite = require('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }

  app.post("/sendemail", async (req, res, next) => {
    const { name, subject, message } = req.body;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: `Online Contact Form <${process.env.MAIL_EMAIL}>`,
      to: process.env.MAIL_EMAIL,
      subject: `${subject} - Online Contact Form`,
      text: message
      // html: htmlToSend,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      // console.log(error)
      // console.log(info)
      if (error) {
        return res.send({
          success: false,
          message: "Error sending message",
        });
      } else {
        return res.send({
          success: true,
          message: "Message sent successfully",
        });
      }
    });

    return res.json({
      success: false
    });

  })

  app.get('*', async (req, res, next) => {
    // console.log(req)
    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    const { body, statusCode, contentType, earlyHints } = httpResponse
    if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
