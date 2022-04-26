import React from "react";
import { View } from 'react-native';
import chroma from "chroma-js";

import Hoody from "./hoody";
import Short from "./short";
import Polo from "./jumper";

export default function shirt (props: { color: string, style: string }): any {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case "hoody": return <Hoody color={color} lightColor={secondColor} />;
    case "polo": return <Polo color={color} lightColor={secondColor} />;
    case "short":
    default:
      return <Short color={color} />;
  }
}
