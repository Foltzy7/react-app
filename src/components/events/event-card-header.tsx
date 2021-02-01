import React from "react";
import "./event-card.scss";

export default function EventCardHeader(props: any) {
    return (
        <div className="event-card-header">
            <h3 className="mt-0">{props.children}</h3>
        </div>
    )
}
