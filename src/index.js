import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import PostForm from './PostForm';
import AllPost from './AllPost';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
     <div>
       <AllPost/>
       <PostForm/>  
     </div>
     </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
