import React, {Component} from 'react';
import './App.css';

class ImageForm extends Component {

  state = ({
    url: '',
    caption: '',
    name: ''
  })

  handleChange = (event) => {
    if (event.target.id === 'url') {
      this.setState({
      url: event.target.value
    })
  } else if (event.target.id === 'caption') {
    this.setState({
      caption: event.target.value
    })
  } else if (event.target.id === 'name') {
    this.setState({
      name: event.target.value
    })
  }

  }

  handleButton = (event) => {
    event.preventDefault();
    
    const picture = {
      url: this.state.url,
      caption: this.state.caption,
      name: this.state.name
    }

    this.props.handleButton(picture);

    this.setState({
      url: '', 
      caption: '',
      name: ''
    })
  }

  render() {
  
    return(
      <div className='image-form-container'>
        <h2>Submit your own RADICAL photo below!</h2>
      <form autocomplete="off" className='image-form'>
        <label htmlFor='url'>
        <input id='url' type='URL' name='url' placeholder='Image URL' value={this.state.url} onChange={this.handleChange} />
        </label>
          <div></div>
        <label htmlFor='caption'>
          <input id='caption' type='text' name='caption' placeholder='Image Caption' value={this.state.caption} onChange={this.handleChange} />
        </label>
        <div></div>
        <label htmlFor='name'>
          <input id='name' type='text' name='name' placeholder='Your Name' value={this.state.name} onChange={this.handleChange} />
        </label>
          <div></div>
        <input onClick={this.handleButton} id='button' type="submit" value="- Submit Photo -"/>
      </form>
      </div>
    )
  }
};

class ImageList extends Component {
  render() {
let pictures = this.props.pictures.map(function(picture, index) {
  return (
    <div key={index} className="image-list-div">
      <img src={picture.url} alt=''/>
      <h3>{picture.caption}</h3>
      <p>Submitted by: {picture.name}</p>
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
      {url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Iridium-4_Mission_%2825557986177%29.jpg', caption: 'Space X', name: 'Elon Musk'},
      {url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/42374725534_a653d1b7cb_k_0.jpg', caption: 'Launch of Space X Vessel', name: 'Andrew Yang'},
      {url: 'https://www.teslarati.com/wp-content/uploads/2019/09/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-crop-3.jpg', caption: 'Space X Vessel in Space', name: 'Your Mom'}
    ]
  })

handleButton = (picture) => {
  let pictures = this.state.pictures.slice();
  pictures.unshift(picture);
  this.setState({
    pictures
  })
}

  render() {
    return(
      <div className='main-app'>
      <h1>My <div id='radical'>RADICAL</div> Image Board</h1>
      <ImageForm className='image-form' handleButton={this.handleButton}/>
      <ImageList className='image-list' pictures={this.state.pictures}/>
      <h1>Have a <div id='radical'>RADICAL</div> day!</h1>
      </div>
    )
  }
}

export default ImageBoard;
