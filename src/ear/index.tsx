import React, { Fragment } from "react";

import EarSmall from "./small";
import EarBig from "./big";
import EarBigRound from "./bigRound";

export default function ear(props: { color: string, size: string }): any {
  const { color, size } = props;
  return (
    <Fragment>
      {size === "small" &&
        <EarSmall color={color} />
      }
      {size === "big" &&
        <EarBig color={color} />
      }
      {size === "bigRound" &&
        <EarBigRound color={color} />
      }
    </Fragment>

  );
}
