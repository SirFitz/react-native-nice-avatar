import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function shirtOpenVest(props: { color: string, lightColor: string, darkColor: string }): any {
  const { color, darkColor } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "-32%",
      width: "158%",
      height: "86%",
      left: "-29.2%"
    }}>
    <Svg viewBox="0 0 160 149" fill="none" >
      <Path d="M149.837 98.1032H5.35949C5.37775 98.066 5.39614 98.0286 5.41464 97.9909C7.82064 93.0909 12.2595 84.051 18.0366 75.963C21.3155 71.3725 24.9864 67.1464 28.9099 64.1736C32.8339 61.2005 36.9143 59.5512 41.0596 59.9139C49.0294 60.6113 56.128 64.9749 63.2546 69.3556C63.9299 69.7707 64.6054 70.186 65.2819 70.5982C72.9502 75.2714 80.8247 79.6105 89.4852 77.7117C92.4152 77.0693 94.3897 75.6947 95.6324 73.9187C96.8575 72.168 97.2977 70.1332 97.3739 68.2736C97.4502 66.4114 97.1648 64.6511 96.8684 63.3712C96.7298 62.7727 96.5868 62.2713 96.4727 61.9036C98.3918 59.9719 100.424 58.8469 102.521 58.3404C104.795 57.7915 107.226 57.95 109.784 58.7065C114.934 60.2301 120.446 64.1339 125.824 69.1537C135.678 78.3507 144.72 90.9353 149.837 98.1032Z" fill={darkColor} stroke="black" strokeWidth="2.26281"/>
      <Path d="M71.8257 98.1032H5.35949C5.37775 98.066 5.39613 98.0286 5.41463 97.9909C7.82063 93.091 12.2595 84.051 18.0366 75.963C21.3155 71.3725 24.9864 67.1464 28.9099 64.1736C32.8339 61.2005 36.9143 59.5512 41.0596 59.914C46.2535 60.3684 51.114 62.3932 55.8706 64.9865C55.9417 72.5751 57.2339 78.0894 60.0753 83.3014C62.6786 88.0767 66.558 92.5465 71.8257 98.1032ZM113.673 83.8687C111.558 77.1627 106.905 69.3251 96.8889 61.4988C98.6847 59.8131 100.575 58.8104 102.521 58.3404C104.795 57.7915 107.226 57.95 109.784 58.7065C114.934 60.2301 120.446 64.1339 125.824 69.1537C135.679 78.3507 144.72 90.9353 149.837 98.1032H115.323C115.325 98.0085 115.328 97.9119 115.33 97.8133C115.406 94.7269 115.529 89.7522 113.673 83.8687Z" fill={color} stroke="black" strokeWidth="2.26281"/>
    </Svg>

    </View>
  );
}
