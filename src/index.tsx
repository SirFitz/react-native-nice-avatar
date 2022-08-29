import React, { Component } from "react";
import { View } from 'react-native';
import PropTypes from "prop-types";
import LinearGradient from 'react-native-linear-gradient';
import type { NiceAvatarProps } from "./types"
import { ShapeArray } from './types/arrays'
import { genConfig, defaultOptions } from "./utils";

import Face from "./face";
import FacialHair from "./facialHair";
import Hair from "./hair";
import Hat from "./hat";
import Ear from "./ear";
import EarRing from "./earRing";
import Eyebrow from "./eyebrow";
import Eye from "./eyes";
import Glasses from "./glasses";
import Nose from "./nose";
import Mouth from "./mouth";
import Shirt from "./shirt";
import Background from "./background";

export default class ReactNiceAvatar extends Component<NiceAvatarProps> {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    shape: PropTypes.oneOf(ShapeArray),
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
    const { id, style, size = 200, shape = "circle", hairColorRandom = false } = this.props;
    const config = genConfig(this.props);

    // Background shape
    let borderRadius;
    switch (shape) {
      case "circle": {
        borderRadius = size / 2;
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
      <Background
        bgColor={config.bgColor}
        style={{
          overflow: "hidden",
          borderRadius,
          height: size,
          width: size,
          ...style,
        }}>
        <View
          style={{
            position: "relative",
            width: "100%",
            height: "100%"
          }}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "90%"
            }}>
            <Face color={config.faceColor} />
            <View style={{
                width: "100%",
                height: "100%",
                zIndex: 2
             }}>
              <Hat
                color={config.hatColor}
                style={config.hatStyle} />
            </View>
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
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
              }}>
              <Eyebrow style={config.eyeBrowStyle} />
              <Eye style={config.eyeStyle} />
              <Glasses style={config.glassesStyle} />
              <Ear color={config.faceColor} size={config.earSize} />
              <EarRing style={config.earRingStyle} />
              <Nose style={config.noseStyle} />
              <FacialHair style={config.facialHairStyle} />
              <Mouth style={config.mouthStyle} />
            </View>

            <Shirt color={config.shirtColor} style={config.shirtStyle} />
          </View>
        </View>
      </Background>
    );
  }
}

export { genConfig } from "./utils";
