import React from "react";
import { View } from 'react-native';
import { Svg, Path, Mask, G, Circle, Ellipse } from 'react-native-svg';
import { EMaskUnits } from "react-native-svg";

export default function mouthTongue (): any {
  const id = `mouth${Math.round(Math.random() * 9999999)}`;
  return (
    <View 
    style={{
      width: "118%",
      height: "87%",
      position: "absolute",
      top: "-11%",
      right: "-23%"
    }}>
 <Svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.143 29.117c5.738-1.039 9.099-7.378 7.93-13.838-1.17-6.459-6.54-11.218-12.276-10.18-5.737 1.038-9.098 7.378-7.93 13.837 1.17 6.46 6.54 11.22 12.276 10.18Z"
      fill="#000"
      stroke="#000"
      strokeWidth={1.901}
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={5}
      width={20}
      height={24}
    >
      <Ellipse
        cx={16.97}
        cy={17.108}
        rx={9.316}
        ry={11.253}
        transform="rotate(-10.258 16.97 17.108)"
        fill="#171921"
      />
    </Mask>
    <G mask="url(#a)">
      <Ellipse
        cx={18.696}
        cy={26.642}
        rx={10.696}
        ry={9.69}
        transform="rotate(-10.258 18.696 26.642)"
        fill="#FC909F"
      />
    </G>
  </Svg>
    </View>
  );
}
