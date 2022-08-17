import React from "react";
import { View } from 'react-native';
import { Svg, Path , Mask, Ellipse, G} from 'react-native-svg';

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
        <Path d="M58.8828 82.3525C59.7909 78.14 63.1555 69.2409 69.3494 67.3453C75.5434 65.4496 78.7168 71.8211 79.5293 75.2438" stroke="black" strokeWidth="2.11759" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    </View>
  );
}
