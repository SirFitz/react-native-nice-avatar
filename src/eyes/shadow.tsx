import React from "react";
import { View } from 'react-native';
import { Svg, Ellipse } from 'react-native-svg';

export default function eyesShadow(): any {
  return (
    <View 
    style={{
      width: "155%",
      height: "67%",
      position: "absolute",
      top: "-29%",
      left: "-31%"
    }}>
      <Svg viewBox="0 0 138 149" fill="none" >
        <Ellipse cx="61.89" cy="94.1164" rx="6.35277" ry="6.35277" transform="rotate(-6.27568 61.89 94.1164)" fill="#D2EFF3"/>
        <Ellipse cx="62.5726" cy="98.9664" rx="4.76458" ry="7.14687" transform="rotate(-6.77646 62.5726 98.9664)" fill="black"/>
        <Ellipse cx="95.6537" cy="89.548" rx="6.35277" ry="6.35277" transform="rotate(-6.27568 95.6537 89.548)" fill="#D2EFF3"/>
        <Ellipse cx="96.4548" cy="93.6731" rx="4.76458" ry="7.14687" transform="rotate(-6.27568 96.4548 93.6731)" fill="black"/>
      </Svg>

    </View>
  );
}
