import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMinistries } from "../reducers/ministries";
import { useDispatch } from "react-redux";
import PageContent from "../components/layout/pagecontent";
import Coffee from "../components/coffee/coffee";

function About() {
  const dispatch = useDispatch();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [dispatch, date]);
  return (
    <PageContent>
      <div>
        <h1 className="m-auto">About Us</h1>
        <Coffee/>
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
