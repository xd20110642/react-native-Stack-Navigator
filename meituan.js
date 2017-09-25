import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    ScrollView,
}  from 'react-native';

class MeiTuan extends React.Component{
    static navigationOptions = {
        title: '美团',
    }
    constructor(props)
    {
        super(props)
        this.state={}
    }
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View >
                <View styles={style.a}>
                    <Text>酒店</Text>
                </View>

                <View styles={style.a}>
                    <View styles={style.b}>
                        <Text>世界第一</Text>
                    </View>

                    <View styles={style.b}>
                        <Text>知乎</Text>
                    </View>
                </View>

                <View styles={style.a}>
                    <View styles={style.b}>
                        <Text>世界第一</Text>
                    </View>

                    <View styles={style.b}>
                        <Text>知乎</Text>
                    </View>
                </View>
                <Button title="点击有奖" onPress={ () => navigate('chat')}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    flex:{
        flex:1,
        backgroundColor:'#ccc',
        flexDirection:'row'
    },
    a:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    b:{
        flex:1,
        justifyContent:'center'
    }
})

module.export=MeiTuan;