import React, {Component} from 'react';
import './App.css';

class ImageForm extends Component {

  state = ({
    url: '',
    caption: ''
  })

  handleChange = (event) => {
    if (event.target.id === 'image-url') {
      this.setState({
      url: event.target.value
    })
  } else if (event.target.id === 'caption') {
    this.setState({
      caption: event.target.value
    })
  }
  }

  handleButton = (event) => {
    event.preventDefault();
    const picture = {
      url: this.state.url,
      caption:this.state.caption
    }
console.log(picture);
    this.setState({
      url: '', 
      caption: ''
    })
  }

  render() {
  
    return(
      <div className='image-form-container'>
        <h2>Submit your own photo below!</h2>
      <form onSubmit={this.handleButton} className='image-form'>
        <label htmlFor='url'>
        <input id='image-url' type='text' placeholder='Image URL' value={this.state.url} onChange={this.handleChange}></input>
        </label>
          <div></div>
        <label htmlFor='caption'>
          <input id='caption' type='text' placeholder='Image Caption' value={this.state.caption} onChange={this.handleChange}></input>
        </label>
          <div></div>
        <button type="submit">- Submit Your Photo -</button>
      </form>
      </div>
    )
  }
};

class ImageList extends Component {
  render() {
let pictures = this.props.pictures.map(function(picture) {
  return (
    <div className="image-list-div">
      <img src={picture.url}/>
      <h3>{picture.caption}</h3>
    </div>
  )

});
  return (
    <ul>
      {pictures}
    </ul>

    )
  }
}

class ImageBoard extends Component {

  state = ({
    pictures: [
      {url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Iridium-4_Mission_%2825557986177%29.jpg', caption: 'Space X'},
      {url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/42374725534_a653d1b7cb_k_0.jpg', caption: 'Launch of Space X Vessel'},
      {url: 'https://www.teslarati.com/wp-content/uploads/2019/09/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-crop-3.jpg', caption: 'Space X Vessel in Space'}
    ]
  })
  render() {
    return(
      <div className='main-app'>
      <h1>Luke's Image Board!</h1>
      <ImageForm className='image-form' />
      <ImageList className='image-list' pictures={this.state.pictures}/>
      </div>
    )
  }
}

export default ImageBoard;
