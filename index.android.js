import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    navigate,
    TouchableHighlight,
    TouchableNativeFeedback
}  from 'react-native';

import {
    StackNavigator
} from 'react-navigation';
// const Meituan=require('meituan')
// import Meituan from './meituan';


class MeiTuan extends React.Component{
    static navigationOptions = {
        title: '美团',
    }
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={{backgroundColor:'#ccc',margin:10,height:500}}>
               <View style={{flex:1,flexDirection:'row',borderWidth:1,borderColor:'#fff',height:200}}>
                   <View style={{flex:1,justifyContent:'center',alignItems:'center',borderRightWidth:1}}>
                       <Text>酒店</Text>
                   </View>

                   <View style={{flex:1,boderRightWidth:1,borderRightColor:'#fff'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#fff'}}>
                            <Text>123</Text>
                        </View>
                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                           <Text>123</Text>
                       </View>
                   </View>
                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                           <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                               <Text>123</Text>
                           </View>
                           <View style={{flex:1,justifyContent:'center',borderTopWidth:1,borderTopColor:'#fff',alignItems:'center'}}>
                               <Text>123</Text>
                           </View>
                       </View>


               </View>

                <View style={{flex:1,height:200}}>
                    <Button title="点击有奖"
                        onPress={ () => navigate('Chat')}/>
                </View>
            </View>

        )
    }
}
class Ele extends React.Component{
    static navigationOptions = {
        title: '饿了吗',
    }
    constructor(props){
        super(props)
        this.state={
            a:0
        }
    }
    _on(){
        let a=this.state.a+1
        this.setState({
            a:a
        })
        alert(a)
    }
    render(){
        return(
           <View>
               <TouchableHighlight onPress={this._on.bind(this)}>
                   <Text style={{textAlign:'center',padding:10}}>点我试试</Text>
               </TouchableHighlight>

                <TouchableNativeFeedback onPress={this._on.bind(this)} >
                    <Text style={{textAlign:'center',padding:10}}>点我试试{'\n'}
                    点了我{this.state.a}次
                    </Text>

                </TouchableNativeFeedback>
           </View>
        )
    }
}
//定义导航
const Nav=StackNavigator({
    Home:{screen:MeiTuan},
    Chat:{screen:Ele},
})
AppRegistry.registerComponent('a' , () => Nav );