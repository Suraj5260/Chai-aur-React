import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

const ReactElement = React.createElement(
  'a',
  { Style: 'color: Red', href: 'https://www.google.com', target: '_blank' },
  "click Me to gooo Google!!"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
