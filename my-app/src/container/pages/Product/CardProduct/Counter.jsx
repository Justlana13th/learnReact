import React, { Component } from 'react';
import {connect} from 'react-redux';
import actionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component {

    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlerPlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

        
    // }

    // handlerMinus = () => {
    //     if (this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //         this.handleCounterChange(this.state.order);
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    //     }
        
    // }

    render(){
        console.log(this.props)
        return(
            <div className="counter">
                        <button className="minus" onClick={this.props.handlerMinus}>-</button>
                        <input type="text" value={this.props.order}/>
                        <button className="plus" onClick={this.props.handlerPlus}>+</button>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerPlus: () => dispatch({type: actionType.PLUS_ORDER}),
        handlerMinus: () => dispatch({type: actionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);