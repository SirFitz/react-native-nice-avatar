import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs, G, Rect, ClipPath } from 'react-native-svg';

export default function shirtSuit(props: { color: string, lightColor: string, darkColor: string }): any {
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
      <Path d="M79.0998 85.8001C79.0998 85.8001 79.0998 85.8001 79.7998 85.0001L79.0998 85.8001L79.9998 86.5001L80.5998 85.5001C80.5998 85.5001 80.5998 85.4001 80.6998 85.4001C80.7998 85.3001 80.8998 85.1001 81.0998 84.9001C81.3998 84.4001 81.8998 83.8001 82.3998 83.0001C83.5998 81.5001 85.1998 79.4001 87.0998 77.4001C88.9998 75.4001 91.1998 73.5001 93.4998 72.1001C95.7998 70.8001 97.9998 70.1001 100.1 70.3001C122.6 73.3001 139.1 83.3001 149.8 98.1001H5.2998C13.8998 82.6001 26.1998 72.7001 46.0998 68.1001C46.8998 67.9001 48.0998 68.0001 49.4998 68.3001C50.8998 68.6001 52.5998 69.2001 54.2998 70.0001C57.7998 71.5001 61.6998 73.8001 65.3998 76.1001C69.0998 78.4001 72.4998 80.8001 74.9998 82.6001C76.1998 83.5001 77.2998 84.3001 77.9998 84.8001C78.3998 85.1001 78.5998 85.3001 78.7998 85.4001C78.8998 85.6001 78.9998 85.7001 79.0998 85.8001Z" fill={lightColor}/>
      <Path d="M79.0998 85.8001C79.0998 85.8001 79.0998 85.8001 79.7998 85.0001L79.0998 85.8001ZM79.0998 85.8001L79.9998 86.5001L80.5998 85.5001C80.5998 85.5001 80.5998 85.4001 80.6998 85.4001C80.7998 85.3001 80.8998 85.1001 81.0998 84.9001C81.3998 84.4001 81.8998 83.8001 82.3998 83.0001C83.5998 81.5001 85.1998 79.4001 87.0998 77.4001C88.9998 75.4001 91.1998 73.5001 93.4998 72.1001C95.7998 70.8001 97.9998 70.1001 100.1 70.3001C122.6 73.3001 139.1 83.3001 149.8 98.1001H5.2998C13.8998 82.6001 26.1998 72.7001 46.0998 68.1001C46.8998 67.9001 48.0998 68.0001 49.4998 68.3001C50.8998 68.6001 52.5998 69.2001 54.2998 70.0001C57.7998 71.5001 61.6998 73.8001 65.3998 76.1001C69.0998 78.4001 72.4998 80.8001 74.9998 82.6001C76.1998 83.5001 77.2998 84.3001 77.9998 84.8001C78.3998 85.1001 78.5998 85.3001 78.7998 85.4001C78.8998 85.6001 78.9998 85.7001 79.0998 85.8001Z" stroke="black" strokeWidth="2.1176"/>
      <Path d="M39.8997 69.5998C40.1997 68.2998 41.9997 61.8998 42.5997 59.3998C42.6997 58.9998 43.1997 58.8998 43.4997 59.1998C52.0997 68.2998 68.8997 67.7998 73.1997 67.4998C73.5997 67.4998 73.8997 67.8998 73.6997 68.2998L66.6997 81.6998C66.5997 81.8998 66.3997 81.9998 66.1997 81.9998C63.3997 81.5998 45.4997 78.6998 39.9997 70.0998C39.7997 69.8998 39.7997 69.7998 39.8997 69.5998Z" fill={lightColor} stroke="black" strokeWidth="2.1176"/>
      <Path d="M109 69.6009C108.2 68.2009 104.2 61.6009 102.9 59.3009C102.7 59.0009 102.2 58.9009 102 59.3009C98.3002 64.4009 87.4002 67.7009 84.6002 68.4009C84.3002 68.5009 84.1002 68.9009 84.3002 69.2009C85.7002 71.5009 90.4002 79.6009 91.4002 81.3009C91.5002 81.5009 91.7002 81.6009 91.9002 81.5009C93.9002 81.1009 103.8 78.5009 109 70.2009C109.1 70.0009 109.1 69.7009 109 69.6009Z" fill={lightColor} stroke="black" strokeWidth="2.1176"/>
      <Path d="M80 85.9996L73.7 68.0996L69 77.9996L80 85.9996Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
      <Path d="M80 86L84 69L87.5 76L80 86Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
      <Path d="M49.3 57.4004L43 59.0004L48.3 62.4004L49.3 57.4004Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
      <Path d="M96.7002 57.4004L102.5 59.0004L98.8002 62.4004L96.7002 57.4004Z" fill="black" stroke="black" strokeWidth="2.1176" strokeLinejoin="round"/>
      <Path d="M74.4001 85.6L69.4001 81.8C68.6001 81.2 68.3001 80.1 68.8001 79.2L73.1001 70.2C73.5001 69.5 74.2001 69 75.0001 69H82.6001C83.4001 69 84.1001 69.4 84.4001 70.1L89.4001 78.9C89.8001 79.6 89.8001 80.5 89.3001 81.1L86.7001 85.1C86.3001 85.7 85.6001 86 84.9001 86H75.7001C75.2001 86 74.8001 85.9 74.4001 85.6Z" fill={darkColor} stroke="black" strokeWidth="2.12"/>
      <Path d="M75.4004 97.2L77.0004 86.5H85.0004L86.5004 97.2" fill={darkColor} />
      <Path d="M75.4004 97.2L77.0004 86.5H85.0004L86.5004 97.2" stroke="black" strokeWidth="2.12"/>
      <Path d="M103 80.0004C104.9 75.5004 104 65.8004 103.2 60.6004C103.2 60.3004 103.5 60.1004 103.7 60.4004C106 63.2004 110.5 68.5004 114.4 72.5004C114.4 72.5004 114.5 72.6004 114.6 72.6004C132.1 76.5004 145.3 90.8004 150.1 98.0004C150.3 98.2004 150.1 98.6004 149.8 98.6004H96.9996C96.6996 98.6004 96.5996 98.4004 96.5996 98.1004C98.0996 93.6004 101.1 84.6004 103 80.0004Z" fill={color} stroke="black" strokeWidth="2"/>
      <Path d="M119 77.0008C117.2 76.3008 110 67.8008 105.3 62.2008C104.7 61.5008 103.6 62.0008 103.7 62.9008C103.9 64.6008 104.3 66.7008 105 68.5008C106.2 71.7008 112.5 78.5008 115.5 81.5008C116.2 81.2008 117.8 79.8008 119 77.0008Z" fill={color} stroke="black" strokeWidth="2"/>
      <Path d="M120.5 86.5C118.1 84.9 108.8 74.2 104.5 69C105 72 103.5 80 103 81C102.6 81.8 98.8 93 97 98.5H113C115 95.5 119.3 88.9 120.5 86.5Z" fill={color}/>
      <Path d="M104.5 69C108.8 74.2 118.1 84.9 120.5 86.5C119.3 88.9 115 95.5 113 98.5H97C98.8 93 102.6 81.8 103 81C103.5 80 105 72 104.5 69Z" stroke="black" strokeWidth="2"/>
      <Path d="M51 81C45.8 76.6 43.5 65.2 43 60C42.2 62.2 40.1 67.3 38.5 70.5C20.1 74.9 8.5 90.3 5 97.5H66.5C63.5 93.8 56.2 85.4 51 81Z" fill={color} stroke="black" strokeWidth="2"/>
      <Path d="M34.5 77.5L42.5 60.5L46 73.5C44.3 74.8 40.4 78 38 80C35.6 79.6 34.7 78.2 34.5 77.5Z" fill={color} stroke="black" strokeWidth="2"/>
      <Path d="M33.0005 85.5C34.2005 84.3 42.2005 76.7 46.0005 73C47.2005 76.2 49.8005 79.7 51.0005 81L67.0005 97.5H46.0005C41.5005 95.5 31.5005 87 33.0005 85.5Z" fill={color} stroke="black" strokeWidth="2"/>
    </Svg>


    </View>
  );
}
