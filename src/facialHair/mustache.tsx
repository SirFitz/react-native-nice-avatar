import React from "react";
import { View } from 'react-native';
import { Svg, Path , Mask, Ellipse, G} from 'react-native-svg';

export default function  mouthFrown(): any {
  return (
    <View
    style={{
      width: "150%",
      height: "85%",
      position: "absolute",
      top: "-12.5%",
      right: "-17.5%"
    }}>
  <Svg viewBox="0 0 138 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M96.2602 69.5192C97.2402 69.1192 99.9002 68.0992 99.8902 67.5592C99.9702 66.3592 98.5202 65.0492 97.5802 64.5792C96.1902 63.8992 94.3902 63.9092 92.9002 64.1392C90.4002 64.5292 88.8402 64.7292 86.8402 65.0192C84.9602 65.2892 82.5002 65.6692 80.6702 65.7992C78.5102 65.9492 76.5102 66.1092 75.1202 66.3292C72.9202 66.7292 69.8002 67.6592 69.0302 70.8492C68.8402 71.6492 69.7602 72.3892 70.3802 72.3292C72.5702 72.5892 75.2502 72.7692 77.8302 72.8392C79.1202 72.8792 82.2902 72.8692 83.2802 72.8792C85.8302 72.9192 87.1302 72.6592 87.3602 72.5892C90.7102 71.5692 95.2902 69.8392 96.2702 69.5092L96.2602 69.5192ZM94.6302 68.1792C91.6102 69.1792 88.5902 70.1492 85.5502 71.0692C85.4002 71.0292 85.2402 71.0192 85.0602 71.0692C83.8602 71.3692 82.6302 71.0092 81.4202 70.9892C80.2202 70.9692 79.0302 71.0992 77.8302 71.0592C75.6902 70.9992 73.5702 70.6592 71.4602 70.2992C72.5102 68.7192 74.7302 68.0492 76.5102 67.7292C78.9702 67.2892 81.5102 67.2192 84.0002 67.0192C86.6102 66.8092 89.2102 66.5892 91.8202 66.3792C93.1202 66.2692 96.6602 65.6992 97.6802 67.1692C97.1902 67.3892 96.6102 67.5192 96.1402 67.6492C95.6302 67.3492 94.8302 67.5192 94.6402 68.1792H94.6302Z" fill="black"/>
<Path d="M96.2602 69.5192C97.2402 69.1192 99.9002 68.0992 99.8902 67.5592C99.9702 66.3592 98.5202 65.0492 97.5802 64.5792C96.1902 63.8992 94.3902 63.9092 92.9002 64.1392C90.4002 64.5292 88.8402 64.7292 86.8402 65.0192C84.9602 65.2892 82.5002 65.6692 80.6702 65.7992C78.5102 65.9492 76.5102 66.1092 75.1202 66.3292C72.9202 66.7292 69.8002 67.6592 69.0302 70.8492C68.8402 71.6492 69.7602 72.3892 70.3802 72.3292C72.5702 72.5892 75.2502 72.7692 77.8302 72.8392C79.1202 72.8792 82.2902 72.8692 83.2802 72.8792C85.8302 72.9192 87.1302 72.6592 87.3602 72.5892C90.7102 71.5692 95.2902 69.8392 96.2702 69.5092L96.2602 69.5192ZM94.6302 68.1792C91.6102 69.1792 88.5902 70.1492 85.5502 71.0692C85.4002 71.0292 85.2402 71.0192 85.0602 71.0692C83.8602 71.3692 82.6302 71.0092 81.4202 70.9892C80.2202 70.9692 79.0302 71.0992 77.8302 71.0592C75.6902 70.9992 73.5702 70.6592 71.4602 70.2992C72.5102 68.7192 74.7302 68.0492 76.5102 67.7292C78.9702 67.2892 81.5102 67.2192 84.0002 67.0192C86.6102 66.8092 89.2102 66.5892 91.8202 66.3792C93.1202 66.2692 96.6602 65.6992 97.6802 67.1692C97.1902 67.3892 96.6102 67.5192 96.1402 67.6492C95.6302 67.3492 94.8302 67.5192 94.6402 68.1792H94.6302Z" stroke="black" stroke-miterlimit="10"/>
<Path d="M98.46 67.4901C98.46 67.4001 98.46 67.4901 98.46 67.4901C98.46 67.4001 98.37 67.1101 98.37 67.2101C98.37 67.3101 98.37 67.2101 98.37 67.1201L98.28 67.0301C98.19 66.9401 98.19 66.8401 98.09 66.7501L98 66.6601L97.81 66.4701L97.43 66.0901C97.43 66.0901 97.24 65.9001 97.34 66.0001C97.25 65.9101 97.15 65.9101 97.15 65.8101C96.96 65.7201 96.87 65.6201 96.68 65.5301C96.68 65.5301 96.59 65.5301 96.59 65.4401C95.64 64.9701 94.7 64.9701 93.65 65.0601C91.28 65.3401 88.91 65.7201 86.64 66.0101C84.46 66.2901 82.28 66.5801 80.1 66.6701C79.72 66.6701 79.34 66.6701 78.96 66.7601C77.82 66.8501 76.69 67.0401 75.55 67.1401C75.17 67.2301 74.89 67.2301 74.51 67.3301C74.13 67.4201 73.75 67.5201 73.37 67.7101C73.28 67.7101 73.18 67.8001 73.09 67.8001C73.09 67.8001 73 67.8001 73 67.8901C72.81 67.9801 72.62 68.0801 72.53 68.1701L71.96 68.4501C71.87 68.5401 71.77 68.5401 71.77 68.6401L71.39 69.0201L71.2 69.2101L71.11 69.3001C71.02 69.3901 70.92 69.5801 70.83 69.7701C70.74 69.8601 70.74 69.9601 70.74 70.0501C70.74 70.1401 70.74 70.1401 70.65 70.2401C70.56 70.4301 70.56 70.5201 70.46 70.7101C70.46 71.0901 70.74 71.4701 71.03 71.4701C71.5 71.5601 72.07 71.6601 72.64 71.6601C72.73 71.4701 72.83 71.2801 73.02 71.1901C73.11 71.1001 73.21 71.0001 73.3 70.8101L73.39 70.7201V70.6301C73.39 70.9101 73.39 71.1001 73.48 71.3901V71.5801C73.57 71.5801 73.76 71.6701 73.95 71.6701C74.04 71.6701 74.14 71.6701 74.23 71.7601C74.32 71.7601 74.42 71.7601 74.51 71.8501H74.89C75.27 71.8501 75.55 71.9401 75.93 71.9401H76.31C77.45 72.0301 78.58 72.1301 79.81 72.1301H80.95V71.9401C81.04 71.7501 81.14 71.6601 81.23 71.4701C81.23 71.4701 81.23 71.3801 81.32 71.3801C81.32 71.4701 81.32 71.5701 81.41 71.6601V72.0401H82.45C82.54 71.7601 82.73 71.4701 82.92 71.2801C82.92 71.2801 82.92 71.1901 83.01 71.1901C83.1 71.4701 83.2 71.7601 83.29 71.9501C83.29 71.9501 83.29 72.0401 83.38 72.0401H84.71C85.28 72.0401 85.85 72.0401 86.41 71.8501C88.87 71.1901 91.24 70.4301 93.7 69.5801C93.79 69.5801 93.79 69.4901 93.89 69.4901C94.08 69.4001 94.27 69.4001 94.46 69.3001C94.55 69.3001 94.65 69.2101 94.84 69.1101C94.84 68.8301 94.93 68.5401 94.93 68.2601L95.78 68.8301C96.63 68.5501 97.39 68.1701 98.15 67.7901L98.24 67.7001L98.43 67.5101C98.34 67.5101 98.43 67.5101 98.43 67.4201C98.34 67.7001 98.34 67.6101 98.43 67.5101C98.43 67.5701 98.43 67.5701 98.43 67.5101L98.46 67.4901Z" fill="#000"/>
</Svg>

    </View>
  );
}
