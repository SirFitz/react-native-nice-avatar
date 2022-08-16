import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function hoop(props): any {
  const { color } = props;
  return (
    <View
      style={{
        position: "absolute",
        width: "16%",
        height: "15%",
        top: "24%",
        left: "19.8%"
      }}
      >
      <Svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M14.706 2C21.723 2 27.41 7.688 27.41 14.706c0 7.017-5.688 12.705-12.706 12.705C7.689 27.411 2 21.723 2 14.705c0-3.383 1.853-6.088 3.479-8.735l.491-.794"
          stroke="#F4D150"
          strokeWidth={2.118}
        />
      </Svg>
    </View>

  );
}
