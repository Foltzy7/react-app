import PageContent from "../layout/pagecontent";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ministryStatus, useStatuses } from "../../selectors/status";
import { useMinistries } from "../../selectors";
import { fetchMinistries } from "../../reducers/ministries";
import "./ministries-display.scss";
import building from "../../images/building.jpg";
import Slide from "../animations/slide";

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
      <div id="ministries-content" className={"ministries-content"}>
        <div className="row">
          <h1 className="m-auto">Welcome to YourChurchHere!</h1>
        </div>
        {isLoading && (
          <div>
            {ministries.map((ministry, index) => (
              <div key={`ministry-${index}`}>
                <h2>{ministry.name}</h2>
                {ministry.startDate && <p>Date: {ministry.startDate}</p>}
                <p>Description: {ministry.description}</p>
              </div>
            ))}
            <Slide inProp={true} durationOverride={1000}>
              <img
                src={building}
                alt={"church building"}
                style={{ width: "100%" }}
              />
            </Slide>
          </div>
        )}
      </div>
    </PageContent>
  );
}
