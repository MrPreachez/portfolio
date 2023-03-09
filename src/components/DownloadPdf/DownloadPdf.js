import React from "react";
import "./DownloadPdf.scss";

function DownloadPdf() {
  const handlePdfDownload = () => {
    const url = "/damonCResume.pdf";
    window.open(url, "_blank");
  };

  return <button className="pdf__btn" onClick={handlePdfDownload}>Resume</button>;
}

export default DownloadPdf;
