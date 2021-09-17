import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ListSorter from './ListSorter';
export default class Header extends Component{
  render() {
    return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            {this.props.title}
          </Navbar.Brand>
          <ListSorter form={this.props.form} />
      </Navbar>
    );
  }
}
