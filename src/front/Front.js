import React, {useState} from "react"


/* ASSETS */
import "./Front.scss"

/* UTILS */
import {createElement} from "../utils/functions"

/************/

import Header from "../components/Header" // the name of the folder will do here. That's what index is for (:
import TextArea from "../components/TextArea"
import Previewer from "../components/Previewer"

console.log(createElement("h1", "jjdas"))

export function Test() {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    )
}

export default function Front() {

    // const [input, setInput] = useState(<h4>lol</h4>)
    const [input, setInput] = useState({
        elements: [<h2>lol</h2>]
    })

    function log(event) {
        // console.log(event.target.value)

        // setInput(event.target.value)
        console.log(createElement("h1", event.target.value))

        // setInput( createElement("h1", event.target.value) )
        setInput({
            elements: [<h2>One</h2>, <h1>Two</h1>]
        })

        // setInput( createElement("h1", event.target.value).textContent )


        // console.log(input)
    }

    return (
        <div className="container">
            <Header />
            <TextArea log={log} />


            {/* <Previewer content={input} /> */}
            <Previewer>
                <h1>QQe</h1>
                <h2>woe</h2>
                {
                    input.elements
                }
            </Previewer>
        </div>
    )
}