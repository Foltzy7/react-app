import React from "react";
import "./card-content.scss"

export default function CardContent(props: any) {
    return <div className="callout-flex-content">{props.children}</div>
}
