import React, { Fragment } from "react";

import EarSmall from "./small";
import EarBig from "./big";
import { SvgXml } from 'react-native-svg';

export default function ear(props: { color: string, size: string }): any {
  const { color, size } = props;
  const xml = ` 

    <Fragment>
      {size === "small" &&
        <EarSmall color={color} />
      }
      {size === "big" &&
        <EarBig color={color} />
      }
    </Fragment>

   `;
  return ( <SvgXml xml={xml} width="100%" height="100%" /> );
}
