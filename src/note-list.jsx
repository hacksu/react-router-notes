import * as React from "react"
import {Link} from "react-router-dom"

export class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {notes: this.getData(props.noteId)};
    }

    getData() {
        return JSON.parse(localStorage.getItem("notes") || "[]");
    }

    setData(v) {
        localStorage.setItem("notes", JSON.stringify(v));
    }




    addNote(v) {
        this.setState((prevState)=>{
            let notes = prevState.notes.concat([v]);
            this.setData(notes);
            return {notes: notes}

        });
    }

    render() {
        return  <div>
                    <ul>
                    {
                        this.state.notes.map((s, i) => <li  key={i}><Link to={'/note/'+i}>{s}</Link></li>)
                    }
                    </ul>
                    <div onClick={e=>this.addNote("Note")}>Add Note</div>
                </div>
    }
}