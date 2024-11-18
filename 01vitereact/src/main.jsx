import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function Reactelement(){
  return(
    <h1>Hello World</h1>
  )
}

export default Reactelement;

const anotherUser = "chai aur react from anther user"
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com', target:'_blank'
  },
  'click here to visit google',
  anotherUser

)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
  

  <>
  {anotherElement}
  {Reactelement()}
  <Reactelement/>
  {reactElement}
  <App/>
  </>
  
  
)
