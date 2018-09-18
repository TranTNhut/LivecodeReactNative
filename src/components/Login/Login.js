import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,ImageBackground,TouchableOpacity,Image} from 'react-native';

const background = require('../../images/bg-login.jpg');
const userIcon = require('../../images/icon-user.png');
const lockIcon = require('../../images/icon-lockuser.png');
const BASE_URL = "http://192.168.1.108:8080/www/ServerReact/views/";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            result:"CHUA LOGIN"
            //token:"...."
        }
    }
    _onPressLogin(){
        let serviceUrl =  BASE_URL + "UsersViews.php";
        fetch(serviceUrl,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username:this.state.username,
            })
        })
        .then((reponse) => reponse.json())
        .then((reponseJSON)=>{
            this.setState({
                result:reponseJSON.access_token
            })
        })
        .catch((e) =>{
            console.log(e);
        })
    }

    _onForgot(){
        alert("forgot");
    }

    _onSingup(){
        alert("singup");
    }

    render(){
        return(
            <ImageBackground style={[styles.wrapper,styles.background]} source={background} resizeMode="stretch">
                <View style={styles.wrapper}>
                    <View style={[styles.boxtitle, styles.box]}>
                        <Text style={styles.forgotPasswordText}>LOGIN FORM</Text>
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image source={userIcon} resizeMode="contain" style={styles.icon}/>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={(username) => this.setState({username})}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={"black"}
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <View style={styles.iconWrap}>
                            <Image source={lockIcon} resizeMode="contain" style={styles.icon}/>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(password) => this.setState({password})}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={"black"}
                        />
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity onPress={()=>{this._onPressLogin()}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this._onForgot()}}>
                            <View >
                                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._onSingup()}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Sign Up</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    {/*<View style={[styles.boxtitle, styles.box]}>*/}
                        {/*<Text>{this.state.result}</Text>*/}
                        {/*/!*<Text>{this.state.token}</Text>*!/*/}
                    {/*</View>*/}
                </View>
            </ImageBackground>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        padding:20
    },
    background:{
        width: null,
        height:null,
    },
    boxtitle:{
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        flex: 1,
        paddingHorizontal: 5,
        backgroundColor:'#FFF',
        fontSize:15
    },
    icon:{
        width:25,
        height:25,
    },
    iconWrap:{
        paddingHorizontal:7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#d73352"
    },
    inputWrap:{
        flexDirection:"row",
        marginVertical: 5,
        height:42,
        backgroundColor:"transparent",
    },
    button:{
        backgroundColor:"#d73352",
        paddingVertical: 8,
        marginVertical:8,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        color:'#FFFFFF',
        textAlign: 'center',

    },
    forgotPasswordText:{
        color:'#000',
        backgroundColor:"transparent",
        textAlign: 'center',
    },
});