import { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class ListSorter extends Component {
  constructor(props){
    super(props)
    this.state = {
      selection: ''
    }
  }
  selectHandler = (event) => {
  this.props.form(event.target.value)
    
  }
  render(){
    return(
      <Form>
        <Form.Select onChange={this.selectHandler}>
          <option>Sort Beasts by Horns</option>
          <option value="">All Horned Beasts</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </Form>
    )
  }
}