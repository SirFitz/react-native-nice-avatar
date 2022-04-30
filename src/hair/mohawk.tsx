import React from "react";
import { View } from 'react-native';
import chroma from "chroma-js";
import { Svg, Path } from 'react-native-svg';

export default function hairMohawk(props: { color: string, colorRandom: boolean }): any {
  const { color, colorRandom } = props;
  const mainColor = color || (colorRandom && color) || "#171921";
  const subColor = colorRandom && chroma(color).brighten(2) || "#717376";
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "25.8%",
      width: "127.6%",
      height: "93.5%",
      left: "-15.8%"
    }}>
      <Svg viewBox="0 0 138 149" fill="none">
        <Path opacity="0.35" d="M104.5 66.3004C100.3 62.9004 92.9002 62.6004 89.9002 62.9004L85.7002 48.9004C92.9002 50.5004 102.7 61.5004 104.5 66.3004Z"  fill={subColor}/>
        <Path opacity="0.35" d="M40.7003 94.6001C36.9003 80.2001 52.3003 72.5001 59.5003 70.2001C55.8003 61.6001 47.3003 53.8001 37.0003 63.3001C27.5003 79.4001 31.2003 91.9001 34.1003 101.4L40.7003 94.6001Z"  fill={subColor}/>
        <Path d="M90.0009 62.9005C90.0009 62.9005 85.7009 62.8005 75.2009 65.1005C64.6009 67.4005 59.6009 70.2005 59.6009 70.2005C49.4009 49.2005 35.6009 62.2005 31.0009 71.3005C27.4009 49.3005 43.4009 35.2005 50.6009 31.3005C51.3009 30.9005 55.1009 29.1005 66.4009 26.3005C79.2009 23.1005 83.9009 24.3005 83.9009 24.3005L90.0009 62.9005Z" fill={mainColor} stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
      </Svg>
    </View>
  );
}
