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

function App(){
  return(
    <div>
      <Welcome name="Butz" />
      <Welcome name="Bear" />
      <Welcome name="Cub" />
      <Comment
        author={author}
        text="I like React!"
        date="06/26/2017"
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
