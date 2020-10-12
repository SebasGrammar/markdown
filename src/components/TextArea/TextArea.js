import React from "react"

/* ASSETS */
import "./TextArea.scss"


export default function TextArea(props) {

    const {log} = props

    return (
        <textarea className="editor" onChange={log}>
            
        </textarea>
    )
}

