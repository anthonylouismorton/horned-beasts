import { Component } from 'react';
class Main extends Component{
  render() {
    return (
    <>
      <HornedBeast title={'Rhinos'} imgURL={'https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_WW1106963/hero_full/4xzhm81mi7_Black_Rhino_WW1106963.jpg'} description={'Rhinos are native to Africa and are hunted by meanies for their horns'}/>
      <HornedBeast title={'Bighorn Sheep'} imgURL={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/New_Mexico_Bighorn_Sheep.JPG/1280px-New_Mexico_Bighorn_Sheep.JPG'} description={'Bighorn Sheep are native to North America'}/>
      
    </>
    )
  }
}
class HornedBeast extends Component {
  render() {
    return (
      <>
      <h2> I am a {this.props.title}</h2>
      <img src={this.props.imgURL} alt='hornedBeastImage' title={this.props.title}/>
      <p>{this.props.description}</p>
     </>
    )
  }
}
export default Main;
