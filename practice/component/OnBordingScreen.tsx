import React, { Component } from 'react';
import { PermissionsAndroid, Platform, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import { PDFDocument } from 'pdf-lib'; // Using pdf-lib instead of react-native-pdf-lib

export default class OnBordingScreen extends Component {
  createPDF = async () => {
    try {
      // Step 1: Generate PDF from HTML
      let PDFOptions = {
        html: `<html><head><title>Test PDF</title></head><body><h1>Test PDF Content</h1></body></html>`,
        fileName: 'test_pdf',
        directory: Platform.OS === 'android' ? 'Downloads' : 'Documents',
      };

      let file = await RNHTMLtoPDF.convert(PDFOptions);
      const filePath = file.filePath;
      
      console.log("Generated PDF Path:", filePath); // Debugging generated path

      if (!filePath) {
        throw new Error("PDF generation failed, no file path returned");
      }

      // Step 2: Load the generated PDF using pdf-lib
      const existingPdfBytes = await RNFS.readFile(filePath, 'base64');
      console.log("Existing PDF bytes length:", existingPdfBytes.length); // Debugging length of base64 string

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Step 3: Add headers to all pages
      const pages = pdfDoc.getPages();
      pages.forEach((page, index) => {
        const { width, height } = page.getSize();
        page.drawText('Header Title', {
          x: 50,
          y: height - 30, // Position the header at the top of the page
          size: 12,
        });
      });

      // Step 4: Save the modified PDF
      const pdfBytes = await pdfDoc.save();
      const newFilePath = `${RNFS.DocumentDirectoryPath}/file_with_header.pdf`;
      await RNFS.writeFile(newFilePath, pdfBytes, 'base64');
      console.log("Modified PDF saved at:", newFilePath); // Debugging saved path

      // Step 5: Open the modified PDF
      await FileViewer.open(newFilePath, { showOpenWithDialog: true });
    } catch (error) {
      console.log('Failed to generate pdf:', error); // Capture any errors
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
      console.log(granted, '==>READ_MEDIA_AUDIO');
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    this.requestCameraPermission();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={this.createPDF}
          style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', borderRadius: 20 }}>
          <Text style={{ color: '#ffffff', padding: 20, fontSize: 20 }}>Create PDF</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
