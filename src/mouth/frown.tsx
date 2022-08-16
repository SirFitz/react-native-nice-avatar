import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function  mouthFrown(): any {
  return (
    <View
    style={{
      width: "120%",
      height: "87%",
      position: "absolute",
      top: "-8%",
      right: "-12%"
    }}>
      <Svg viewBox="0 0 138 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M49.3525 79.706C51.0522 75.4935 57.3501 66.5944 68.9439 64.6988C80.5377 62.8031 86.4778 69.1746 87.9986 72.5973" stroke="black" strokeWidth="2.11759" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    </View>
  );
}
