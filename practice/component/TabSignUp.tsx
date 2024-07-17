import React from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
interface TabSignUp {
	navigation: { navgate: any };
}
const TabSignUp: React.FC<TabSignUp> = ({ navigation }) => {
	const renderitem = (color: string, index: number) => {
		return (
			<View
				style={{
					...styles.listConatiner,
					backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
				}}
				key={index}
			>
				<Text style={styles.titlestyle}> {color}</Text>
			</View>
		);
	};
	return (
			<View style={{height:responsiveHeight(100),width:responsiveWidth(100)}}>
           <View style={{height:responsiveHeight(50),zIndex:-2,position:"absolute",width:responsiveWidth(100),backgroundColor:"#F9F8F8"}}>
            <View style={{height:responsiveHeight(16),marginTop:responsiveWidth(4),width:responsiveWidth(8),marginLeft:responsiveWidth(4)}} />
           </View>
           <View style={{backgroundColor:"white",borderRadius:10,borderWidth:responsiveWidth(2),borderColor:"#1C98D5",width:responsiveWidth(40),height:responsiveHeight(85),marginTop:responsiveHeight(7.5),alignSelf:"center"}}>
                   <View style={{height:responsiveHeight(6),marginTop:responsiveHeight(1),width:responsiveWidth(14),alignSelf:"center"}} />
           <View style={{width:responsiveWidth(36),paddingHorizontal:responsiveWidth(1.5)}}>
            <Text style={{fontSize:responsiveFontSize(1.3),color:"black",fontWeight:"600"}}>Welcome to Environmental</Text>
            <Text style={{fontSize:responsiveFontSize(.9),color:"black",fontWeight:"200",marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1.5)}}>Signup in to your account</Text>
			<View style={{borderLeftColor:"#DC2626",borderLeftWidth:responsiveWidth(0.5),justifyContent:"center",borderRadius:8,width:responsiveWidth(32),height:responsiveHeight(6),paddingLeft:responsiveWidth(.8),backgroundColor:"#FEE2E2",marginBottom:responsiveHeight(1)}} >
				<Text style={{fontSize:responsiveFontSize(.7),color:"red",fontWeight:"300"}}>You have to agree with Privacy Policy and Terms and Conditions to Sign up</Text>
			</View>

            <View style={{marginBottom:responsiveHeight(1.5)}}>
              <Text style={{fontSize:responsiveFontSize(.8),color:"black",fontWeight:"500" ,marginBottom:responsiveHeight(1)}}>Full name</Text>
              <TextInput style={{borderWidth:2,borderColor:"#CBD5E1",borderRadius:10,fontSize:responsiveFontSize(.85),width:responsiveWidth(32),height:responsiveHeight(6),paddingLeft:responsiveWidth(.8),marginBottom:responsiveHeight(1)}} placeholder="Your Full name"/>
              <Text style={{fontSize:responsiveFontSize(.6),color:"red",fontWeight:"400"}}>Please Enter Full name</Text>
            </View>
			<View style={{marginBottom:responsiveHeight(1.5)}}>
              <Text style={{fontSize:responsiveFontSize(.8),color:"black",fontWeight:"500" ,marginBottom:responsiveHeight(1)}}>Email</Text>
              <TextInput style={{borderWidth:2,borderColor:"#CBD5E1",borderRadius:10,fontSize:responsiveFontSize(.85),width:responsiveWidth(32),height:responsiveHeight(6),paddingLeft:responsiveWidth(.8),marginBottom:responsiveHeight(1)}} placeholder="Your Email"/>
              <Text style={{fontSize:responsiveFontSize(.6),color:"red",fontWeight:"400"}}>Invalid Email</Text>
            </View>
			<View style={{marginBottom:responsiveHeight(1.5)}}>
              <Text style={{fontSize:responsiveFontSize(.8),color:"black",fontWeight:"500" ,marginBottom:responsiveHeight(1)}}>Full name</Text>
              <TextInput style={{borderWidth:2,borderColor:"#CBD5E1",borderRadius:10,fontSize:responsiveFontSize(.85),width:responsiveWidth(32),height:responsiveHeight(6),paddingLeft:responsiveWidth(.8),marginBottom:responsiveHeight(1)}} placeholder="Password"/>
              <Text style={{fontSize:responsiveFontSize(.6),color:"red",fontWeight:"400"}}>password must contain at least one number and 8 Characters</Text>
            </View>
<View style={{flexDirection:"row",alignItems:"center"}}>
			<TouchableOpacity
            style={{
              height: responsiveHeight(2),
              width:  responsiveHeight(2),
              borderRadius: 5,
              borderWidth: 2,
              borderColor: false?"1C98D5":"#64748B",
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            {false && (
              <View
                style={{
                  height: responsiveHeight(1.2),
                  width: responsiveHeight(1.2),
                  borderRadius: 2,
                  backgroundColor: '#1C98D5',
                }}
              />
            )}
          </TouchableOpacity>
		  <Text style={{fontSize:responsiveFontSize(.8),color:"#757575",fontWeight:"400"}} >I agree with</Text>
		  <TouchableOpacity><Text style={{fontSize:responsiveFontSize(.8),color:"#757575",fontWeight:"400",textDecorationLine: 'underline',marginHorizontal:responsiveWidth(0.3)}}>Privacy Policy</Text></TouchableOpacity>
		  <Text style={{fontSize:responsiveFontSize(.8),color:"#757575",fontWeight:"400"}}>and</Text>
		 <TouchableOpacity><Text style={{fontSize:responsiveFontSize(.8),color:"#757575",fontWeight:"400",textDecorationLine: 'underline',marginHorizontal:responsiveWidth(0.3)}}>Terms & Conditions</Text></TouchableOpacity>
		  </View>
<TouchableOpacity style={{backgroundColor:"#1C98D5" ,justifyContent:"center",width:responsiveWidth(32),height:responsiveHeight(6.5),marginTop:responsiveHeight(2),borderRadius:8}}>
	<Text style={{fontSize:responsiveFontSize(1),color:"white",fontWeight:"800",textAlign:"center"}}>Sign up</Text>
</TouchableOpacity>

<View style={{flexDirection:"row",marginTop:responsiveHeight(2),justifyContent:"center"}}><Text
style={{fontSize:responsiveFontSize(.9),color:"black",fontWeight:"200",marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1.5)}}>Already have an account?</Text>
<TouchableOpacity>
	<Text style={{fontSize:responsiveFontSize(.9),color:"#1C98D5",fontWeight:"600",marginTop:responsiveHeight(1),marginLeft:responsiveWidth(0.5)}}>Log in</Text>
</TouchableOpacity>
</View>
           </View>
           </View>
          </View>
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
export default TabSignUp;
