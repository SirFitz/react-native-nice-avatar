import React from "react";
import { View } from 'react-native';

import Scruff from "./scruff";
import Beard from "./fullBeard";
import Mustache from "./mustache";
import Goatee from "./goatee";
import Harvey from "./harveyStache";

export default function mouth (props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "scruff": return <Scruff />;
    case "harveyStache": return <Harvey />;
    case "goatee": return <Goatee />;
    case "mustache": return <Mustache />;
    case "fullBeard": return <Beard />;
    case "none":
    default:
      return <></>;
  }
}
