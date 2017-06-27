import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

const author = {
  name: 'Bear Cub',
  avatarUrl: 'images/bear.png'
};

function Avatar(props){
  return(
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Button(props){
  function handleClick(evt){
    evt.preventDefault();
    console.log('The button was clicked');
  }
  return(
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick={this.handleToggle}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function App(){
  return(
    <div>
      <Welcome name="Bear" />
      <Clock />
      <Welcome name="Cub" />
      <Clock />
      <Comment
        author={author}
        text="I like React!"
        date="06/26/2017"
      />
      <Button />
      <Toggle />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('main')
);
