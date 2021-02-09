// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerComponent } from './components/DrawerComponent';

function Feed({navigation}){
  return(
    <View>
      <Header
        leftComponent={<Icon name="menu-outline" color="black" size={30} onPress={()=>navigation.toggleDrawer()}/>}
        centerComponent={{ text: 'Feed', style: { color: '#000', fontSize: 20 } }}
        rightComponent={{ icon: 'home', color: '#000' }}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          borderBottomWidth: 0
        }}
      />
      <Text>Feed</Text>
    </View>
  )
}

function Messages({navigation}){
  return(
    <View>
      <Header
        leftComponent={<Icon name="menu-outline" color="black" size={30} onPress={()=>navigation.toggleDrawer()}/>}
        centerComponent={{ text: 'Messages', style: { color: '#000', fontSize: 20 } }}
        rightComponent={{ icon: 'home', color: '#000' }}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          borderBottomWidth: 0
        }}
      />
      <Text>Messages</Text>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>

      <Header
        leftComponent={<Icon name="menu-outline" color="black" size={30} onPress={()=>navigation.toggleDrawer()}/>}
        // centerComponent={{ text: 'Home', style: { color: '#000', fontSize: 20 } }}
        centerComponent={<Image source={require("./images/800px-Amazon_logo.svg.png")} style={{height: 30, width: 100}}/>}
        rightComponent={<Icon name="cart" color="black" size={30} />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          borderBottomWidth: 0,
          alignItems: "center",
          
        }}
      />

      <View style={{alignItems: "center"}}>
        <Image source={{
          uri: 'https://m.media-amazon.com/images/G/01/digital/video/sonata/Mariposa_UK_MultiTitleNewPopular/8d4460b1-dc00-4ac0-adb1-1c0019015b3e._AC_SL792_.jpg',
        }} style={{width: "100%", height: 150}}/>
        <Text style={{fontSize: 20, fontWeight: "bold", marginVertical: 10}}>Sconti del giorno</Text>
      </View>

    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View>
      <Header
        leftComponent={<Icon name="menu-outline" color="black" size={30} onPress={()=>navigation.toggleDrawer()}/>}
        centerComponent={{ text: 'Details', style: { color: '#000', fontSize: 20 } }}
        rightComponent={{ icon: 'home', color: '#000' }}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          borderBottomWidth: 0
        }}
      />
      <Text>Details</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Messages" component={Messages} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})

export default App;