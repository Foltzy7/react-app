import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <a
        className="btn btn-link"
        href={"http://twistedbean.com/"}
        rel={"noopener noreferrer"}
        target={"_blank"}
      >
        <FontAwesomeIcon icon="coffee" spin={true} className="mr-sm-1" />
        Coffee
      </a>
    </div>
  );
}

export default Home;
