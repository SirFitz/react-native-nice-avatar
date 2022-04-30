import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs } from 'react-native-svg';

export default function hatCap(props: { color: string }): any {
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
      <Svg viewBox="0 0 138 149" fill="none">
        <Path d="M50.7447 90.0733L50.5447 89.9733L50.3447 89.8733C49.5447 89.6733 48.6447 89.8733 47.9447 90.2733C47.1447 90.6733 46.2447 91.1733 45.3447 91.7733C44.6447 92.2733 43.9447 92.7733 43.1447 93.2733C41.9447 94.0733 40.7447 94.9733 39.4447 95.7733C37.4447 96.9733 35.6447 97.7733 34.1447 97.6733C33.4447 97.6733 32.9447 97.3733 32.4447 96.9733C31.9447 96.4733 31.4447 95.6733 31.0447 94.3733C30.5447 92.6733 29.9447 91.0733 29.2447 89.4733C29.1447 89.2733 29.0447 88.9733 28.9447 88.7733C28.3447 87.3733 27.8447 86.0733 27.3447 84.6733C26.2447 81.4733 25.5447 78.1733 26.3447 74.4733C27.0447 70.7733 29.9447 64.2733 34.2447 57.9733C38.5447 51.6733 44.1447 45.5733 50.3447 42.5733C56.4447 39.5733 64.4447 39.5733 72.1447 40.6733C79.8447 41.8733 87.1447 44.1733 91.8447 45.6733C100.745 48.6733 106.845 57.6733 108.445 70.3733C108.445 70.6733 108.945 71.2733 109.045 71.2733C109.245 71.3733 109.545 71.5733 109.745 71.6733C110.245 71.9733 111.045 72.2733 111.945 72.5733C112.245 72.6733 112.645 72.8733 112.945 72.9733C114.545 73.5733 116.445 74.3733 118.345 75.1733C120.645 76.1733 122.945 77.3733 124.545 78.6733C126.245 79.9733 127.045 81.1733 127.045 82.1733C127.045 82.2733 127.045 82.3733 126.945 82.4733C126.945 82.5733 126.845 82.5733 126.745 82.6733C126.445 82.8733 125.845 82.9733 125.045 83.0733C123.445 83.1733 121.245 83.0733 118.645 82.8733C118.445 82.8733 118.245 82.8733 118.045 82.8733C112.445 82.4733 105.145 82.0733 99.5447 84.4733C93.9447 86.8733 91.0447 89.5733 88.5447 91.9733C88.4447 92.0733 88.4447 92.0733 88.3447 92.1733C86.0447 94.3733 84.2447 96.0733 80.9447 96.8733C79.5447 97.1733 77.1447 97.1733 74.1447 96.7733C71.1447 96.3733 67.7447 95.7733 64.4447 94.9733C61.1447 94.1733 57.9447 93.2733 55.3447 92.3733C54.0447 91.9733 52.9447 91.4733 52.1447 91.1733C51.5447 90.5733 50.9447 90.2733 50.7447 90.0733Z" fill={color} stroke="black" strokeWidth="1.8634"/>
        <Path d="M47.9453 90.1729C47.9453 90.1729 66.4453 77.0729 74.5453 73.6729C93.4453 65.7729 108.645 70.1729 108.645 70.1729" fill={color}/>
        <Path d="M47.9453 90.1729C47.9453 90.1729 66.4453 77.0729 74.5453 73.6729C93.4453 65.7729 108.645 70.1729 108.645 70.1729"  stroke="black" strokeWidth="1.8634"/>
      </Svg>

    </View>
  );
}
