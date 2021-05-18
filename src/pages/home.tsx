import React from "react";
import "../components/page/page.scss";
import "./home.scss";
import EventForm from "../components/events/event-form";
import EventsDislpay from "../components/events/events-display";
import MinistriesDisplay from "../components/ministries/ministries-display";
import Slide from "../components/animations/slide";

export default function Home() {
  return (
    <>
      <Slide inProp={true} durationOverride={1000} vertical={true}>
        <MinistriesDisplay />
      </Slide>
      <EventsDislpay />
      <div style={{ height: "150px" }} />
      <EventForm />
    </>
  );
}
