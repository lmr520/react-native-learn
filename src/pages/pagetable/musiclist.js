import React from "react";
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage} from "react-native";
import { LargeList } from "react-native-largelist-v3";
import { Card, ListItem, Button, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider, Overlay, Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
export default class musiclist extends React.Component {
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
                            onPress={ navigation.getParam('back') } />
                    </View>

                </View>
            ),
            headerTitle: (
                <View style={ { marginLeft: 100 } }>
                    <Text>消息中心</Text>
                </View>


            ),
            headerRight: (
                <View style={ { flex: 1, flexDirection: 'row' } }>
                    <View style={ { width: 50, height: 40, alignItems: 'center', justifyContent: 'center' } }>
                        <MaterialCommunityIcons
                            raised
                            name='folder-search'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 32 }
                            onPress={ navigation.getParam('exitlogin') } />
                    </View>
 
                </View>

            ),
        };
    };
  _sectionCount = 10;
  _rowCount = 10;
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
    const data = [];
    for (let section = 0; section < this._sectionCount; ++section) {
      const sContent = { items: [] };
      for (let row = 0; row < this._rowCount; ++row) {
        sContent.items.push(row);
      }
      data.push(sContent);
    }
    return (
      <LargeList
        style={styles.container}
        data={data}
        heightForSection={() => 50}
        renderSection={this._renderSection}
        heightForIndexPath={() => 50}
        renderIndexPath={this._renderIndexPath}
      />
    );
  }

  _renderSection = (section) => {
    return (
      <View style={styles.section}>
        <Text>
          Section {section}
        </Text>
      </View>
    );
  };

  _renderIndexPath = ({ section, row }) => {
    return (
      <View style={styles.row}>
        <Image source={require('../../assets/images/ma.jpg')} style={{width:100,height:50}}></Image>
  <MaterialCommunityIcons
                            raised
                            name='human-handsup'
                            type='font-awesome'
                            color='#f50'
                            backgroundColor="#cccfff"
                            size={ 40 }/>
      
        <Image source={require('../../assets/images/long.jpg')}style={{width:100,height:50}}></Image>
        <View style={styles.line} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginLeft:10
  },
  line: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#EEE"
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
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});