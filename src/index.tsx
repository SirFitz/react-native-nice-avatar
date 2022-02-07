import React, { Component } from "react";
import { View } from 'react-native';
import PropTypes from "prop-types";

import type { NiceAvatarProps } from "./types"

import { genConfig, defaultOptions } from "./utils";

import Face from "./face";
import Hair from "./hair";
import Hat from "./hat";
import Ear from "./ear";
import Eyebrow from "./eyebrow";
import Eye from "./eyes";
import Glasses from "./glasses";
import Nose from "./nose";
import Mouth from "./mouth";
import Shirt from "./shirt";

export default class ReactNiceAvatar extends Component<NiceAvatarProps> {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    shape: PropTypes.oneOf(["circle", "rounded", "square"]),
    sex: PropTypes.oneOf(defaultOptions.sex),
    faceColor: PropTypes.string,
    earSize: PropTypes.oneOf(defaultOptions.earSize),
    hairColor: PropTypes.string,
    hairStyle: PropTypes.oneOf(
      (defaultOptions.hairStyleMan as string[]).concat(defaultOptions.hairStyleWoman as string[])
    ),
    hatColor: PropTypes.string,
    hatStyle: PropTypes.oneOf(defaultOptions.hatStyle),
    hairColorRandom: PropTypes.bool,
    eyeStyle: PropTypes.oneOf(defaultOptions.eyeStyle),
    glassesStyle: PropTypes.oneOf(defaultOptions.glassesStyle),
    noseStyle: PropTypes.oneOf(defaultOptions.noseStyle),
    mouthStyle: PropTypes.oneOf(defaultOptions.mouthStyle),
    shirtStyle: PropTypes.oneOf(defaultOptions.shirtStyle),
    shirtColor: PropTypes.string,
    bgColor: PropTypes.string,
    isGradient: PropTypes.bool
  }

  render() {
    const { id, className, style, shape = "circle", hairColorRandom = false } = this.props;
    const config = genConfig(this.props);

    // Background shape
    let borderRadius;
    switch (shape) {
      case "circle": {
        borderRadius = "100.1%";
        break;
      }
      case "rounded": {
        borderRadius = "6px";
        break;
      }
      case "square": {
        borderRadius = 0;
        break;
      }
    }

    return (
      <View
        id={id}
        className={className}
        style={{
          background: config.bgColor,
          overflow: "hidden",
          borderRadius,
          ...style
        }}>
        <View
          style={{
            position: "relative",
            width: "100.2%",
            height: "100.3%"
          }}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100.4%",
              height: "90%"
            }}>
            <Face color={config.faceColor} />
            <Hat
              color={config.hatColor}
              style={config.hatStyle} />
            {config.hatStyle === "none" &&
              <Hair
                color={config.hairColor}
                style={config.hairStyle}
                colorRandom={hairColorRandom} />
            }

            {/* Face detail */}
            <View
              style={{
                position: "absolute",
                right: "-3%",
                top: "30%",
                width: "100.5%",
                height: "100.6%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <Eyebrow style={config.eyeBrowStyle} />
              <Eye style={config.eyeStyle} />
              <Glasses style={config.glassesStyle} />
              <Ear color={config.faceColor} size={config.earSize} />
              <Nose style={config.noseStyle} />
              <Mouth style={config.mouthStyle} />
            </View>

            <Shirt color={config.shirtColor} style={config.shirtStyle} />
          </View>
        </View>
      </View>
    );
  }
}

export { genConfig } from "./utils";
