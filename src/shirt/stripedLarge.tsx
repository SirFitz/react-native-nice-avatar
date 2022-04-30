import React from "react";
import { View } from 'react-native';
import { Svg, Path, G, Circle, Mask, Rect } from 'react-native-svg';

export default function shirtStripedLarge(props: { color: string, lightColor: string, darkColor: string }): any {
  const { color, lightColor } = props;
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
      <Path d="M149.837 98.1032H5.35949C5.37775 98.066 5.39614 98.0286 5.41464 97.9909C7.82064 93.0909 12.2595 84.051 18.0366 75.963C21.3155 71.3725 24.9864 67.1464 28.9099 64.1736C32.8339 61.2005 36.9143 59.5512 41.0596 59.9139C49.0294 60.6113 56.128 64.9749 63.2546 69.3556C63.9299 69.7707 64.6054 70.186 65.2819 70.5982C72.9502 75.2714 80.8247 79.6105 89.4852 77.7117C92.4152 77.0693 94.3897 75.6947 95.6324 73.9187C96.8575 72.168 97.2977 70.1332 97.3739 68.2736C97.4502 66.4114 97.1648 64.6511 96.8684 63.3712C96.7298 62.7727 96.5868 62.2713 96.4727 61.9036C98.3918 59.9719 100.424 58.8469 102.521 58.3404C104.795 57.7915 107.226 57.95 109.784 58.7065C114.934 60.2301 120.446 64.1339 125.824 69.1537C135.678 78.3507 144.72 90.9353 149.837 98.1032Z" fill={color} stroke="black" strokeWidth="2.26281"/>
      <Mask id="mask0_532_13351" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="59" width="143" height="40">
      <Path d="M146.347 97.043H8.54705C8.62677 96.8842 8.7087 96.7209 8.79282 96.5532C11.1075 91.9394 15.0802 84.0205 20.1633 76.9036C23.159 72.7092 26.4999 68.8537 30.059 66.1407C33.6192 63.4268 37.2995 61.9285 41.0204 62.2437C48.5064 62.8779 54.8285 66.856 61.4697 71.0349C62.202 71.4957 62.9383 71.9589 63.6803 72.4204C71.0554 77.0068 78.9386 81.3458 88.8866 80.2406L88.9227 80.2366L88.9584 80.2303C92.5505 79.5963 95.0469 78.1289 96.7173 76.2058C98.376 74.2961 99.1418 72.0278 99.444 69.9121C99.7459 67.799 99.5934 65.7873 99.3725 64.3186C99.2661 63.6118 99.1426 63.0222 99.0418 62.5966C102.492 59.976 106.435 59.8419 110.729 61.4365C115.312 63.1377 120.181 66.7807 124.935 71.3196C133.426 79.4272 141.256 90.1024 146.089 96.6919C146.176 96.8103 146.262 96.9273 146.347 97.043Z" fill={color} stroke="black" strokeWidth="2.26281"/>
      </Mask>
      <G mask="url(#mask0_532_13351)">
      <Rect x="6.20508" y="65.8906" width="128.644" height="5.82337" transform="rotate(-2.12658 6.20508 65.8906)" fill={lightColor} fill-opacity="0.34"/>
      <Rect x="6.20508" y="77.0078" width="139.73" height="5.82337" transform="rotate(-2.12658 6.20508 77.0078)" fill={lightColor} fill-opacity="0.34"/>
      <Rect x="1.41016" y="89.2441" width="150.58" height="5.82337" transform="rotate(-2.12658 1.41016 89.2441)" fill={lightColor} fill-opacity="0.34"/>
      <Rect x="1.41016" y="100.586" width="150.58" height="5.82337" transform="rotate(-2.12658 1.41016 100.586)" fill={lightColor} fill-opacity="0.34"/>
      </G>
    </Svg>

    </View>
  );
}
