import './App.css';
import { Component } from 'react';
import Header from './Header.js';
function App() {
  return (
    <div>
      <Header />
      <Main message={'Hi there'}/>
      <Footer />
    </div>
  );
}

class Footer extends Component{
  render() {
    return <h1>I am a footer</h1>
  }
}
class Main extends Component{
  render() {
    return (
    <>
      <h1>I am a Main. My message is {this.props.message}
      </h1>
      <HornedBeast title={'Rhino'}/>
    </>
    )
  }
}
class HornedBeast extends Component {
  render() {
    return <h1> I am a horned beast with title of {this.props.title}</h1>
  }
}
export default App;
