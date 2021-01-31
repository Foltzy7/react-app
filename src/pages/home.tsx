import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMinistries } from "../reducers/ministries";
import { useDispatch } from "react-redux";
import { ministryStatus, useStatuses } from "../selectors/status";
import { useEvents, useMinistries } from "../selectors";
import "../components/page/page.scss";
import PageContent from "../components/layout/pagecontent";
import { fetchOrgEvents } from "../reducers/org-events";
import OrgEventDisplay from "../components/org-event-display";
import "./home.scss";
import EventForm from "../components/event-form";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const { orgEvents } = useEvents();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [dispatch, date]);

  useEffect(() => {
    dispatch(fetchOrgEvents({ date }));
  }, [dispatch, date]);
  return (
    <>
      <PageContent>
        <div id="ministries-content">
          <div className="row">
            <h1 className="m-auto">Welcome to YourChurchHere!</h1>
          </div>
          <a
            className="btn btn-link"
            href={"https://www.scooterscoffee.com/"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <FontAwesomeIcon icon="coffee" spin={true} className="mr-sm-1" />
            Coffee
          </a>
          <div>
            <h2>Ministries</h2>
            {ministries.map((ministry, index) => (
              <div key={`ministry-${index}`}>
                <h4>{ministry.name}</h4>
                <p>Date: {ministry.startDate ? ministry.startDate : "N/A"}</p>
                <p>Description: {ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContent>
      <div style={{ height: "300px" }} />
      <PageContent className={"bg-coral"}>
        <div id="event-content">
          <h2>Events</h2>
          {orgEvents.map((orgEvent, index) => (
            <OrgEventDisplay orgEvent={orgEvent} key={`event-${index}`} />
          ))}
        </div>
      </PageContent>
      <div style={{ height: "300px" }} />
      <PageContent className={"bg-coral"}>
        <EventForm />
      </PageContent>
    </>
  );
}
