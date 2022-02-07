import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default function mouthPeace(): any {
  const xml = ` 

    <svg
      style={{
        width: "50%",
        height: "19%",
        position: "absolute",
        top: "23%",
        right: "23%"
      }}
      width="67"
      height="64"
      viewBox="0 0 67 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke="black" strokeWidth="4" />
    </svg>

   `;
  return ( <SvgXml xml={xml} width="100%" height="100%" /> );
}
