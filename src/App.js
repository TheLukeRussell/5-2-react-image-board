import React, {Component} from 'react';
import './App.css';

class ImageForm extends Component {
  render() {
    return(
      <form>
      </form>
    )
  }
};

class ImageList extends Component {
  render() {
    return(
      <ul>
      </ul>
    )
  }
};

class ImageBoard extends Component {
  render() {
    return(
      <div className='main-app'>
      <h1>Welcome to My Image Board!</h1>
      <ImageForm className='image-form' />
      <ImageList className='image-list' />
      </div>
    )
  }
}

export default ImageBoard;
