import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Note extends Component {

  state = {
    editing : false,
  }

  componentDidMount(){
    this.setState({
      id : this.props.id,
      content : this.props.content
    })
  }

  componentWillMount() {
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 150, 'px'),
			top: this.randomBetween(0, window.innerHeight - 150, 'px'),
		}
    }
    randomBetween(x, y, s) {
		return x + Math.ceil(Math.random() * (y-x)) + s
    }

  edit = () => {
    this.setState({
      editing : true
    })
  }

  remove = () => {
    this.props.removeNote(this.props.id)
  }

  update = (e) => {
    this.setState({
      content : e.target.value
    })
  }

  save = (e) => {
    e.preventDefault()
    this.props.saveNote(this.props.id,this.props.content)
    this.setState({
      editing :false
    })
  }

  render() {
    return (
      (this.state.editing) ? (

      <div className="note" style={this.style}>
				<form onSubmit={this.save}>
            <textarea type="textarea" onChange={this.update} value={this.state.content}></textarea>
					<button type="submit" id="save" onClick={this.save}>Save</button>
				</form>
			</div>


      ) : (
        <Draggable>
        <div className="note" style={this.style}>
					<p>{this.state.content}</p>
					<span>
						<button onClick={this.edit} id="edit">E</button>
						<button onClick={this.remove} id="remove">X</button>
					</span>
				</div>
        </Draggable>
    )

    );
  }
}

export default Note;
