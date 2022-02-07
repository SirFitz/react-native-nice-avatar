import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function mouthPeace(): any {
  return (
    <View
    style={{
      width: "50%",
      height: "19%",
      position: "absolute",
      top: "23%",
      right: "23%"
    }}>
    <Svg
      viewBox="0 0 67 64"
      fill="none"
      >
      <Path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke="black" strokeWidth="4" />
    </Svg>
    </View>
  );
}
