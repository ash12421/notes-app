function deleteNotes() {
    let notes = document.getElementById("notes");

    console.log(notes);
    console.log(notes.children.length)
    for(;notes.children.length > 1;) {
        notes.removeChild(notes.firstChild);
    }
    // notes.appendChild(notes)
}

export function handleInput(el) {
    let id = el.id;
    console.log(id);    
}

