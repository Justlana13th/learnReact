import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';

class Product extends Component {

    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://seeklogo.net/wp-content/uploads/2019/01/dji-logo.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://cdn.onlinewebfonts.com/svg/img_258388.png" alt=""/>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);