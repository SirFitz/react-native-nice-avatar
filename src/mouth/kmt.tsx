import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function  mouthKmt(): any {
  return (
    <View
    style={{
      width: "50%",
      height: "17%",
      position: "absolute",
      top: "25%",
      right: "22%"
    }}>
      <Svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M13.765 8.84c2.205-1.236 11.117-2.806 11.117.794 0 4.5-6.088 4.235-6.088 4.235s6.906-1.674 5.559 3.176c-1.324 4.765-5.03 2.912-6.088 2.383"
          stroke="#000"
          strokeWidth={2.118}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
