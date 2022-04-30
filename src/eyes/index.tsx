import React from "react";
import { View } from 'react-native';

import Circle from "./circle";
import Oval from "./oval";
import Smile from "./smile";
import Shadow from "./shadow";

export default function eyes(props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "circle": return <Circle />;
    case "smile": return <Smile />;
    case "shadow": return <Shadow />;
    case "oval":
    default:
      return <Oval />;
  }
}
