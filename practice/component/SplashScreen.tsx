import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
interface SplashScreenProps{
	navigation:{navigate:any}
}
const SplashScreen:React.FC<SplashScreenProps>=({ navigation }) =>{
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('OnBordingScreen');
		}, 2000);
	}, []);
	return (
		<View style={styles.mainContainer}>
			<Image style={styles.imageStyle} source={require('../Assets/splashscreen.jpeg')} />
		</View>
	);
}
const styles = StyleSheet.create({
	mainContainer: { height: responsiveHeight(100), width: responsiveWidth(100), backgroundColor: 'rgba(0,0,0,0.6)' },
	imageStyle: { resizeMode: 'contain', height: responsiveHeight(100), width: responsiveWidth(100) }
});
export default SplashScreen;
