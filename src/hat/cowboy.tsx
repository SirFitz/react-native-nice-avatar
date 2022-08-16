
import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs } from 'react-native-svg';
import chroma from "chroma-js";

export default function hatCowboy(props: { color: string }): any {
  const { color } = props;
  const darkColor = chroma(color).darken(0.5).hex();
  return (
    <View 
    style={{
      position: "absolute",
      width: "76%",
      height: "112%",
      bottom: "25%",
      left: "8%"
    }}>
 <Svg viewBox="0 0 146 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M113.25 44.54s-9.44-14.53-18.29-34.82c-1.95-4.77-8-12.24-17.41-6.82-4.94 2.53-5.17 2.8-7.82 3.09-2.66.39-7.62-3.63-16.16 2.09-8.64 5.71-14.77 14.85-15.41 20.21-.64 5.36-1.94 10.34 1.12 23.4 2.84.64 11.54 2.89 19.2 7.84 0 0-25.62-18.18-49.34-1.78-11.27 7.51-7.55 14.59-7.55 14.59s3.21 10.15 18.5 11.18c11.69.8 17.63-.85 20.91-1.52.42-.15.48-.65.11-.89-1.8-.92-3.11-3.11-.52-4.8 5.56-2.66 51.49-.56 51.49-.56"
      fill={color}
    />
    <Path
      d="M113.25 44.54s-9.44-14.53-18.29-34.82c-1.95-4.77-8-12.24-17.41-6.82-4.94 2.53-5.17 2.8-7.82 3.09-2.66.39-7.62-3.63-16.16 2.09-8.64 5.71-14.77 14.85-15.41 20.21-.64 5.36-1.94 10.34 1.12 23.4 2.84.64 11.54 2.89 19.2 7.84 0 0-25.62-18.18-49.34-1.78-11.27 7.51-7.55 14.59-7.55 14.59s3.21 10.15 18.5 11.18c11.69.8 17.63-.85 20.91-1.52.42-.15.48-.65.11-.89-1.8-.92-3.11-3.11-.52-4.8 5.56-2.66 51.49-.56 51.49-.56"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M58.38 59.51s35.26 5.84 70.03-27.16c14.29-12.49 15.46-3.79 15.46-3.79S156.24 80 91.99 75.72C79.98 74.28 58.38 59.5 58.38 59.5v.01Z"
      fill={darkColor}
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M113.25 44.54s2.55 3.13 4.07 4.72c-1.92 2.59-30.59 17.38-49.8 15.48l-9.04-5.21s26.63 3.9 54.77-14.99Z"
      fill="#14DA72"
      stroke="#000"
      strokeWidth={2.19}
    />
    <Path d="M117.32 49.25s3.18 1.19 5.15-.09l-5.15.09Z" fill={color} />
    <Path
      d="M117.32 49.25s3.18 1.19 5.15-.09M43.67 41.93c21.3-9.63 13.17-30.05 13.17-30.05M67.55 5.72l7.17 2.37s4.35 2.33 7.73-2.3"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    </View>
  );
}
