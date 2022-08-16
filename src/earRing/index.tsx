import React, { Fragment } from "react";

import Hoop from "./hoop";
import Flower from "./flower";
import Line from "./line";
import Stud from "./stud";
import TripleStud from "./tripleStud";

export default function earRing(props: { style: string }): any {
  const { style } = props;
  return (
    <Fragment>
      {style === "none" && <></>}
      {style === "hoop" &&
        <Hoop />
      }
      {style === "flower" &&
        <Flower />
      }
      {style === "line" &&
        <Line />
      }
      {style === "stud" &&
        <Stud />
      }
      {style === "tripleStud" &&
        <TripleStud />
      }
    </Fragment>

  );
}
