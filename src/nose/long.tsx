import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default function noseLong(): any {
  const xml = ` 

    <svg
      style={{
        width: "10%",
        height: "10%",
        position: "absolute",
        top: "15%",
        left: "46%"
      }}
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32" stroke="#171921" strokeWidth="4" />
    </svg>

   `;
  return ( <SvgXml xml={xml} width="100%" height="100%" /> );
}
