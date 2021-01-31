import React from "react";
import { OrgEvent } from "../models/orgEvent";
import Card from "./card";
import CardHeader from "./card-header";
import CardContent from "./card-content";

type Props = {
  orgEvent: OrgEvent;
};

export default function OrgEventDisplay(props: Props) {
  const { orgEvent } = props;
  return (
    <div>
      {orgEvent.startDate && <p>Event date: {orgEvent.startDate}</p>}
      <Card fillHeight>
        <CardHeader>{orgEvent.name}</CardHeader>
        <CardContent>
          <p>
            <strong>Location:</strong> {orgEvent.location}
          </p>
          <p>
            <strong>Description:</strong> {orgEvent.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
