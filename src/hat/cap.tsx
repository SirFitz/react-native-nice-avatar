import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs } from 'react-native-svg';

export default function hatBeanie(props: { color: string }): any {
  const { color } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "15%",
      width: "79%",
      height: "115%",
      left: "9%"
    }}>
    <Svg viewBox="0 0 138 149" fill="none" >
    <Path d="M50.681 90.2552L50.5214 90.1166L50.3176 90.0604C49.5166 89.8396 48.6443 90.0996 47.8916 90.4333C47.0988 90.7848 46.2217 91.3199 45.3198 91.9189C44.6138 92.3878 43.8953 92.8925 43.1647 93.4057C41.963 94.2498 40.7284 95.117 39.4621 95.8862C37.4202 97.1264 35.6129 97.899 34.2083 97.8241C33.5529 97.7891 32.9894 97.5692 32.4976 97.0976C31.9883 96.6091 31.5011 95.7968 31.1272 94.4884L31.1262 94.485C30.6426 92.8164 30.001 91.1832 29.3504 89.5792C29.254 89.3413 29.1574 89.1043 29.061 88.8677C28.5023 87.4967 27.9513 86.1445 27.4764 84.7624C26.3684 81.5384 25.7134 78.2554 26.4444 74.6005C27.187 70.8873 30.0675 64.4056 34.3804 58.0544C38.6915 51.7059 44.3264 45.6485 50.4783 42.6464C56.5833 39.6672 64.5792 39.6333 72.3269 40.7898C80.0454 41.9419 87.3579 44.2494 92.0063 45.7988C100.857 48.749 107.031 57.7601 108.563 70.4742C108.59 70.8016 108.766 71.0239 108.847 71.1156C108.953 71.2353 109.074 71.328 109.17 71.3948C109.368 71.5316 109.62 71.6659 109.887 71.7947C110.429 72.0566 111.185 72.3695 112.055 72.7198C112.373 72.8478 112.709 72.9818 113.059 73.1215C114.648 73.7559 116.534 74.5091 118.424 75.3646C120.735 76.4112 122.99 77.5844 124.654 78.8336C126.377 80.128 127.193 81.2995 127.193 82.2915C127.193 82.4332 127.162 82.5105 127.133 82.559C127.101 82.6114 127.037 82.6842 126.897 82.7655C126.589 82.944 126.045 83.0887 125.193 83.1583C123.619 83.287 121.436 83.136 118.831 82.9559C118.634 82.9424 118.436 82.9286 118.234 82.9148C112.625 82.5298 105.375 82.1077 99.6975 84.5408C94.1111 86.9349 91.162 89.6787 88.734 92.0058C88.6764 92.061 88.6191 92.1159 88.5622 92.1705C86.2358 94.4016 84.4639 96.1009 81.205 96.9156C79.8373 97.2575 77.4363 97.2047 74.4308 96.8299C71.468 96.4603 68.0469 95.7962 64.7171 95.0032C61.3881 94.2104 58.1691 93.2932 55.6119 92.4225C54.3325 91.9869 53.2302 91.5668 52.3676 91.1839C51.4776 90.7888 50.9273 90.4692 50.681 90.2552Z" fill="black" stroke="black" stroke-width="1.86335"/>
    </Svg>

    </View>
  );
}
