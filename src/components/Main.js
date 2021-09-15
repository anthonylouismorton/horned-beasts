import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class Main extends Component{
  render() {
    const bios = this.props.beastBios;

    return (
      <Container>
        <h2>{this.props.message}</h2>
          <Row>
            <Col><BeastImage bio={bios[0]} /></Col>
            <Col><BeastImage bio={bios[1]} /></Col>
            <Col><BeastImage bio={bios[2]} /></Col>
          </Row>
          <Row>
            <Col><BeastImage bio={bios[3]} /></Col>
            <Col><BeastImage bio={bios[4]} /></Col>
            <Col><BeastImage bio={bios[5]} /></Col>
          </Row>
      </Container>
    )
  }
}
class BeastImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
      likes: "❤"
    }
  }
  handleClick = (event) => {
    let count = 0
    this.setState({
      votes: this.state.votes + 1,
      likes: "❤"
    });
  }
  render() {
    return (
      <>
      <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='hornedBeastImage' rounded fluid/>
      <h2>{this.state.likes} {this.state.votes}</h2>
     </>
    )
  }
};