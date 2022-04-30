import React from "react";
import { View } from 'react-native';
import { Svg, Path, Circle, Mask, G } from 'react-native-svg';

export default function glassesRoundDash(): any {
  return (
    <View 
    style={{
      width: "175%",
      height: "95%",
      position: "absolute",
      top: "-48.5%",
      left: "-40%"
    }}>
    <Svg viewBox="0 0 138 149" fill="none" >
      <Circle cx="92.8505" cy="88.8231" r="13.7643" stroke="black" strokeWidth="2.11759"/>
      <Circle cx="57.3817" cy="93.5868" r="13.7643" stroke="black" strokeWidth="2.11759"/>
      <Path d="M69.0268 85.1184C69.2923 84.8535 70.8802 83.135 74.0566 82.7366C77.233 82.3382 78.8212 83.5298 79.6155 83.7947" stroke="black" strokeWidth="2.11759"/>
      <Path d="M61.9759 81.2813C62.9396 80.3534 67.3909 78.638 70.8811 77.994C75.1614 77.2043 79.8862 77.3808 83.129 77.994C84.2483 78.2056 83.8414 78.1422 84.645 78.5001" stroke="black" strokeWidth="2.11759"/>
      <Path d="M43.8819 94.6465L28 97.5582" stroke="black" strokeWidth="2.11759"/>
    </Svg>

</View>
  );
}
