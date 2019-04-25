import React from 'react';
import { Image, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon, Badge, Avatar, withBadge, SocialIcon, Header, SearchBar, Divider,Overlay} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
export default class RTab extends React.Component {
  state = {
    loading: true,
    users: [],
    search: '',
    isVisible:true
  }
  updateSearch = search => {
    this.setState({ search });
  };

  test=()=>{
    alert("欢迎来到云平台!")
//     return (<View>
//       <Overlay
//   isVisible={this.state.isVisible}
//   windowBackgroundColor="rgba(255, 255, 255, .5)"
//   overlayBackgroundColor="red"
//   width="auto"
//   height="auto"
// >
//   <Text>Hello from Overlay!</Text>
// </Overlay>;
//     </View>);
  }
  render() {
    const { search } = this.state;
    /* 2. Read the params from the navigation state */
    return (
      <View style={ { flex: 1, flexDirection: 'column' } }>
        <View>
          <Header
            containerStyle={ {
              backgroundColor: '#3D6DCC',
              justifyContent: 'space-around',
              height: 54
            } }
            // backgroundImage={ require('../../src/assets/images/contemplative-reptile.jpg')}
            leftComponent={ { icon: 'menu', color: '#fff' } }
            centerComponent={ <SearchBar
              containerStyle={ style = { backgroundColor: '#3D6DCC', width: 300, top: -8, borderRadius: 10, borderTopColor: '#3D6DCC' } }
              inputContainerStyle={ style = { backgroundColor: '#FFFFFF' } }
              placeholder="请输入..."
              onChangeText={ this.updateSearch }
              value={ search }
              lightTheme={ true }
            /> }
            rightComponent={ { icon: 'home', color: '#fff' } }
          />
        </View>
        <View style={ { height: 200, top: 10 } }>
          <Swiper
            style={ styles.swiper }          //样式
            height={ 200 }                   //组件高度
            loop={ true }                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={ true }                //自动轮播
            autoplayTimeout={ 4 }                //每隔4秒切换
            horizontal={ true }              //水平方向，为false可设置为竖直方向
            paginationStyle={ { bottom: 10 } } //小圆点的位置：距离底部10px
            showsButtons={ false }           //为false时不显示控制按钮
            showsPagination={ true }       //为false不显示下方圆点
            dot={ <View style={ {           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: -15,
            } } /> }
            activeDot={ <View style={ {    //选中的圆点样式
              backgroundColor: '#007aff',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: -15,
            } } /> }

          >
            <Image source={ require('../../src/assets/images/yylogo.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u8.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u10.jpg') } style={ styles.img } />
            <Image source={ require('../../src/assets/images/u9.jpg') } style={ styles.img } />
          </Swiper>
        </View>
        <View style={ { top: 40 ,borderRadius:5,left:5,right:5,borderWidth:1} }>
          <View style={ { flexDirection: 'column' } }>
            <View style={ { flexDirection: 'row' } }>
               <View style={ { padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'security' } size={ 32 } color={ "#ff5000" }
                onPress={this.test}
                />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'headphones' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'human-female-female' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'jsfiddle' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'leaf' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
               <View style={ { padding: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'laptop-windows' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
            </View>
            <View style={ { flexDirection: 'row' } }>
               <View style={ { padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'movie-roll' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'hockey-sticks' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'lan' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'package-variant' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'medal' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
               <View style={ { padding: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'passport-biometric' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
            </View>
            <View style={ { flexDirection: 'row' } }>
               <View style={ { padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'pinwheel-outline' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'pocket' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'projector' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'signal-5g' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
              <View style={ { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'rhombus-split' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
               <View style={ { padding: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: '#bfc4c6' } }>
                <MaterialCommunityIcons name={ 'school' } size={ 32 } color={ "#ff5000" } />
                <Text style={ { fontSize: 14, fontWeight: 'bold', top: 5 } }>
                  测试
            </Text>
              </View>
            </View>
          </View>

        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  swiper: {
    backgroundColor: 'gray'
  },
  img: {
    marginBottom: 5,
    width: 410,
    height: 195,
  }
});