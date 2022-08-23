import React from "react";
import { View } from 'react-native';
import { Svg, Path, Rect} from 'react-native-svg';

export default function  mouthBare(): any {
  return (
    <View
    style={{
      width: "40%",
      height: "10%",
      position: "absolute",
      top: "28%",
      right: "30%"
    }}>
  <Svg viewBox="0 0 43 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect
      x={2.425}
      y={4.25}
      width={37.058}
      height={12.706}
      rx={2.118}
      transform="rotate(-4 2.425 4.25)"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.081 1.896 5.737 4.018l.975 3.708a3.176 3.176 0 0 0 3.242 2.365 3.176 3.176 0 0 0-2.882 2.793l-.448 3.808 30.343-2.122-.974-3.708a3.176 3.176 0 0 0-3.243-2.365 3.176 3.176 0 0 0 2.883-2.793l.448-3.808Z"
      fill="#fff"
    />
    <Path
      d="M4.976 3.39c-1.936-.14-3.57 1.463-3.434 3.415l.54 7.713c.136 1.951 1.978 3.31 3.875 2.904 3.676-.79 10.705-2.19 15.785-2.544 5.08-.356 12.235.052 15.985.322 1.936.14 3.57-1.464 3.434-3.415l-.539-7.713C40.486 2.12 38.644.76 36.746 1.168c-3.676.79-10.705 2.189-15.785 2.544S8.726 3.659 4.976 3.39Z"
      stroke="#000"
      strokeWidth={2.118}
    />
  </Svg>
    </View>
  );
}
