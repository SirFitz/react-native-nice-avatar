import React from "react";
import { View } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

export default function line(props): any {
  const { color } = props;
  return (
    <View 
    style={{
      position: "absolute",
      width: "9%",
      height: "8%",
      top: "24%",
      left: "20.8%"
    }}>
      <Svg viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect
          x={3.734}
          y={0.486}
          width={3.176}
          height={7.412}
          rx={1.059}
          transform="rotate(28.157 3.734 .486)"
          fill="#F4D150"
        />
      </Svg>
    </View>
  );
}
