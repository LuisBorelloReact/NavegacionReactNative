import * as React from "react";
import {
 DarkTheme,
 DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";
import Payments from "./screens/drawerScreens/Payments";
import { Image, Pressable, useColorScheme } from "react-native";
// import { StatusBar } from "expo-status-bar";





// Top Tabs

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen
        name="News"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
        }}
      />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="👀" component={Payments} />
    </TopTabs.Navigator>
  );
}



// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Feed" component={StackGroup} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Payments1" component={Payments} />
      <Drawer.Screen name="Payments2" component={Payments} />
      <Drawer.Screen name="Payments3" component={Payments} />
    </Drawer.Navigator>
  );
}


// Stack
const Stack = createNativeStackNavigator();
function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="TabsGroup" 
      component={TabsGroup}
      options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="TweetDetailScreen" 
      component={TweetDetailScreen}
      options={{
        presentation: "modal",
        headerTitle: "Details"
      }}
      />
    </Stack.Navigator>
  );
}

// Tabs
const Tab = createBottomTabNavigator();
function TabsGroup({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          } else if (route.name === "Notifications") {
            iconName = focused ? "ios-notifications" : "notifications-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        }
        //         tabBarActiveTintColor: "#1DA1F2",
        //         tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Feed" component={TopTabsGroup} 
      options={{
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("./assets/beto.jpeg")}
              style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
            />
            {/* <image  source = {require("./assets/beto.jpeg")}/> */}
          </Pressable>
        ),
      }}

/>
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator >)

}
export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer  theme={theme === "dark" ? DarkTheme : DefaultTheme}  >

      <DrawerGroup />

    </NavigationContainer>
  );
}

// export default function Navigation() {
//   const theme = useColorScheme();
//   return (
//     <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
//       <StatusBar style="auto" />
//       {/* <HomeStackGroup /> */}
//       <DrawerGroup />
//     </NavigationContainer>
//   );
// }