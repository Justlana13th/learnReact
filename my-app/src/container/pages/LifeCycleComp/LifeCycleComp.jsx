import React, {Component, Fragment} from 'react';
import './LifeCyclecomp.css';
import {connect} from 'react-redux';

class LifeCycleComp extends Component{

    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {
            count: 1
        }
        
    }

    static getDerivedFromStateProps(props, state){
        console.log('getDerivedFromStateProps');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(()=>{
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState ){
        console.group('shouldComponentUpdate');
        console.log('nextState', nextState);
        console.log('this state: ', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render(){
        console.log('render')
        return(
            <Fragment>
                <p>Halaman Lifecycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>LifeCycle Button {this.state.count}</button>
                <hr/>

        <p>Total Order: {this.props.order}</p>
            </Fragment>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp);