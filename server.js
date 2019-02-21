import path from "path"
import Express from "express"
import React from "react"
import configureStore from "./src/redux/store"
import { Provider } from "react-redux"
import App from "./src/App"
import { renderToString } from "react-dom/server"

const app = Express()
const port = 3000

//enable folder access to server
app.use("/dist", Express.static("dist"))

app.use(handleRender)

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = configureStore()

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
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
