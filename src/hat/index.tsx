import React from "react";
import { View } from 'react-native';
import chroma from "chroma-js";

import Turban from "./turban";
import Beanie from "./beanie";
import Cap from "./cap";
import BackCap from "./backCap";
import Baseball from "./baseball";
import Cowboy from "./cowboy";
import HandkerChiefBack from "./handkerchiefBack";
import HandkerChiefUp from "./handkerchiefUp";
import Headwrap from "./headwrap";
import Hijab from "./hijab";



export default function hat(props: { color: string, style: string }): any {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();

  switch (style) {
    case "beanie": return <Beanie color={color} />;
    case "turban": return <Turban color={color} />;
    case "cap": return <Cap color={color} />;
    case "baseball": return <Baseball color={color} />;
    case "backCap": return <BackCap color={color} lightColor={secondColor} />;
    case "cowboy": return <Cowboy color={color} />;
    case "handkerchiefBack": return <HandkerChiefBack color={color} />;
    case "handkerchiefUp": return <HandkerChiefUp color={color} />;
    case "headWrap": return <Headwrap color={color} />;
    case "hijab": return <Hijab color={color} />;
    case "none":
    default:
      return null;
  }
}
