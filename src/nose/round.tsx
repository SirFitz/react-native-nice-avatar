import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function noseRound(): any {
  return (
    <View 
    style={{
      width: "10%",
      height: "10%",
      position: "absolute",
      top: "15%",
      left: "46%"
    }}>
    <Svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      >
      <Path d="M12.307 12.3397C17.753 11.0993 26.6843 12.9603 24.7238 22.8833C22.9813 31.7023 13.6141 32.1857 11 29.7048" stroke="black" strokeWidth="4" />
    </Svg>
    </View>
  );
}
