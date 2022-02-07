import * as React from 'react';
import { SvgXml } from 'react-native-svg';

import Turban from "./turban";
import Beanie from "./beanie";

export default function hat(props: { color: string, style: string }): any {
  const { style, color } = props;
  switch (style) {
    case "beanie": return <Beanie color={color} />;
    case "turban": return <Turban color={color} />;
    case "none":
    default:
      return null;
  }
}
