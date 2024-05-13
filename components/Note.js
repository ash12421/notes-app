export default function newNote(heading="", body="") {
    let note = document.createElement("div");
    let style = note.style;
    style.display = "flex";
    style.flexDirection = "column"
    style.width = "400px";
    style.height = "400px";
    style.border = "7px solid white";
    style.borderRadius = "24px";

    let title = document.createElement("input");
    title.style.margin = "20px";
    title.style.border = "0px"
    title.style.backgroundColor = "#071020";
    title.style.color = "white"
    title.style.height = "50px";
    title.style.fontSize = "20px";
    title.style.fontWeight = "bolder";
    title.addEventListener("input", (e) => {
        console.log(e.target.value.length);
    })

    let content = document.createElement("textarea");
    content.style.margin = "20px"
    content.style.color = "white";
    content.style.backgroundColor = "#071020";
    content.style.border = "0px";
    content.style.fontSize = "20px";
    content.style.fontWeight = "bolder";
    content.style.height = "70%";
    // content. 

    note.appendChild(title);
    note.appendChild(content);
    // let 
    return note;
}