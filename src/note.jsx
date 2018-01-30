import * as React from "react"

export class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.getData(props.noteId)};
    }



    componentWillReceiveProps(nextProps) {
        this.setState({text: this.getData(nextProps.noteId)});
    }



    getData(id) {
        return localStorage.getItem("note-"+id) || "";
    }

    setData(id, v) {
        localStorage.setItem("note-"+id, v);
    }




    onTextChange(v) {
        this.setState({text: v});
        this.setData(this.props.noteId, v);
    }

    render() {
        return <textarea style={{width: "100%", height: "100%"}} value={this.state.text} onChange={e=>this.onTextChange(e.target.value)}>

               </textarea>
    }
}