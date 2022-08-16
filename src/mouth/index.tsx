import React from "react";
import { View } from 'react-native';

import Laugh from "./laugh";
import Smile from "./smile";
import Peace from "./peace";
import Mask from "./mask";
import Bare from "./bare";
import Frown from "./frown";
import Kmt from "./kmt";
import Lol from "./lol";
import WideFrown from "./wideFrown";

export default function mouth (props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "laugh": return <Laugh />;
    case "smile": return <Smile />;
    case "mask": return <Mask />;
    case "tongue": return <Lol />;
    case "kmt": return <Kmt />;
    case "frown": return <Frown />;
    case "bare": return <Bare />;
    case "wideFrown": return <WideFrown />;
    case "peace":
    default:
      return <Peace />;
  }
}
