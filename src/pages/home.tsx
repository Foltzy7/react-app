import React from "react";
import "../components/page/page.scss";
import "./home.scss";
import EventForm from "../components/events/event-form";
import EventsDislpay from "../components/events/events-display";
import MinistriesDisplay from "../components/ministries/ministries-display";

export default function Home() {
  return (
    <>
      <MinistriesDisplay />
      <div style={{ height: "300px" }} />
      <EventsDislpay />
      <div style={{ height: "300px" }} />
      <EventForm />
    </>
  );
}
