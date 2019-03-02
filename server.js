import path from "path"
import Express from "express"
import React from "react"
import configureStore from "./src/redux/store"
import { Provider } from "react-redux"
import Routes from "./Routes"
import { renderToString } from "react-dom/server"
import { StaticRouter } from 'react-router-dom';

const app = Express()
const port = 3000

//enable folder access to server
app.use("/dist", Express.static("dist"))

app.use(handleRender)

// to handle bad url by routing it from index 
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, './index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

function handleRender(req, res) {
  const context = {}
  // Create a new Redux store instance
  const store = configureStore()

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>

      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
     
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preLoadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preLoadedState))
}

function renderFullPage(html, preLoadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState)}
        </script>
        <script src="dist/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, () => console.log(`server stated on ${port}`))
