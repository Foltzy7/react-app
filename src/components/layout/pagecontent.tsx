import React from "react";
import "../page/page.scss";

export default function PageContent({ children = <></> }) {

  return (
    <div className="page-content">
      {children}
    </div>
  );
}
