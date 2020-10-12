import React from "react"

/* ASSETS */
import "./Previewer.scss"

export default function Previewer(props) {
    const {content, children} = props
    console.log(props.children)
    return (
        <div className="previewer">
            {/* {content} */}
            {children}
        </div>
    )
}