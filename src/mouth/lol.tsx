import React from "react";
import { View } from 'react-native';
import { Svg, Path, Circle, G, Mask, Ellipse } from 'react-native-svg';

export default function  mouthLol(): any {
  return (
    <View
    style={{
      width: "100%",
      height: "57%",
      position: "absolute",
      top: "6%",
      right: "-1%"
    }}>
    <Svg  viewBox="0 0 138 149" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M71.1434 87.1168C76.8805 86.0785 80.2416 79.7387 79.0727 73.2795C77.9037 66.8203 72.5339 62.0606 66.7967 63.0989C61.0596 64.1372 57.6985 70.477 58.8675 76.9362C60.0365 83.3954 65.4063 88.1551 71.1434 87.1168Z" fill="black" stroke="black" stroke-width="1.90115"/>
      <Mask id="mask0_675_13441" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="59" y="63" width="20" height="24">
      <Ellipse cx="68.9701" cy="75.1078" rx="9.31612" ry="11.2534" transform="rotate(-10.2582 68.9701 75.1078)" fill="#171921"/>
      </Mask>
      <G mask="url(#mask0_675_13441)">
      <Ellipse cx="70.6963" cy="84.6424" rx="10.6963" ry="9.69045" transform="rotate(-10.2582 70.6963 84.6424)" fill="#FC909F"/>
      </G>
    </Svg>

    </View>
  );
}
