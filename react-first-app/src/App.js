import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  }

onSubmit(author,text){
const newState = { data: this.state.data.concat({author,text}) };

this.setState(newState);
}

  componentDidMount(){
    this.setState({data: [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ]});
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList {...this.state} />
        <CommentForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map(function(comment) {
         return (
           <Comment author={comment.author} key={comment.id}>
             {comment.text}
           </Comment>
         );
       });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
const defaultState = {author: '', text: ''};
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = defaultState;
  }

onSubmit(text,value){

  this.setState(defaultState);
  this.props.onSubmit(text,value);
}

  render() {

// const {onSubmit} = this.props;

    return (
      <form className="commentForm">
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={(e) => this.setState({author: e.target.value})}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
          />
        <input type="button" value="Post" onClick={() => this.onSubmit(this.state.author,this.state.text)}/>
        </form>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default CommentBox;
