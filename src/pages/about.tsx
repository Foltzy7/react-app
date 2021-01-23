import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMinistries } from "../reducers/ministries";
import { useDispatch } from "react-redux";
import { ministryStatus, useStatuses } from "../selectors/status";
import { useMinistries } from "../selectors";
import PageContent from "../components/layout/pagecontent";

function About() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [date]);
  return (
    <PageContent>
      <div>
        <h1 className="m-auto">About Us</h1>
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
          <h2>About Church of the churchy church</h2>

        </div>
      </div>
    </PageContent>
  );
}

export default About;
