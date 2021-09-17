import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends Component {
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
      
    });
    // this.props.modalHandler();
  }
  modalClick = (event) => {
    this.props.openModalHandler();
  }

  render() {
    return (
      <>      
      <Card style={{ width: '17.4rem' }}>
      <Card.Title>{this.props.keyword}{this.state.likes} {this.state.votes}</Card.Title>
        <Card.Img src={this.props.image} alt={this.props.description} onClick={this.modalClick} variant="top" />
        <Card.Body>
          <Card.Text>
            {this.props.description}
            <Button variant="secondary" onClick={this.handleClick}>Vote</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      
     </>
    )
  }
};