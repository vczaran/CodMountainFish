import React, { useEffect, useState } from "react";
import Report from "../components/FishReport/Report";
import CreateReport from "../components/FishReport/CreateReport";

export default function FishReportContainer() {
  const [fishReports, setFishReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFishReport({ isAdmin = false }) {
      try {
        const response = await fetch("/api/fish_report");
        const data = await response.json();
        setFishReports(data.Fish_Reports);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch fish reports:", error);
        setLoading(false);
      }
    }

    fetchFishReport();
  }, []);

  const handleDelete = (reportId) => {
    console.log("deleting report with id:", reportId);
    // Send a DELETE request to the server
    fetch(`/api/fish_report/${reportId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the report from the state
          setFishReports((prevReports) =>
            prevReports.filter((report) => report._id !== reportId)
          );
        } else {
          console.error("Failed to delete the report");
        }
      })
      .catch((error) => {
        console.error("Failed to delete the report:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-5">
      <p>!!!This will be shown when owner is logged in!!!</p>
      <CreateReport reports={fishReports} setReports={setFishReports} />
      {/* This should eventually pull from the database */}
      {fishReports?.length &&
        fishReports.map((report) => (
          <Report
            key={report._id}
            image={report.image}
            description={report.description}
            date={report.date}
            id={report.id}
            handleDelete={() => handleDelete(report._id)}
          />
        ))}
    </div>
  );
}
