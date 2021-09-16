import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export default class BeastImage extends Component {
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
    this.props.modalHandler();
  }

  render() {
    return (
      <>      
      <Card style={{ width: '18rem' }}>
      <Card.Title>{this.props.keyword}</Card.Title>
        <Card.Img  onClick={this.handleClick} src={this.props.image} alt='hornedBeastImage' variant="top" />
        <Card.Body>
          <Card.Text>
            {this.state.likes} {this.state.votes}
          </Card.Text>
        </Card.Body>
      </Card>
     </>
    )
  }
};