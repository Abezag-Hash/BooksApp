import React, { Component} from 'react';
import {View, TextInput , Button } from 'react-native';
import { images } from "../constants";
import firebase from 'firebase';

class LogIn extends Component{

    state = {
        bookName: '',
        bookCover: images.theTinyDragon,
        rating: '',
        language: '',
        pageNo: '',
        author: '',
        strGenre : '',
        genre : [],
        description: ''
    }
    
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
            apiKey: "AIzaSyA0DXFjSgcfkfI0XFNzcxrBgKI8abnJcQo",
            authDomain: "bookstore-7af50.firebaseapp.com",
            projectId: "bookstore-7af50",
            storageBucket: "bookstore-7af50.appspot.com",
            messagingSenderId: "892232425094",
            appId: "1:892232425094:web:74a4a4664f96e211c4bb07",
            measurementId: "G-VQXHMY0LM7"});
        }
        else{
            firebase.app();
        }
    }

    onButtonPress(){

        // const navigation = useNavigation();

        const bookName = this.state.bookName;
        const rating = this.state.rating;
        const language =  this.state.language;
        const pageNo =  this.state.pageNo;
        const author =  this.state.author;
        const strGenre =  this.state.strGenre;
        const genre = strGenre.split(',') ;
        const description = this.state.rating;
        
        this.setState({genre : genre});

        const db = firebase.app().database();
        
        db.ref('/Books').push({
            email : this.props.email,
            bookName : bookName,
            rating : rating,
            language : language,
            pageNo : pageNo,
            author : author,
            genre : genre,
            description : description,
        });

        // console.log('Done');
        // console.log(this.props.route.params['email']);
        this.props.changeState({addBookPage : false});

    }
    render()  {
        return(
            <View>
                <TextInput 
                    placeholder="Name of the book"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({bookName : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="Rating"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({rating : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="Language"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({language : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="No of pages"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({pageNo : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="Author"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({author : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="Genre(Seperated by comma)"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({strGenre : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput 
                    placeholder="Description"
                    autoCorrect={false}
                    style={{height:20,width:100}} 
                    value = {this.state.loginid} 
                    onChangeText={text => this.setState({description : text})}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <Button title="Confirm" onPress = {this.onButtonPress.bind(this)} />
            </View>
        )
    }
}

export default LogIn;