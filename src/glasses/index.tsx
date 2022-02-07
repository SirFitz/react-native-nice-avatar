import * as React from 'react';
import { SvgXml } from 'react-native-svg';

import Round from "./round";
import Square from "./square";

export default function glasses(props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "round": return <Round />;
    case "square": return <Square />;
    case "none":
    default:
      return null;
  }
}
