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
      <p>Description: {orgEvent.description}</p>
    </div>
  );
}
