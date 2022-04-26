import React from "react";
import { View } from 'react-native';

import Round from "./round";
import Square from "./square";
import RoundCool from "./roundCool";
import RoundDash from "./roundDash";
import Rayband from "./rayband";
import CatEyes from "./catEyes";

export default function glasses(props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "round": return <Round />;
    case "square": return <Square />;
    case "roundCool": return <RoundCool />;
    case "roundDash": return <RoundDash />;
    case "rayband": return <Rayband />;
    case "catEyes": return <CatEyes />;
    case "none":
    default:
      return null;
  }
}
