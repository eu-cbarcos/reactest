import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} name={this.props.name} onChange={this.props.onChange} value={this.props.value} className="text-black"/>
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Input
