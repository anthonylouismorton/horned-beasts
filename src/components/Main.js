import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BeastImage from './Beast';

export default class Main extends Component{
  render() {
    return (
    <Container>
      <Row>
        {this.props.beastBios.map( (beast) =>
          <BeastImage
            title = {beast.title}
            image = {beast.image_url}
            description = {beast.description}
            keyword = {beast.keyword}
            horns = {beast.horns}
            modalHandler = {()=>this.props.modalHandler(beast)}
          />
        )};
      </Row>
    </Container>
    );
  }
}