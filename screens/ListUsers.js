import React, { Component} from 'react';
import _ from 'lodash';
import {View , Text } from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from './Actions/Actions.js';

class LogIn extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        console.log('hiiii');
        // console.log(this.props);
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('po');
        // console.log(nextProps);
    }
    render() {
        // console.log('NO');
        console.log(this.props.employee);
        return(
            <View>
                <Text>hi</Text>
                {/* <Text>{this.props}</Text> */}
            </View>
        )
    }

}

const mapStateToProps = state =>{
    const employee = _.map(state.employee , (val,uid) =>{
        return {...val , uid};
    })

    return {employee};
}

export default connect(mapStateToProps , {employeesFetch})(LogIn);
