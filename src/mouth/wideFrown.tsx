import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function mouthWideFrown(): any {
  return (
    <View
    style={{
      width: "50%",
      height: "17%",
      position: "absolute",
      top: "26%",
      right: "25%"
    }}>
      <Svg viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M1.353 21.706c1.7-4.212 7.997-13.112 19.59-15.007C32.539 4.803 38.479 11.175 40 14.597"
          stroke="#000"
          strokeWidth={2.118}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
