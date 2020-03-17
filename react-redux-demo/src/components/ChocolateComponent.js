import React from 'react'
import { connect } from 'react-redux'
import { buyChocolate } from '../redux'

function ChocolateComponent(props) {
    return (
        <div>
            <h2>Number of Chocolates - {props.numOfChocolates}</h2>
            <button onClick={props.buyChocolate}>Buy Chocolates</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfChocolates: state.chocolate.numOfChocolates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: () => dispatch(buyChocolate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateComponent)
