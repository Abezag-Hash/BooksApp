import React, { Component} from 'react';
import {View, TextInput , Button , Text , TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import Profile from './Profile';
import Spinner from '../components/Spinner';
// import {withNavigation} from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

class LogIn extends Component {
    
    state = {
        loginid : '',
        password : '',
        error : '',
        logged : false,
        loading : false,
        signName : '',
        signEmail : '',
        signPassword : '',
        signPhone : '',
        signAbout : '',
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

    onButtonPress = () =>{
        // const {email, password} = this.state;
        const email = this.state.loginid;
        const password = this.state.password;

        this.setState({error : '' , loading : true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() =>{
            this.setState({logged : true , loading : false});
        })
        .catch(()=>{
            this.setState({ error : 'Authentication Failed' , loading : false});
        });

    }

    onSignUpButtonPress = () =>{
        
        const name = this.state.signName;
        const email = this.state.signEmail;
        const password = this.state.signPassword;
        const phone = this.state.signPhone;
        const about = this.state.signAbout;

        const db = firebase.app().database();

        this.setState({error : '' , loading : true});

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.setState({logged : true , loading : false}))
        .catch((err)=>{
            console.log(err);
            this.setState({ error : 'Authentication Failed' , loading : false});
        })

        db.ref('/Users').push({
            name : name,
            email : email,
            password : password,
            phone : phone,
            about : about,
        });

    }

    renderButton() {
        if(this.state.loading)
        {
            return <Spinner size = "small" />
        }
        else{
            return <Button title="LogIn" onPress = {this.onButtonPress.bind(this)} />;
        }
    }

    signrenderButton() {
        if(this.state.loading)
        {
            return <Spinner size = "small" />
        }
        else{
            return <Button title="Sign Up" onPress = {this.onSignUpButtonPress.bind(this)} />;
        }
    }

    // getUserData = async(email) =>
    // {
    //     var item;
    //     var current = {};
    //     var ref = firebase.database().ref('/Users');
    //     ref.once("value")
    //     .then(function(snapshot) {
    //         let data = snapshot.val();
    //         item = Object.values(data);
    //         var i;
    //         for(i=0;i<item.length;i++){
                
    //             if(item[i]['email'] === email)
    //             {  
    //                 current = item[i]
    //             }
    //         }
    //     })
    //     .catch((err) =>{
    //         current['name'] = "Test";
    //         current['email'] = "vm@gm.com";
    //         current['password'] = "1234567";
    //         current['phone'] = "37498238492";
    //         current['about'] = "khdakua ,dajbknk sda k";
    //         // this.setState({current : cur});
    //         console.log(err);
    //     });
    //     return current;
    // }

    renderContent() {
        

        if(this.state.logged)
        {
            
            var email = (this.state.signEmail || this.state.loginid);
            
            // var current = this.getUserData(email);
            // console.log('Hi');
            // console.log(current);
            // firebase.app().database().ref('/Users').on('value', (snapshot) => {
            //     let data = snapshot.val();
            //     item = Object.values(data);
            //     // console.log(data);
            //   });
            return (
                <View style = {{flex : 1}}>
                    <Profile 
                        logOut = {firebase.auth()} 
                        loggedState = {this.setState.bind(this)}
                        email = {email}
                    >
                    </Profile>
                </View>
            )
        }
        else{
            return (
                <View>
                    <TextInput 
                        placeholder="email"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.loginid} 
                        onChangeText={text => this.setState({loginid : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <TextInput 
                        secureTextEntry
                        placeholder="password"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.password} 
                        onChangeText={password => this.setState({password : password})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    {this.renderButton()}
                    <Text>{this.state.error}</Text>
                    <TextInput 
                        placeholder="Name"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.signName} 
                        onChangeText={text => this.setState({signName : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <TextInput 
                        placeholder="Email"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.signEmail} 
                        onChangeText={text => this.setState({signEmail : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.signPassword} 
                        onChangeText={text => this.setState({signPassword : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <TextInput 
                        placeholder="Phone Number"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.signPhone} 
                        onChangeText={text => this.setState({signPhone : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    <TextInput 
                        placeholder="About"
                        autoCorrect={false}
                        style={{height:20,width:100}} 
                        value = {this.state.signAbout} 
                        onChangeText={text => this.setState({signAbout : text})}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    />
                    {this.signrenderButton()}
                </View>
            )
        }   
    }
    render() {
        return(
            <View style={{flex : 1}}>
                {this.renderContent()}
            </View>
        )
    }

}

export default LogIn;
