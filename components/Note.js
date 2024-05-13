import { handleInput } from "./utility.js";

export default function newNote(heading="", body="", id) {
    let note = document.createElement("div");
    let style = note.style;
    style.display = "flex";
    style.flexDirection = "column"
    style.minWidth = "400px";
    style.minHeight = "400px";
    style.border = "7px solid white";
    style.borderRadius = "24px";

    let title = document.createElement("input");
    title.style.margin = "20px";
    title.style.border = "none"
    title.style.backgroundColor = "#071020";
    title.style.color = "white"
    title.style.height = "50px";
    title.style.fontSize = "20px";
    title.style.fontWeight = "bolder";
    title.style.outline = "none";

    title.addEventListener("input", (e) => {
        console.log(e.target.value.length);
    })

    let content = document.createElement("div");
    content.style.margin = "20px"
    content.style.color = "white";
    content.style.backgroundColor = "#071020";
    content.style.border = "0px";
    content.style.fontSize = "20px";
    content.style.fontWeight = "bolder";
    content.style.minHeight = "250px";
    content.style.outline = "none";
    content.style.lineHeight = "30px";
    content.contentEditable = true;
    // content. 
    content.addEventListener("input", (e) => {

        console.log(e.id);
        handleInput(e.target)
    })
    title.id = id;
    content.id = id;
    note.appendChild(title);
    note.appendChild(content);
    // let 
    return note;
}

