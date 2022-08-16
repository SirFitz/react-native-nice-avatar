import React from "react";
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function tripleStud(props): any {
  const { color } = props;
  return (
    <View
      style={{
        position: "absolute",
        width: "19%",
        height: "18%",
        top: "25.5%",
        left: "18%"
      }}
      >
      <Svg viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.093 3.862c-.245 1.131-1.786 1.758-3.442 1.4-1.656-.358-2.801-1.565-2.557-2.696.2-.92 1.256-1.507 2.535-1.501M6.96 8.678c-.21.82-1.604 1.173-3.115.786-1.51-.386-2.564-1.365-2.354-2.186.171-.668 1.126-1.026 2.29-.928M7.295 12.103c.193.59-.85 1.46-2.332 1.947-1.482.485-2.84.401-3.032-.188-.157-.479.504-1.145 1.554-1.638"
          stroke="#F4D150"
          strokeWidth={2.118}
          strokeLinecap="round"
        />
      </Svg>

    </View>

  );
}
