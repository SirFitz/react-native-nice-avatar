import React from "react";
import { View } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

export default function stud(props): any {
  const { color } = props;
  return (
    <View
      style={{
        position: "absolute",
        width: "16%",
        height: "15%",
        top: "24%",
        left: "17.5%"
      }}
      >
      <Svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx={13.235} cy={3.059} r={2.118} fill="#F4D150" />
        <Circle cx={13.764} cy={2.529} r={0.529} fill="#FFEDEF" />
      </Svg>
    </View>

  );
}
