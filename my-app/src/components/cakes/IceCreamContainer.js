import React from 'react'
import { buyIceCream } from '../../redux/iceCream/iceCreamAction'
import {connect} from 'react-redux'
function IceCreamContainer(props) {
    return (
        <div>
            <h2>no of icecreams - {props.noOfIceCreams}</h2>
            <button onClick = {props.buyIceCream}>BUYICECREAMS</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfIceCreams: state.iceCream.noOfIceCreams
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        buyIceCream: () => dispatch(buyIceCream())
        }
    }


export default  connect (mapStateToProps,mapDispatchToProps)(IceCreamContainer)