import React from "react";
import { Document, Page } from "react-pdf";
import resumePDF from "../assets/resume.pdf";
function Resume() {
  return (
    <div className="components resume">
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="resume-container">
        <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
