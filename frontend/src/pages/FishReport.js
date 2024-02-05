import React, { useEffect, useState } from "react";
import Report from "../components/FishReport/Report";
import CreateReport from "../components/FishReport/CreateReport";

export default function FishReport({ isAdmin }) {
  const [fishReports, setFishReports] = useState([]);
  const [loading, setLoading] = useState(true);
  // This is to test admin. Will check logged in user
  useEffect(() => {
    async function fetchFishReport() {
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
    if (!window.confirm("Are you sure you want to delete this report?")) return;

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

  function handleUpdate({ id, description, image, date }) {
    console.log("updating report with id:", id);
    // Send a PUT request to the server
    fetch(`/api/fish_report/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, image, date }),
    })
      .then((response) => {
        if (response.ok) {
          // Update the report in the state
          setFishReports((prevReports) =>
            prevReports.map((report) => {
              if (report._id === id) {
                return { ...report, description, image, date };
              }
              return report;
            })
          );
        } else {
          console.error("Failed to update the report");
        }
      })
      .catch((error) => {
        console.error("Failed to update the report:", error);
      });
  }
  console.log("isAdmin", isAdmin);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-5">
      {isAdmin && (
        <CreateReport reports={fishReports} setReports={setFishReports} />
      )}
      {fishReports?.length &&
        fishReports.map((report) => (
          <Report
            key={report._id}
            image={report.image}
            description={report.description}
            date={report.date}
            id={report._id}
            handleDelete={() => handleDelete(report._id)}
            handleUpdate={handleUpdate}
            isAdmin={isAdmin}
          />
        ))}
    </div>
  );
}
