import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import {icons} from '@/constants/icons';
import {images} from '@/constants/images';

const TabIcon = ({focused, icon, title}: any) => {
  if(focused){
    return (
      <ImageBackground
        source={images.background}
        className="flex flex-row w-full flex-1 mt-4 justify-center items-center rounded-full overflow-hidden h-[40px] w-[80px]"
        >
        <Image source={icon}
        tintColor='red' 
        className="h-[20px] w-[20px] rounded-full size-2"
        />
        <Text
          className="text-secondary text-base font-semibold ml-2"
        >{title}</Text>
      </ImageBackground>
    )
  } else {
    return(
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon}
        tintColor='red' 
        className="h-[20px] w-[20px] rounded-full size-4"
        />
      </View>
    )
  }
}

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0D23'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({focused}) =>(
            <>
              <TabIcon
                focused={focused}
                icons={icons.home}
                title="Home"
              />
            </>
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown:false,
          tabBarIcon: ({focused}) =>(
            <>
              <TabIcon
                focused={focused}
                icons={icons.save}
                title="Saved"
              />
            </>
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown:false,
          tabBarIcon: ({focused}) =>(
            <>
              <TabIcon
                focused={focused}
                icons={icons.search}
                title="Search"
              />
            </>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown:false,
          tabBarIcon: ({focused}) =>(
            <>
              <TabIcon
                focused={focused}
                icons={icons.person}
                title="Profile"
              />
            </>
          )
        }}
      />
    </Tabs>
  );
}
