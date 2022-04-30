import React from "react";
import { View } from 'react-native';

import Up from "./up";
import UpWoman from "./upWoman";
import Down from "./down";

export default function eyebrow(props: { style: string }): any {
  const { style } = props;
  switch (style) {
    case "upWoman": return <UpWoman />;
    case "down": return <Down />;
    case "up":
    default:
      return <Up />;
  }
}
