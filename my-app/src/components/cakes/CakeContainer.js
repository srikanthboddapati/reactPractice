import React from 'react'
import{ buyCake } from '../../redux/cake/cakeAction'
import { connect } from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of Cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
   return {
       noOfCakes: state.cake.noOfCakes
   }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);