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
import Tie from "./tie";
import BowTie from "./bowTie";
import Suit from "./suit";

export default function shirt (props: { color: string, style: string }): any {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  const ThirdColor = chroma(color).darken(2.5).hex();
  const darkColor = chroma(color).darken(4).hex();
  switch (style) {
    case "hoody": return <Hoody color={color} lightColor={secondColor} darkColor={darkColor} />;
    case "polo": return <Polo color={color} lightColor={secondColor}  darkColor={darkColor}/>;
    case "closedVest": return <ClosedVest color={color} lightColor={secondColor}  darkColor={darkColor}/>;
    case "openVest": return <OpenVest color={color} lightColor={secondColor}  darkColor={darkColor}/>;
    case "striped": return <Striped color={color} lightColor={secondColor} darkColor={darkColor} />;
    case "stripedLarge": return <StripedLarge color={color} lightColor={secondColor}  darkColor={darkColor}/>;
    case "jumper": return <Jumper color={color} lightColor={secondColor}  darkColor={darkColor}/>;
    case "tie": return <Tie color={color} lightColor={secondColor}  darkColor={ThirdColor}/>;
    case "bowTie": return <BowTie color={color} lightColor={secondColor}  darkColor={ThirdColor}/>;
    case "suit": return <Suit color={color} lightColor={secondColor}  darkColor={ThirdColor}/>;
    case "short":
    default:
      return <Short color={color} />;
  }
}
