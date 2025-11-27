import { Text, View, ScrollView, Image } from "react-native";
import {images} from '@/constants/images';
import {icons} from '@/constants/icons'; 
import SearchBar from '@/components/SearchBar';

export default function Index() {
  return (
    <View className="flex-1  bg-white">
      <Image source="images.background"
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom:10
        }}
      >
          <Image source={images.logo}
            className='w-12 h-10 mt-20 mb-5 max-auto'
          />
          <View className="flex-1 mt-5">
            <SearchBar/>
          </View>
      </ScrollView>
    </View>
  );
}
