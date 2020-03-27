import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemComponent(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFucntion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFucntion
    }
}


// If you don't wan't to connect mapStateToProps
// then pass first argument as null
export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
