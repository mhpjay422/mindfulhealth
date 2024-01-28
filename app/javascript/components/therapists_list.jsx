import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../assets/components/ui/table";
import Header from "./header";

function TherapistsList() {
  const [loading, setLoading] = useState(true);
  const [loadedTherapists, setLoadedTherapists] = useState([]);

  useEffect(() => {
    const apiEndpoint = "/api/therapists";
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((therapists) => {
        setLoadedTherapists(therapists);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Header />
        <div className="w-[50%] h-[60vh] relative overflow-auto mx-auto rounded">
          <Table>
            <TableHeader className="sticky inset-0 bg-gray-50/100">
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead className="w-[100px]">Address</TableHead>
                <TableHead className="w-[100px]">Location</TableHead>
                <TableHead className="w-[100px]">Insurance</TableHead>
                <TableHead className="w-[100px]">Remote</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loadedTherapists.map((therapist, index) => (
                <TableRow key={index}>
                  <TableCell className="w-[100px]">{therapist.name}</TableCell>
                  <TableCell className="w-[100px]">
                    {therapist.address}
                  </TableCell>
                  <TableCell className="w-[100px]">{therapist.city}</TableCell>
                  <TableCell className="w-[100px]">
                    {therapist.insurance}
                  </TableCell>
                  <TableCell className="w-[100px]">
                    {therapist.remote ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
}

const therapistsList = ReactDOM.createRoot(
  document.getElementById("therapist-list-container")
);
therapistsList.render(<TherapistsList />);
