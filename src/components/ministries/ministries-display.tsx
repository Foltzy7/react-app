import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContent from "../layout/pagecontent";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ministryStatus, useStatuses } from "../../selectors/status";
import { useMinistries } from "../../selectors";
import { fetchMinistries } from "../../reducers/ministries";

export default function MinistriesDisplay() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [dispatch, date]);
  return (
    <PageContent className={"content-primary"}>
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
  );
}
