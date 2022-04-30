import React from "react";
import { View } from 'react-native';
import chroma from "chroma-js";

import Turban from "./turban";
import Beanie from "./beanie";
import Cap from "./cap";
import Baseball from "./baseball";
import BackCap from "./backCap";

export default function hat(props: { color: string, style: string }): any {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();

  switch (style) {
    case "beanie": return <Beanie color={color} />;
    case "turban": return <Turban color={color} />;
    case "cap": return <Cap color={color} />;
    case "baseball": return <Baseball color={color} />;
    case "backCap": return <BackCap color={color} lightColor={secondColor} />;
    case "none":
    default:
      return null;
  }
}
