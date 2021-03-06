import React, { Fragment } from "react";
import { View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function background (props: { 
  bgColor: string,
  style: any,
  children: any,
 }): any {

  const colors = props.bgColor.startsWith('linear-gradient') ? (
    props.bgColor.replace('linear-gradient:', '').split(',').map((c) => c.trim())) : [];
  const padding = props.style?.padding || 0;
  delete props.style?.padding;
  return (
      colors.length > 1 ? (

        <View style={{...props.style}}>
          <LinearGradient 
            style={{ padding }}
            colors={colors}>
            {props.children}
          </LinearGradient>
        </View>
      ) : 
        <View 
          style={{...props.style, backgroundColor: props.bgColor}}>
          {props.children}
        </ View>

  );
}
