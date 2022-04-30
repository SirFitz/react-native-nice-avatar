import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs, G, Rect, ClipPath } from 'react-native-svg';

export default function shirtBowTie(props: { color: string, lightColor: string, darkColor: string }): any {
  const { color, lightColor, darkColor } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "-25%",
      width: "148%",
      height: "76%",
      left: "-23.8%"
    }}>
      <Svg viewBox="0 0 160 149" fill="none" >
        <Path d="M65.5004 76.1998C61.8004 73.8998 57.9004 71.5998 54.4004 70.0998C52.6004 69.2998 51.0004 68.6998 49.6004 68.3998C48.2004 68.0998 47.0004 67.9998 46.2004 68.1998C26.3004 72.6998 14.0004 82.5998 5.40039 98.1998H150C139.3 83.3998 122.7 73.3998 100.3 70.3998C98.2004 70.0998 95.9004 70.7998 93.7004 72.1998C91.4004 73.4998 89.2004 75.4998 87.3004 77.4998L79.2004 82.6998L65.5004 76.1998Z" fill={color} stroke="black" strokeWidth="2.1176" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M39.8998 69.3996L42.3998 60.2996C42.5998 59.4996 43.5998 59.2996 44.1998 59.8996C51.2998 67.0996 69.5998 70.2996 73.4998 69.9996C74.2998 69.8996 74.9998 70.8996 74.5998 71.5996L68.2998 83.5996C68.0998 83.9996 67.6998 84.1996 67.2998 84.0996C64.5998 83.4996 45.1998 77.9996 40.1998 70.0996C39.8998 69.9996 39.7998 69.6996 39.8998 69.3996Z" fill={lightColor} stroke="black" strokeWidth="2.1176"/>
        <Path d="M108.8 69.3L103.2 59.9C102.8 59.2 101.8 59.2 101.4 59.9C98.5997 63.7 81.3997 69.2 79.2997 70C78.6997 70.2 78.3997 71 78.6997 71.5L85.3997 82.8C85.5997 83.1 85.9997 83.3 86.3997 83.2C87.7997 82.7 104.4 77.3 108.8 70.3C109 70.1 109 69.7 108.8 69.3Z" fill={lightColor} stroke="black" strokeWidth="2.1176"/>
        <Path d="M78.7002 70.6992V81.3992L83.1002 78.7992L78.7002 70.6992Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
        <Path d="M77.6998 81.7004L74.6998 70.9004L71.2998 78.6004L77.6998 81.7004Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
        <Path d="M49.3 57.4004L43 59.0004L48.3 62.4004L49.3 57.4004Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
        <Path d="M96.7002 57.4004L102.5 59.0004L98.3002 62.0004L96.7002 57.4004Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
        <Path d="M81.6001 73.5995C82.7001 72.2995 87.5001 66.1995 93.9001 64.6995C96.6001 64.0995 97.6001 69.1995 97.6001 69.1995C97.6001 69.1995 99.7001 77.4995 98.1001 84.3995C97.3001 88.0995 96.3001 88.0995 92.5001 86.8995C88.7001 85.6995 82.1001 80.7995 82.1001 80.7995C82.1001 80.7995 81.6001 80.2995 81.3001 80.7995C81.0001 81.2995 80.3001 82.8995 77.7001 82.7995C75.1001 82.6995 74.2001 81.6995 74.0001 81.4995C73.8001 81.1995 73.6001 81.4995 73.6001 81.4995C73.6001 81.4995 70.7001 85.6995 64.9001 88.7995C61.6001 90.2995 59.9001 90.5995 59.0001 89.2995C58.1001 87.9995 57.7001 86.3995 57.7001 86.3995C57.7001 86.3995 55.5001 76.7995 57.4001 69.7995C58.5001 66.4995 59.2001 66.4995 60.8001 66.7995C62.4001 67.0995 66.0001 68.1995 73.0001 73.9995C73.3001 74.2995 73.4001 73.9995 73.5001 73.8995C73.6001 73.7995 74.5001 71.9995 77.1001 72.0995C79.0001 72.0995 79.4001 72.2995 80.8001 73.4995C81.3001 73.9995 81.3001 73.7995 81.6001 73.5995Z" fill={darkColor} stroke="black" strokeWidth="2.1176" strokeMiterlimit="10"/>
        <Path d="M73.7004 73.5996C73.2004 73.6996 72.2004 78.0996 73.9004 81.3996" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10"/>
        <Path d="M80.5996 73.5C80.5996 73.5 82.1996 75.4 81.2996 80.9" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10"/>
        <Path d="M88.5 74.9004L81.5 76.3004" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M87.0996 79.6992L81.5996 78.6992" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M68.7002 80.4004L73.0002 78.9004" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M66.2002 75L72.9002 76.3" stroke="black" strokeWidth="1.3745" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    </View>
  );
}
