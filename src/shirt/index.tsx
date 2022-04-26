import React from "react";
import { View } from 'react-native';
import chroma from "chroma-js";

import Hoody from "./hoody";
import Short from "./short";
import Polo from "./polo";
import ClosedVest from "./closedVest";
import OpenVest from "./openVest";
import Striped from "./striped";
import StripedLarge from "./stripedLarge";
import Jumper from "./jumper";

export default function shirt (props: { color: string, style: string }): any {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case "hoody": return <Hoody color={color} lightColor={secondColor} />;
    case "polo": return <Polo color={color} lightColor={secondColor} />;
    case "closedVest": return <ClosedVest color={color} lightColor={secondColor} />;
    case "openVest": return <OpenVest color={color} lightColor={secondColor} />;
    case "striped": return <Striped color={color} lightColor={secondColor} />;
    case "stripedLarge": return <StripedLarge color={color} lightColor={secondColor} />;
    case "jumper": return <Jumper color={color} lightColor={secondColor} />;
    case "short":
    default:
      return <Short color={color} />;
  }
}
