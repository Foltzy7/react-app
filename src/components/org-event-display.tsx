import React from "react";
import { OrgEvent } from "../models/orgEvent";

type Props = {
  orgEvent: OrgEvent;
};

export default function OrgEventDisplay(props: Props) {
  const { orgEvent } = props;
  return (
    <div>
      <h4>{orgEvent.name}</h4>
      {orgEvent.startDate && <p>Event date: {orgEvent.startDate}</p>}
      <p>
        <strong>Location:</strong> {orgEvent.location}
      </p>
      <p>
        <strong>Description:</strong> {orgEvent.description}
      </p>
    </div>
  );
}
