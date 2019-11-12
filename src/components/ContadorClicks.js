import React from 'react'
import {withLog} from './withLog'

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
        <p>van {this.state.numclicks}++</p>
        <button onClick={this.nelsin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click</button>
      </div>
    )
  };
}
export default withLog(ContadorClicks);