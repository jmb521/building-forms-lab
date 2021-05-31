import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {


  addBand = ()=> {

  }
  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/>
      </div>
    )
  }
}

export default connect({addBand})(BandsContainer)
