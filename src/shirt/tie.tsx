import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs, G, Rect, ClipPath } from 'react-native-svg';

export default function shirtTie(props: { color: string, lightColor: string, darkColor: string }): any {
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
            <G clip-path="url(#clip0_644_13609)">
            <Path d="M79.1123 85.775C79.1124 85.7751 79.1124 85.7751 79.763 84.9398L79.1124 85.7751L80.0239 86.485L80.6517 85.5154L80.6518 85.5152L80.6528 85.5137L80.6578 85.5061L80.6794 85.473C80.6991 85.4431 80.729 85.3979 80.7688 85.3383C80.8484 85.2192 80.9676 85.0428 81.1234 84.8178C81.435 84.3675 81.8927 83.723 82.4725 82.9526C83.6338 81.4095 85.2772 79.3716 87.2124 77.3791C89.1527 75.3813 91.3556 73.4612 93.632 72.1249C95.9171 70.7835 98.1738 70.0897 100.268 70.3721C122.735 73.4014 139.268 83.3526 150 98.175H5.31623C13.9452 82.6416 26.2186 72.7544 46.1169 68.2175C46.9649 68.0242 48.1178 68.0828 49.5594 68.4181C50.9861 68.7499 52.6126 69.3328 54.3669 70.1039C57.875 71.6459 61.7913 73.8946 65.4715 76.224C69.1461 78.5499 72.5581 80.9389 75.0534 82.7479C76.3003 83.652 77.3168 84.4101 78.0209 84.9417C78.3729 85.2075 78.6467 85.4165 78.832 85.5588C78.9247 85.6299 78.9953 85.6844 79.0424 85.7209L79.0955 85.7619L79.1085 85.7721L79.1116 85.7745L79.1123 85.775Z" fill={color} stroke="black" strokeWidth="2.11759"/>
            <Path d="M39.8528 69.632L42.588 59.4506C42.6988 59.0383 43.2313 58.9184 43.5247 59.2285C52.1707 68.3689 68.9471 67.8243 73.1852 67.5258C73.6089 67.4959 73.9086 67.9493 73.7105 68.325L66.6708 81.6761C66.568 81.871 66.3684 81.9833 66.1503 81.9522C63.4169 81.5623 45.4369 78.6951 39.9137 70.0433C39.8356 69.921 39.8152 69.7721 39.8528 69.632Z" fill={lightColor} stroke="black" strokeWidth="2.11759"/>
            <Path d="M108.983 69.5775L102.852 59.2635C102.644 58.9133 102.129 58.9145 101.89 59.244C98.1876 64.3342 87.3447 67.5731 84.5089 68.3488C84.1667 68.4424 84.0057 68.8372 84.1864 69.1425L91.3128 81.1837C91.4254 81.3739 91.6382 81.4747 91.8541 81.4274C93.8412 80.992 103.706 78.4587 108.977 70.1244C109.082 69.9585 109.083 69.7462 108.983 69.5775Z" fill={lightColor} stroke="black" strokeWidth="2.11759"/>
            <Path d="M80.0004 86.0002L73.7058 68.0586L69 78L80.0004 86.0002Z" fill="black" stroke="black" strokeWidth="2.11759" strokeLinejoin="round"/>
            <Path d="M80 86L84 69L87.5 76L80 86Z" fill="black" stroke="black" strokeWidth="2.11759" strokeLinejoin="round"/>
            <Path d="M49.3225 57.4121L42.9697 59.0003L48.2637 62.4414L49.3225 57.4121Z" fill="black" stroke="black" strokeWidth="2.11759" strokeLinejoin="round"/>
            <Path d="M96.704 57.4121L102.527 59.0003L98.8216 62.4414L96.704 57.4121Z" fill="black" stroke="black" strokeWidth="2.11759" strokeLinejoin="round"/>
            <Path d="M74.4341 85.5745L69.3903 81.7827C68.5821 81.1751 68.3155 80.0811 68.7536 79.1698L73.0643 70.2016C73.4173 69.4671 74.1601 69 74.975 69H82.557C83.322 69 84.0277 69.4121 84.4035 70.0784L89.3603 78.8659C89.7527 79.5616 89.7208 80.4188 89.2777 81.0834L86.6294 85.056C86.2362 85.6457 85.5742 86 84.8654 86H75.708C75.2485 86 74.8014 85.8507 74.4341 85.5745Z" fill={darkColor} stroke="black" strokeWidth="2.12"/>
            <Path d="M67.1273 158.638L77 86.5H85L93.871 158.521C93.9522 159.181 93.7194 159.84 93.2421 160.303L80.7415 172.415C79.8577 173.271 78.433 173.198 77.6421 172.255L67.6035 160.288C67.2192 159.83 67.0462 159.23 67.1273 158.638Z" fill={darkColor} stroke="black" strokeWidth="2.12"/>
            </G>
            <Defs>
            <ClipPath id="clip0_644_13609">
                <Rect width="155" height="49" fill="white" transform="translate(3 50)"/>
            </ClipPath>
            </Defs>
        </Svg>

    </View>
  );
}