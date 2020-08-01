import React, {Component} from 'react'
import Band from './Band'

class Bands extends Component {
    render() {
        let bands = this.props.bands.map(
            (band) => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>
        )

        return (
            <div>
                {bands}
            </div>
        )
    }
}

export default Bands

        /** console.log(Array.isArray(bands)) // => true 
         * ah I was getting this error because the tests were set up for the newly
         * restructure version of state... my behavior was working fine,
         * but the tests thought something were wrong because they were testing for a different
         * structure of state... gives some perspective to how easily tests can be misleading
         * if they are hardwired for a specific model/data structure
         */