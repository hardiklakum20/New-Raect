import { createRoot } from 'react-dom/client'
// import {jsx as __jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'
import React from 'react'


function MyApp(){
    return(
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target : '_blank'},
    'click me to visit google',
    anotherUser    
)


createRoot(document.getElementById('root')).render(      
    reactElement
)
