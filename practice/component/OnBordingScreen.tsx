import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface OnBordingScreen {
	navigation: { navgate: any };
}
const OnBordingScreen: React.FC<OnBordingScreen> = ({ navigation }) => {
	const renderitem = (color: string, index: number) => {
		return (
			<View
				style={{
					...styles.listConatiner,
					backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
				}}
				key={index}
			>
				<Text onPress={()=>navigation.navigate("Animation")} style={styles.titlestyle}> {color}</Text>
			</View>
		);
	};
	return (
		<SafeAreaView>
			<View>
				<FlatList
					numColumns={2}
					style={styles.flatlistStyle}
					data={[ 'Animation', 'vedio', 'message', 'shopping' ]}
					renderItem={({ item, index }) => renderitem(item, index)}
				/>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	flatlistStyle: {
		height: responsiveHeight(100),
		width: responsiveWidth(100)
	},
	listConatiner: {
		height: responsiveWidth(45),
		width: responsiveWidth(45),
		marginVertical: responsiveWidth(2),
		marginHorizontal: responsiveWidth(2),
		justifyContent: 'center'
	},
	titlestyle: {
		textAlign: 'center',
		fontFamily: 'Montserrat-Bold',
		fontSize: responsiveFontSize(2)
	}
});
export default OnBordingScreen;
