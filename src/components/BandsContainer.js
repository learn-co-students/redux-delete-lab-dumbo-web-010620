import React, { Component } from 'react'
import BandInput from './BandInput';
// import Band from './Band'
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    /**
     * figuring out what the bands array elements look like is a bit confusing:
     * this is what I think it is
     * let store = {state: {bands: [bandName: "string"]}}
     */
    // let everyBand = this.props.bands.map ( (band, index) => <Band key={index} band={band} /> )

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {/* {everyBand} */}
        <Bands 
          bands={this.props.bands} 
          deleteBand={this.props.deleteBand} 
        />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

/** 5) In the Band component, you will need to add a button that dispatches 
 * an action of type 'DELETE_BAND' and then passes through that band's id 
 * as the action.id. This dispatched action should be provided as a prop 
 * from BandsContainer.
 * 
 * THIS SEEMS TO DEFEAT THE PURPOSE OF REDUX
 * PROP DRILLING FROM BandsContainer > Bands > Band
 */ 
const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
