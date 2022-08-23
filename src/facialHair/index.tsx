import React from "react";
import { View } from 'react-native';

import Laugh from "react-native-nice-avatar/src/facialHair/scruff";
import Bare from "react-native-nice-avatar/src/facialHair/fullBeard";
import Frown from "react-native-nice-avatar/src/facialHair/mustache";
import Kmt from "react-native-nice-avatar/src/facialHair/goatee";
import Lol from "react-native-nice-avatar/src/facialHair/harveyStache";

export default function mouth (props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "scruff": return <Laugh />;
    case "harvey": return <Lol />;
    case "goatee": return <Kmt />;
    case "mustache": return <Frown />;
    case "beard": return <Bare />;
    case "none":
    default:
      return <></>;
  }
}
