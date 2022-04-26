import React from "react";
import { View } from 'react-native';
import { Svg, Path, Mask, G, Circle } from 'react-native-svg';
import { EMaskUnits } from "react-native-svg";

export default function mouthMask (): any {
  const id = `mouth${Math.round(Math.random() * 9999999)}`;
  return (
    <View 
    style={{
      width: "118%",
      height: "87%",
      position: "absolute",
      top: "-11%",
      right: "-13%"
    }}>
<Svg  viewBox="0 0 138 149" fill="none" >
<Path d="M77.5491 71.7635C80.0584 74.4105 79.054 78.36 77.5491 80.4986C74.7452 84.483 71.0923 84.3013 66.0106 81.8829C62.5835 80.2519 61.8245 78.6815 61.2685 77.1222C64.344 77.7129 62.5727 76.8989 68.0514 75.9599C71.9648 75.2894 72.1583 76.4225 74.4997 74.4105C76.1025 72.7931 76.882 74.5693 77.5491 71.7635Z" fill="#FC909F"/>
<Path d="M54.9577 73.4567C63.0649 78.8939 74.4302 78.0812 82.5099 67.5288" stroke="black" stroke-width="2.11759" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    </View>
  );
}
