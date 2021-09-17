import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './Beast';


export default class Main extends Component{
  render() {
    return (
    <Container>
      <Row>
        {this.props.beastBios.map( (beast, idx) =>
          <HornedBeast
            key = {idx}
            title = {beast.title}
            image = {beast.image_url}
            description = {beast.description}
            keyword = {beast.keyword}
            horns = {beast.horns}
            openModalHandler = {()=>this.props.openModalHandler(beast)}
          />
        )};
      </Row>
    </Container>
    );
  }
}