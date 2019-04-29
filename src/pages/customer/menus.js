import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { red } from 'ansi-colors';
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
]
export default class customer extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>
                   
                        <MaterialCommunityIcons
                            raised
                            name='reply'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 32 }
                            onPress={ navigation.getParam('back') } 
                            />
                           
                        {/* <Button
              icon={ <Icon name='ios-american-football' color='red'/> }
              backgroundColor="#cccfff"
              size={ 32 }
              buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
              onPress={ navigation.getParam('increaseCount') } /> */}
                        {/* <Icon name="ios-settings" size={40} color="red" /> */ }
                    </View>
                    {/* <View>  
            <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
          >
          </Button>
          </View> */}
                </View>
            ),
            headerTitle: (
                <View style={ { marginLeft: 100 } }>
                    {/* <MaterialCommunityIcons
        raised
        name='rhombus-split'
        type='font-awesome'
        color='#f50'
        backgroundColor="#cccfff"
        size={ 32 }
        onPress={ navigation.getParam('exitlogin') } /> */}
                    <Text>消息中心</Text>
                </View>


            ),
            headerRight: (
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>
                        <MaterialCommunityIcons
                            raised
                            name='account-plus'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 32 }
                            onPress={ navigation.getParam('exitlogin') } />
                        {/* <Button
              icon={ <Icon name='ios-american-football' color='red'/> }
              backgroundColor="#cccfff"
              size={ 32 }
              buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
              onPress={ navigation.getParam('increaseCount') } /> */}
                        {/* <Icon name="ios-settings" size={40} color="red" /> */ }
                    </View>
                    {/* <View>  
            <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
          >
          </Button>
          </View> */}
                </View>

            ),
        };
    };
    state = {
        username: '莫笙',
        search: '',
    }
    updateSearch = search => {
        this.setState({ search });
    };
    exitlogin = () => {
        AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    componentWillMount() {
        this.props.navigation.setParams({ back: this._signInAsync, exitlogin: this.exitlogin });
    }
    render() {
        const { search } = this.state;
        /* 2. Read the params from the navigation state */
        return (
            <View style={ styles.container }>
                <SearchBar
                    containerStyle={ style = { width: 320, height: 50, top: 10, borderRadius: 5, borderWidth: 1, borderColor: '#F0F0F0' } }
                    inputContainerStyle={ style = { height: 20, borderRadius: 25, top:0, backgroundColor: '#ffffff' } }
                    inputStyle={ style = { fontSize: 12, height: 20 } }
                    placeholder="请输入..."
                    onChangeText={ this.updateSearch }
                    value={ search }
                    lightTheme={ true }
                    clearIcon={ { icon: 'menu', color: 'gray' } }
                />
                 <ScrollView tabLabel="首页" style={ styles.list }>
          <View style={{top:5}}>
            {
              list.map((l, i) => (
                  
                <ListItem
                style={{margin:2}}
  
            subtitle={
                <View style={styles.subtitleView}>
              <Text style={{fontSize:12,color:'red'}}>在吗!收到请回复</Text>
                </View>
            }
            rightTitle={
                <View style={{ marginTop:-20,
                    marginRight:-40}}>
                  <Text style={styles.ratingText}>5 months ago</Text>
                </View>
            }
            // rightTitleStyle={style={   marginTop:-20,
            //     marginRight:-20,  justifyContent: 'right',
            //     alignItems: 'right',}}
            badge={{ value: 3, textStyle: { color: 'orange' },containerStyle:{marginBottom:-23}}}
                  key={ i }
                  leftAvatar={ { source: { uri: l.avatar_url } } }
                //   rightAvatar={ <MaterialCommunityIcons
                //     name='greater-than'
                //     color='#f50'
                //     backgroundColor="#cccfff"
                //     size={ 16 }
                //      />}
                  title={ l.name }
                />
              ))
            }
          </View>
        </ScrollView> 
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    viewTop: {
        height: 60,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        flexDirection: 'row'
    },
    txtTitle: {
        flex: 1,
        marginLeft: 10
    },
    iconSetting: {
        marginRight: 10
    },
    viewUser: {
        height: 250,
        backgroundColor: '#F0F0F0'
    },
    viewUserTop: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgUserTitle: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    txtName: {
        alignSelf: 'center'
    },
    txtGF: {
        alignSelf: 'center',
        marginTop: 40
    },
    viewEdit: {
        width: 150,
        marginTop: 20,
        height: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txtEdit: {
        marginLeft: 5,
        alignSelf: 'center',
        color: '#7997C7'
    },
    iconEdit: {
        color: '#7997C7',
        marginTop: 5
    },
    viewLove: {
        height: 150,
        borderBottomWidth: 10,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#ffffff'
    },
    viewLoveTop: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtCommon: {
        marginLeft: 15,
        flex: 1
    },
    iconCommon: {
        marginRight: 10
    },
    imgLove: {
        height: 90,
        width: 90,
        margin: 10,
        marginTop: 0
    },
    viewCommon: {
        height: 50,
        borderBottomWidth: 10,
        borderBottomColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
    list: {
        top:10,
        width:340,
        height:500,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    item: {
        margin: 3,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    subtitleView: {
        flexDirection:'column',

      },
      ratingImage: {
        height: 40,
        width: 100
      },
      ratingText: {
        color: 'grey'
      }
});