import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
export default class Drawer extends Component {
    static navigationOptions = {
        drawerLabel:'test',
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('../images/library.png')}
                    style={[{width:24,height:24},{tintColor:tintColor}]}
                />
            );
        },
    };
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    this.props.navigation.navigate('DrawerClose')
                }}>
                    <Text>Close drawer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});