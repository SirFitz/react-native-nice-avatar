import React from "react";
import { View } from 'react-native';
import { Svg, Path, Defs } from 'react-native-svg';

export default function hatHandkerchiefBack(props: { color: string }): any {
  const { color } = props;
  return (
    <View 
    style={{
      position: "absolute",
      bottom: "30%",
      width: "45%",
      height: "81%",
      left: "25%"
    }}>
       <Svg viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M2.5 46.92c-1-3.2-2.87-11.19-.17-18.19 0-.1.1-.2.2-.3 6.8-6.6 25.69-21.71 64.19-27.41.8-.1 1.6.1 2.1.6 3.8 3.2 8.3 9.1 11.3 19 .2.6-.4 1.2-1 1.1-8.6-1.8-26.5-2.7-51 9.4-13.4 7.3-19.4 14.3-20.6 15.8-.1.2-.4.3-.6.3-.6.1-1.9.3-3 .9-.4.3-1 0-1.2-.5l-.22-.7Z"
      fill={color}
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M62.43 4.23a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM67.73 8.23a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM71.93 14.63a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM59.93 5.53a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8ZM65.43 5.53a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8ZM72.23 17.33a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8ZM72.43 20.53a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM57.83 9.43a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM70.73 11.43a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM50.53 16.23a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM54.83 12.53a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM48.63 19.63a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM47.53 24.13a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM24.23 28.83a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM3.83 34.33a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM13.33 36.33a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM18.93 25.33a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM6.43 29.63a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM29.53 29.13a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM2.63 36.53a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM4.83 31.53a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM26.83 29.03a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM8.83 31.03a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM17.43 22.83a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6ZM15.93 20.63a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM31.23 25.63a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM20.93 28.23a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM11.53 33.33a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM14.63 40.13a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM34.03 18.63a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM31.33 21.93a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM35.73 13.63a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM36.53 10.33a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
      fill="#000"
    />
    <Path
      d="M70.23 20.73c1-7.9-5.2-12.6-7.3-14.2-.3-.2-.8-.1-1 .2-.6 1.3-.8 3.5-5.1 7.2-2.2 1.8-6.3 4.7-6.3 9M12.03 42.23c.8-6-2.9-9.2-4.8-10.6-.3-.2-.7-.1-.7.3-.5 2.9-2.1 5.2-4.6 7.6-.4 2.5.5 5.5.9 8M17.43 17.33c1.5 6.7 7.9 8.7 10.1 9.4.3.1.7-.1.7-.5.1-1.2-.4-3.1 2.1-7.3 1.2-2.1 3.7-5.6 2.5-9.1"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M57.63 21.43s-.9-2 2.1-4.8c2.9-2.8 4.2-3 5-1.9.8 1.1 2.1 5.6 0 6.1-2.5 0-7.1.6-7.1.6ZM3.23 48.329s-2.3-1.2.3-4.3c1.5-1.7 2.9-6.2 3.9-6.5 1.3-.4 3.1 6.4 1.9 7.3-.9.4-1.4 2-2.6 2.5-1.6.8-3.5 1-3.5 1ZM27.73 12.03s1.3 1.4-.3 4.7c-1.7 3.3-2.6 3.8-3.7 3.1-1-.7-3.5-4.1-1.8-5.2 2.1-.8 5.8-2.6 5.8-2.6Z"
      fill="#000"
    />
  </Svg>
    
    </View>
  );
}
