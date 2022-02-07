import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default function noseRound(): any {
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
      <path d="M12.307 12.3397C17.753 11.0993 26.6843 12.9603 24.7238 22.8833C22.9813 31.7023 13.6141 32.1857 11 29.7048" stroke="black" strokeWidth="4" />
    </svg>

   `;
  return ( <SvgXml xml={xml} width="100%" height="100%" /> );
}
