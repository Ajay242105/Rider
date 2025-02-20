import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import Loader from "../../components/Loader";
import { Entypo, Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons/Octicons';

const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 4,
            shadowOffset: {
              width:0,
              height:-0.2,
            },
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="skyblue" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="search-outline" size={24} color="skyblue" />
              ) : (
                <Ionicons name="search-outline" size={24} color="black" />
              ),
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Octicons name="history" size={24} color="skyblue" />) : (
<Octicons name="history" size={24} color="black" />              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="profile" size={24} color="skyblue" />

              ) : (
                <AntDesign name="profile" size={24} color="black" />
              ),
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
