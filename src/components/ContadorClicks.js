import React from 'react'

class ContadorClicks extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      numclicks: 0,
    }
    this.nelsin = this.nelsin.bind(this);
  }
  nelsin () {
    this.setState({
      numclicks: this.state.numclicks + 1
    });
  }
  render () {
    return (
      <div className="">
        <p>van {this.state.numclicks}</p>
        <button onClick={this.nelsin}>click</button>
      </div>
    )
  };
}
export default ContadorClicks;