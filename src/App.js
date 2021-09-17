import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import beastBios from './data.json';
import SelectedBeast from './components/SelectedBeast';

 export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      beast: beastBios[0],
      beastBios: beastBios
    };
  };

  handleSelect = (selection) => {
    if(selection === '')
    {
      this.setState({beastBios: beastBios})  
    }
    else{
      let update = beastBios.filter(beast => beast.horns === Number(selection))
      this.setState({
        beastBios: update
      })
    }

    
  }

  openModalHandler = (beast) =>{
    this.setState({
      showModal: true,
       beast: beast})
    
  }
  closeModalHandler = () =>{
    this.setState({showModal: false})
  }
  render(){
    return (
      <Container>
        <Header form={this.handleSelect} title="Horned Beasts" />
        <Main openModalHandler={this.openModalHandler} beastBios={this.state.beastBios}/>
        <Footer title="Created by Anthony Morton"/>
        <SelectedBeast beast={this.state.beast} show={this.state.showModal} close={this.closeModalHandler}/>
      </Container>
    );
  };
};

