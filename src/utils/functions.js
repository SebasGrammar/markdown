// const container = document.querySelector(".container")

// now... here's something interesting here I had forgot. when you export something (a single 
// function like I did here) all the code in the module is going to be executed once.

// check this out with this line of code:
// console.log("HIT")

// let test =
//     `
// # 1
// ## 2
// ### 3
// `
// let text = test.split(/\n/).filter(line => line)
// text.map(line => {
//     let cue = line.split(" ")[0]
//     let content = line.split(cue).filter(text => text).join("").trim()
//     let splitTrigger = format(cue, content)

// })

function createElement(type, text) {
    const element = document.createElement(type)
    // console.log(element)
    element.textContent = text
    

    // element.textContent = "lol"
    return element
}

function format(cue, x) {
    switch (cue) {
        case "#":
            createElement("h1", x)
            return cue
        case "##":
            createElement("h2", x)
            return cue
        case "###":
            createElement("h3", x)
            return cue
    }
}

module.exports = {
    createElement
}