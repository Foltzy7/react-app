import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMinistries } from "../reducers/ministries";
import { useDispatch } from "react-redux";
import { ministryStatus, useStatuses } from "../selectors/status";
import { useMinistries } from "../selectors";
import Page from "../components/page/page";
import "../components/page/page.scss";
import Header from "../components/layout/header";
import PageContent from "../components/layout/pagecontent";

function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [date]);
  return (
    <>
      <PageContent>
        <div id="ministries-content">
          <div className="row">
            <h1 className="m-auto">Welcome Home!</h1>
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
              <div key={index}>
                <h4>{ministry.name}</h4>
                <p>Date: {ministry.startDate ? ministry.startDate : "N/A"}</p>
                <p>Description: {ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContent>
      <div style={{ height: "300px" }} />
      <PageContent>
        <div id="event-content">
          <h2>Events</h2>
          <h4>Event Name 1</h4>
          <p>Event date: 01/01/2020</p>
          <p>Event Description 1</p>
          <h4>Event Name 2</h4>
          <p>Event date: 01/01/2020</p>
          <p>Event Description 2</p>
          <h4>Event Name 3</h4>
          <p>Event date: 01/01/2020</p>
          <p>Event Description 3</p>
          <h4>Event Name 4</h4>
          <p>Event date: 01/01/2020</p>
          <p>Event Description 4</p>
        </div>
      </PageContent>
    </>
  );
}

export default Home;
