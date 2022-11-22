import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Image,
} from 'react-native';
import styles from './RenderItem/styles';
import {image_bg, list_img, welcome} from '../../../assets/images';
import {Header} from '../../components';
import RenderItem from './RenderItem';
import RenderList from './RenderList';

export default function Home({navigation}) {
    const [list , setList] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <Header
          labelCenter="View Files"
          goBack={() => navigation.goBack()}
          labelStyle={{alignSelf: 'flex-start', left: 60}}
          toggle = {false}
          onPress={() => setList(!list)}
        />
        <View style={{height: 20}} />
        {list ? (
        <FlatList
          data={data}
          key={'_'}
          keyExtractor={item => "_" + item.id}
          numColumns={2}
          bounces={false}
          ItemSeparatorComponent={() => <View height={30} />}
          scrollEventThrottle={1}
          contentContainerStyle={styles._list_container}
          renderItem={({ index,item}) => {
            return <RenderItem 
            image={item?.image}
            itemName={item?.itemName}
            category={item?.category}
            video={item?.category === 'Video file' ? true : false}/>;
          }}
        />
        ):(
            <FlatList
            data={data}
            key={'#'}
            keyExtractor={item => item.index}
          //  numColumns={1}
            bounces={false}
            ItemSeparatorComponent={() => <View height={1} />}
            scrollEventThrottle={1}
            contentContainerStyle={styles._list_container}
            renderItem={({item, index}) => {
              return <RenderList
              image={item?.image}
              itemName={item?.itemName}
              category={item?.category}
              video={item?.category === 'Video file' ? true : false}
              />;
            }}
          />

        )}
      </ScrollView>
    </View>
  );
}
const data = [
  {
    image:list_img,
    itemName: 'File Name',
    category: 'TXT file',
  },
  {
    image:list_img,
    itemName: 'File Name',
    category: 'Video file',
  }, {
    image:list_img,
    itemName: 'File Name',
    category: 'TXT file',
  }, {
    image:list_img,
    itemName: 'File Name',
    category: 'Video file',
  },
];
