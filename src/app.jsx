import * as React from "react";
import * as ReactDom from "react-dom";

import {Note} from "./note.jsx"
import {NoteList} from "./note-list.jsx"

import {HashRouter as Router, Route, } from 'react-router-dom'

ReactDom.render(
    <Router>
        <div>
        <Route exact path="/" component={NoteList}/>
        <Route path="/note/:id" component={({match})=><Note noteId={match.params.id}/>}/>
        </div>
    </Router>,
document.getElementById("app"))