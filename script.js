import newNote from './components/Note.js'

let n = 1;
document.getElementById("add").addEventListener("click", (e) => {
    let notes = document.getElementById("notes");
    let note = newNote(n);
    note.id = n;
    let adddiv = document.getElementById("add-note");
    let children = notes.children;
    // if (children.length <= 1) {
    //     notes.removeChild(children[0]);
    // } else {
    //     notes.removeChild(children[children.length - 2]);
    // }
    notes.appendChild(note)
    notes.appendChild(adddiv);
    console.log(children.length);
    n++;
}) 




// document.getElementById("deletenotes")
