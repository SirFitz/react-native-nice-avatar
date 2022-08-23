import * as React from 'react';
import {  SexArray, EarSizeArray, EarRingStyleArray, FacialHairStyleArray, HairStyleArray, HairStyleManArray, HairStyleWomanArray,  HatStyleArray,  EyeStyleArray, GlassesStyleArray,
  NoseStyleArray, MouthStyleArray, ShirtStyleArray, EyeBrowStyleArray, ShapeArray} from './types/arrays';

type Style = {
  [key: string]: string | number | boolean
}

export type Sex = typeof SexArray[number]
export type EarSize =  typeof EarSizeArray[number]
export type EarRingStyle =  typeof EarRingStyleArray[number]
export type HairStyle =  typeof HairStyleArray[number]
export type FacialHairStyle =  typeof FacialHairStyleArray[number]
export type HairStyleMan = typeof HairStyleManArray[number]
export type HairStyleWoman = typeof HairStyleWomanArray[number]
export type HatStyle =  typeof HatStyleArray[number]
export type EyeStyle =  typeof EyeStyleArray[number]
export type GlassesStyle = typeof GlassesStyleArray[number]
export type NoseStyle =  typeof NoseStyleArray[number]
export type MouthStyle =  typeof MouthStyleArray[number]
export type ShirtStyle =  typeof ShirtStyleArray[number]
export type EyeBrowStyle = typeof EyeBrowStyleArray[number]

export interface AvatarConfig {
  sex?: Sex,
  faceColor?: string,
  earSize?: EarSize,
  hairColor?: string,
  earRingStyle?: string,
  facialHairStyle?: FacialHairStyle,
  hairStyle?: HairStyle,
  hairColorRandom?: boolean,
  hatColor?: string,
  hatStyle?: HatStyle,
  eyeStyle?: EyeStyle,
  glassesStyle?: GlassesStyle,
  noseStyle?: NoseStyle,
  mouthStyle?: MouthStyle,
  shirtStyle?: ShirtStyle,
  shirtColor?: string,
  bgColor?: string,
  isGradient?: boolean
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyle
}

export interface NiceAvatarProps extends AvatarConfig {
  id?: string,
  className?: string,
  style?: Style,
  shape?: typeof ShapeArray,
  size?: number;
}

export type GenConfigFunc = (config?: AvatarFullConfig) => Required<AvatarFullConfig>

export declare const genConfig: GenConfigFunc

export default class ReactNiceAvatar extends React.Component<NiceAvatarProps> {}
