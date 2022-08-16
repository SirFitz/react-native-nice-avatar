import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs, Rect } from 'react-native-svg';

export default function hatBeanie(props: { color: string }): any {
  const { color } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "34%",
      width: "53%",
      height: "90%",
      left: "19%"
    }}>
 <Svg viewBox="0 0 105 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M74.479 17.741c2.06 1.238 3.973 2.267 5.714 3.203.414.223.818.44 1.213.655 2.066 1.12 3.85 2.137 5.41 3.309 2.876 2.16 5.043 4.883 6.547 9.86l-82.23 22.187c-1.296-5.144-1.355-8.464-.525-11.607.787-2.984 2.377-5.854 4.684-10.018.336-.606.686-1.238 1.052-1.903 5.553-10.096 14.796-17.413 25.692-20.353 10.895-2.94 22.564-1.266 32.443 4.667Z"
      fill={color}
      stroke="#000"
      strokeWidth={2.012}
    />
    <Rect
      x={5.425}
      y={58.121}
      width={97.362}
      height={13.537}
      rx={6.768}
      transform="rotate(-15.1 5.425 58.121)"
      fill={color}
      stroke="#000"
      strokeWidth={2.012}
    />
  </Svg>
    </View>
  );
}
