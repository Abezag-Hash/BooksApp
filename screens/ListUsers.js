import React, { Component} from 'react';
import _ from 'lodash';
import {View , Text ,FlatList,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {booksFetch} from './Actions/Actions.js';

class LogIn extends Component {
    current = [];
    componentWillMount() {
        this.props.booksFetch();
        this.findCurrent(this.props.book);
    }
    componentDidMount() {
        this.props.booksFetch();
        this.findCurrent(this.props.book);
    }
    findCurrent = (book) =>{
        for(var b in book)
        {
            if(book[b].bookName === this.props.route.params['book'])
            {
                // console.log(book[b].email);
                if(!this.current.includes(book[b].email))
                    this.current.push(book[b].email);
            }
        }
    }
    render() {
        return(
            <View>
                <FlatList
                    data={this.current}
                    renderItem={(item)=>{
                        return (
                            <View>
                                <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Profile1' , {email : item.item})}}>
                                    <Text>{item.item}</Text>
                                </TouchableOpacity>
                            </View>
                            )}}
                    keyExtractor={(item) => `${item.email}`}
                    />
                {/* <Text>hi</Text> */}
            </View>
        )
    }
}

const mapStateToProps = state =>{
    // const employee = _.map(state.employee, (val, uid) => {
    //     return { ...val, uid };
    //   });
      const book = _.map(state.book, (val, uid) => {
        return { ...val, uid };
      });
      return { book };
}

export default connect(mapStateToProps , {booksFetch})(LogIn);
