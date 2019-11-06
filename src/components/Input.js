import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  componentDidMount () {
    console.log("on: componentDidMount: " + this.props.label);
  }
  componentDidUpdate () {
    console.log("on: componentDidUpdate: " + this.props.label);
  }
  componentWillUnmount (){
    console.log("on: componentWillUnmount: " + this.props.label);
  }
  render(){
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input name={this.props.name} onChange={this.onChange} value={this.setState.value}/>
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  //onChange: PropTypes.func.isRequired
}

/*
const Input = ({name, label, id, onChange}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={name} onChange={onChange}/>
    </div>
  )
}


*/
export default Input
