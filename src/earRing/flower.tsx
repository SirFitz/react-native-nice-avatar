import React from "react";
import { View } from 'react-native';
import { Svg, Path, Circle, Rect } from 'react-native-svg';

export default function flower(props): any {
  return (
    <View
      style={{
        position: "absolute",
        width: "16%",
        height: "15%",
        top: "24.5%",
        left: "17.5%"
      }}
      >
      <Svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx={13.235} cy={3.059} r={2.118} fill="#FFEBA4" />
        <Rect
          x={12.705}
          y={3.059}
          width={1.059}
          height={7.412}
          rx={0.529}
          fill="#F4D150"
        />
        <Rect
          x={12.705}
          y={12.059}
          width={1.059}
          height={4.765}
          rx={0.529}
          fill="#F4D150"
        />
        <Path
          d="M10.333 25.565a1.92 1.92 0 0 1-.704-2.624l.283-.49h-.577a1.922 1.922 0 0 1-1.923-1.922c0-1.06.861-1.92 1.923-1.92h.579l-.285-.493a1.92 1.92 0 0 1 .704-2.624 1.925 1.925 0 0 1 2.627.703l.284.492.285-.492a1.925 1.925 0 0 1 2.627-.703 1.92 1.92 0 0 1 .704 2.624l-.285.493h.56c1.063 0 1.924.86 1.924 1.92 0 1.061-.861 1.921-1.923 1.921h-.56l.284.491a1.92 1.92 0 0 1-.704 2.624c-.92.53-2.096.215-2.627-.703l-.285-.492-.284.492a1.925 1.925 0 0 1-2.627.703Z"
          fill="#F4D150"
        />
      </Svg>
    </View>
  );
}
