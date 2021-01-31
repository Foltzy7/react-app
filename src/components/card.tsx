import classnames from "classnames";
import React from "react";
import "./card.scss";

export default function Card(props: any) {
  const classes = classnames(
    "callout",
    "callout-flex",
    "text-center",
    "active",
    { "fill-height": props.fillHeight }
  );

  return (
    <div className={classes} data-testid="card">
      {props.children}
    </div>
  );
}
