import React from "react";

import resumePDF from "../assets/resume.pdf";
function Resume() {
  return (
    <div className="components resume">
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="resume-container">
        {resumePDF && (
          <iframe
            src={`${resumePDF}#zoom=100`}
            marginheight="0"
            marginwidth="0"
            width="100%"
            height="1150px"
            allowtransparency="true"
            style={{ background: "#2b3844" }}
          />
        )}
      </div>
    </div>
  );
}

export default Resume;
