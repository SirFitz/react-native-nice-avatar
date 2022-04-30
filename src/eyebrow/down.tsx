import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function eyebrowDown(): any {
  return (
    <View 
    style={{
      position: "absolute",
      width: "150%",
      height: "83%",
      top: "-42%",
      left: "-31%",
    }}>
      <Svg viewBox="0 0 138 149" fill="none">
        <Path d="M53.7012 90.7828C56.9658 92.1063 64.8715 92.371 70.3772 82.8418" stroke="black" strokeWidth="2.11759" strokeLinecap="round"/>
        <Path d="M89.1719 78.8711C91.9071 81.6945 98.754 85.6474 104.26 78.8711" stroke="black" strokeWidth="2.11759" strokeLinecap="round"/>
      </Svg>

    </View>
  );
}
