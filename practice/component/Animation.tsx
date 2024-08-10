import * as React from 'react';
import { Animated, Dimensions, Image, FlatList, Text, View, StyleSheet, StatusBar, Platform } from 'react-native';
import { responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
	'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
	'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
	'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
	'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
	'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
	'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
	'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
	'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
	'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
	'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80'
];
const data = images.map((image, index) => ({
	key: String(index),
	photo: image,
	avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 40)}.jpg`
}));
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const Backdrop = ({ scrollX }:any) => {
  return (
    <View style={{ height: height,width:450, position: 'absolute' }}>
      <FlatList
        data={images.reverse()}
        removeClippedSubviews={false}
        contentContainerStyle={{ width:450, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          const inputRange=[
            (index-1)*responsiveWidth(100),
            index*responsiveWidth(100),
            (index+1)*responsiveWidth(100)
           ]         
           const translateX = scrollX.interpolate({
            inputRange,
            outputRange:[-550 , 0, 550 ]
          })
          
          
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                transform:[{translateX}],
                height:height,
                // overflow: 'hidden',
                backgroundColor:"red",
                width:400
              }}
            >
              <Image
                source={{ uri: item }}
                style={{
                  width:550,
                  height: height,
                  position: 'absolute',
                  resizeMode:"stretch"
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};


export default function Animation() {
  const scrollx=React.useRef(new Animated.Value(0)).current
	return (
		<View style={styles.container}>
			<StatusBar hidden />
      <Backdrop scrollX={scrollx}/>
			<Animated.FlatList
				data={images}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				bounces={false}
				horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: scrollx } } }],
            { useNativeDriver:
            true}

        )}
				renderItem={(item: any, index: any) => {
     const inputRange=[
      (item.index-1)*responsiveWidth(100),
      item.index*responsiveWidth(100),
      (item.index+1)*responsiveWidth(100)
     ]         
     const translateX = scrollx.interpolate({
      inputRange,
      outputRange:[-responsiveWidth(100) *0.7, 0, width * 0.7]
    })
    console.log
					return (
						<View style={{ width: responsiveWidth(100), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{position:"absolute",zIndex:100,color:"white",alignSelf:"center"}}>{"MOVIE : "+(item.index+1)}</Text>
                <View
								style={{
									borderRadius: 18,
									borderColor: 'white',
									shadowColor: '#000',
									shadowOpacity: 1,
									shadowRadius: 20,
                  backgroundColor:"white",
									shadowOffset: {
										width: 0,
										height: 0,
									}
								}}
							>
								<View
									style={{
										height: ITEM_HEIGHT,
										width: ITEM_WIDTH,
										alignItems: 'center',
										overflow: 'hidden',
                    borderRadius:12
									}}
								>
									<Animated.Image
										style={{
											height: ITEM_HEIGHT,
											width: ITEM_WIDTH *1.4,
											resizeMode: 'cover',
                        transform:[{translateX}]
										}}
										source={{ uri: item.item }}
									/>
								</View>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
