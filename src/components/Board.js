import React, {Component} from 'react'
import Note from './Note'

class Board extends Component {
	state = {
    notes : []
  }

	addNew = () => {
    var id = Math.random()
    var content = "New note"
		this.setState({
			notes: [...this.state.notes, {id: id ,content: content}]
		})
    console.log("added new note")
      console.log(this.state.notes)
	}

	saveNote = (id,content) => {
    var notes = this.state.notes.map(note => {
      return (note.id !== id) ? note : {...note, content: content}
    })
		this.setState({
      notes : notes
		})
	}

	removeNote = (id) => {
    var notes = this.state.notes.filter(note => note.id !== id)
		this.setState({
			notes: notes
		})
	}


	render() {
		return (
			<div className="board">
				{this.state.notes.map(note => {
          return <Note key={note.id} id={note.id} content={note.content} removeNote={this.removeNote} saveNote={this.saveNote} />
        })}

				<button onClick={this.addNew} id="add">+</button>
			</div>
		)
	}
}

export default Board;
