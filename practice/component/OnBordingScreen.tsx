// import React, { useState } from 'react';
// import { Alert, FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Pdf from 'react-native-pdf';
// interface OnBordingScreen {
// 	navigation: { navgate: any };
// }
// const OnBordingScreen: React.FC<OnBordingScreen> = ({ navigation }) => {
// const [pdfPath,setpdfPath]=useState<any>("")
// 	const  createPDF=async()=> {
// 		let options = {
// 			html: '<h1>Hello PDF</h1>',
// 			fileName: 'sample',
// 			directory: 'Documents',
// 		  };
	  
// 		  if (Platform.OS === 'ios') {
// 			options.directory = '';
// 		  }
	  
// 		  try {
// 			const file = await RNHTMLtoPDF.convert(options);
// 			console.log('PDF created at:', file.filePath);
// 		  } catch (error) {
// 			console.error('Error creating PDF:', error);
// 		  }
// 	  }
	

// 	const renderitem = (color: string, index: number) => {
// 		return (
// 			<View
// 				style={{
// 					...styles.listConatiner,
// 					backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
// 				}}
// 				key={index}
// 			>
// 				<Text onPress={()=>createPDF()} style={styles.titlestyle}> {color}</Text>
// 			</View>
// 		);
// 	};
// 	return (
// 		<SafeAreaView>
// 			<View>
// 				<FlatList
// 					numColumns={2}
// 					style={styles.flatlistStyle}
// 					data={[ 'Animation', 'vedio', 'message', 'shopping' ]}
// 					renderItem={({ item, index }) => renderitem(item, index)}
// 				/>
				
// 			</View>
// 		</SafeAreaView>
// 	);
// };
// const styles = StyleSheet.create({
// 	flatlistStyle: {
// 		height: responsiveHeight(100),
// 		width: responsiveWidth(100)
// 	},
// 	listConatiner: {
// 		height: responsiveWidth(45),
// 		width: responsiveWidth(45),
// 		marginVertical: responsiveWidth(2),
// 		marginHorizontal: responsiveWidth(2),
// 		justifyContent: 'center'
// 	},
// 	titlestyle: {
// 		textAlign: 'center',
// 		fontFamily: 'Montserrat-Bold',
// 		fontSize: responsiveFontSize(2)
// 	}
// });
// export default OnBordingScreen;

import React, { Component } from 'react'
import {PermissionsAndroid, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

export default class OnBordingScreen extends Component {
  createPDF = async () => {
    try {
      let PDFOptions = {
        html: `<html>
<head>
    <title>Pre-Renovation Asbestos Survey</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
.titlename {
    font-size: 18px;
    font-weight: 800;
}
        header {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo {
            width: 150px;
            height: auto;
        }

        .address {
            display:flex;
            flex-direction:column;
            gap:5px;
            font-size: 18px;
            margin-top: 10px;
        }

        .survey-info {
           
        }

        .survey-details {
            width: 45%;
        }
        .survey-detailsdata {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
        }

        .survey-location {
		    display:flex;

            width: 70%;
            height:350px; 
        }
        .survey-location img {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            background-color: green;
            justify-content:"center";
        }

        footer {
            text-align: center;
            font-size: 12px;
            margin-top: 20px;
        }
        .survey-title{
            display:flex;
            justify-content:center;
            font-size: 35px;
            font-weight: 800;
        }
        .survey-link{
            /* display:flex;
            flex-direction: column; */
        }
            head{
             display: flex}
    </style>
</head>
<body>
    <div style="margin: 20;">
    <div style="display: flex; justify-content: space-between;">
        <img style="height: 100; width: 300;" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="ClearVu Inspections" class="logo">
        <div class="address">
            18 Blackberry Lane<br>
            Queensbury, NY 12804<br>
            ryan@clearvuinspections.com<br>
            518.832.9213
        </div>
    </div>

    <p class="survey-title">Pre-Renovation Asbestos Survey</p>
	<div style="width: 100%; justify-content:center; display: flex;">
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" style="width: 75%;align-content:center; height: 300px;" alt="Site Location">
	</div>
	
    <div style=" margin-top: 30px;">
        <div style=" display: flex; flex-direction: row;justify-content:space-evenly; width:100%  ">
            <div class="survey-link">
                <p class="titlename">Project Number</p>
                   <p style="font-size: 15px;">10073<br>
                    04.08.2022 - Original<br>
                    06.06.22 - Joint Tadive<br>
                    08.24.22 - Caulk @ 60% Drawings<br>
                    10.2.22 - COC & 100%<br>
					</p>
            </div>

            <div class="survey-link">
                <p class="titlename">Prepared For</p>
               <p style="font-size: 15px;"> Nancy Kupiec</br>
                3 Cerrone Commercial Drive</br>
                Albany, Albany 12205</br>
				</p>
            </div>
        </div>
        <div style=" display: flex; flex-direction: row;justify-content:space-evenly; width:100% ">
            <div class="survey-link">
                <p class="titlename">Project Number</p>
                  <p style="font-size: 15px;" > 10073<br>
                    04.08.2022 - Original<br>
                    06.06.22 - Joint Tadive<br>
                    08.24.22 - Caulk @ 60% Drawings<br>
                    10.2.22 - COC & 100%<br>
					</p>
            </div>

            <div class="survey-link">
                <p class="titlename">Prepared For</p>
               <p style="font-size: 15px;"> Nancy Kupiec</br>
                3 Cerrone Commercial Drive</br>
                Albany, Albany 12205</br>
				</p>
            </div>
        </div>
   
    </div>

   
</div>
</body>
</html>`,
        fileName: 'file',
        directory: Platform.OS === 'android' ? 'Downloads' : 'Documents',
      };
      let file = await RNHTMLtoPDF.convert(PDFOptions);
      console.log(file,"===filee>>>>>>>")
      if (!file.filePath) return;

      FileViewer.open(file.filePath, { showOpenWithDialog: true }) // absolute-path-to-my-local-file.
  .then(() => {
    // success
  })
  .catch((error) => {
    // error
  });

    } catch (error) {
      console.log('Failed to generate pdf', error.message);
    }
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([ 
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
        ]);
        console.log(granted,"==>READ_MEDIA_AUDIO")
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount(): void {
      this.requestCameraPermission()
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity onPress={this.createPDF} style={{alignItems:"center",justifyContent:"center",backgroundColor:"#000000",borderRadius:20}}>
          <Text style={{color:"#ffffff",padding:20,fontSize:20}}>Create PDF</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}