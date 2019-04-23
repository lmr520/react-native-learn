import React from 'react';
import { Button, Image, Platform, View, Text,Modal,TouchableHighlight,ScrollView,StyleSheet,FlatList} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from "react-native-vector-icons/Ionicons"
import LogoTitle from './LogoTitle';
var imgs=[{}];
export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: <LogoTitle />,
        headerRight: (
          <View style={{flex:1,flexDirection: 'row'}}>
          <View style={{width: 50, height: 40,alignItems: 'center', justifyContent: 'center'}}>
          <Icon.Button  //在图片后加, 自定义样式的文字
          name="ios-settings"
          color="red"
          onPress={navigation.getParam('increaseCount')}
          size={32}
          backgroundColor="#cccfff"
          >
          {/* <Text style={{fontFamily: 'Arial', fontSize: 15}}>投稿</Text> */}
        </Icon.Button>
          {/* <Icon name="ios-settings" size={40} color="red" /> */}
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
  
    componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
  
    state = {
      count: 0,
      modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
      }
    
    _increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    onActionSelected=(position)=>{
        if (position === 0) { // index of 'Settings'
          showSettings();
        }
      }
  
    render() {
      return (
        <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={1}
        renderTabBar={() => <DefaultTabBar />}
      >
        <ScrollView tabLabel="首页" style={styles.tabView}>
          <View style={styles.card}>
          <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
          </View>
        </ScrollView>
        <ScrollView tabLabel="水果" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Friends</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="蔬菜" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Messenger</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="肉类" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="好玩" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Other nav</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
      
      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Home Screen</Text>
      //     <Text>Count: {this.state.count}</Text>
      //     <Button
      //       title="Go to Details"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('Details', {
      //           itemId: 86,
      //           otherParam: '详情1',
      //         });
      //       }}
      //     />
      //     <Button
      //       title="Go to Cust"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('Cust', {
      //           itemId: 86,
      //           otherParam: '详情2',
      //         });
      //       }}
      //     />
      //       <Button
      //       title="Go to RTa"
      //       onPress={() => {
      //         /* 1. Navigate to the Details route with params */
      //         this.props.navigation.navigate('RTable', {
      //           itemId: 86,
      //           otherParam: '详情3',
      //         });
      //       }}
      //     />
      //          <View style={{ marginTop: 22 }}>
      //   <Modal
      //     animationType="slide"
      //     transparent={false}
      //     visible={this.state.modalVisible}
      //     onRequestClose={() => {
      //       alert("Modal has been closed.");
      //     }}
      //   >
      //     <View style={{ marginTop: 22 }}>
      //       <View>
      //        <Image
      //         source={require('../../src/assets/images/contemplative-reptile.jpg')}
      //         style={{width:400,height:600,marginLeft:8}}
      //        ></Image>
      //         <TouchableHighlight
      //           onPress={() => {
      //             this.setModalVisible(!this.state.modalVisible);
      //           }}
      //         >
      //           <Text>Hide Modal</Text>
      //         </TouchableHighlight>
      //       </View>
      //     </View>
      //   </Modal>

      //   <TouchableHighlight
      //     onPress={() => {
      //       this.setModalVisible(true);
      //     }}
      //   >
      //     <Text>Show Modal</Text>
      //   </TouchableHighlight>
      // </View>
      //   </View>
        
       
      );
    }
  }
  const styles = StyleSheet.create({
    tabView: {
      flex: 1,
      padding: 10,
      backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
      borderWidth: 1,
      backgroundColor: '#fff',
      borderColor: 'rgba(0,0,0,0.1)',
      margin: 5,
      height: 150,
      padding: 15,
      shadowColor: '#ccc',
      shadowOffset: { width: 2, height: 2, },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
  });