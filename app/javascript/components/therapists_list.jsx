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
import FilterDropdowns from "./filter-dropdowns";

const allCities = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"];
const allInsurances = [
  "Aetna",
  "Ambetta",
  "Anthem",
  "BCBS",
  "Centene",
  "Cigna",
  "HCSC",
  "Kaiser",
  "Oscar",
  "United Health",
];
const allRemoteOptions = ["Yes", "No"];

function TherapistsList() {
  const [loading, setLoading] = useState(true);
  const [loadedTherapists, setLoadedTherapists] = useState([]);
  const [filteredTherapists, setfilteredTherapists] = useState([]);

  useEffect(() => {
    const apiEndpoint = "/api/therapists";
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((therapists) => {
        setLoadedTherapists(therapists);
        setfilteredTherapists(therapists);
        setLoading(false);
      });
  }, []);

  const invokeFiltering = (filters) => {
    const [locationFilter, insuranceFilter, remoteFilter] = filters;

    const isMatch = (therapist) => {
      return (
        (locationFilter === "all" || therapist.city === locationFilter) &&
        (insuranceFilter === "all" ||
          therapist.insurance === insuranceFilter) &&
        (remoteFilter === "all" || therapist.remote === remoteFilter)
      );
    };

    const filteredTherapists = loadedTherapists.filter(isMatch);
    setfilteredTherapists(filteredTherapists);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Header />
        <FilterDropdowns
          invokeFiltering={invokeFiltering}
          allCities={allCities}
          allInsurances={allInsurances}
        />
        <div className="w-[50%] h-[60vh] relative overflow-auto mx-auto rounded-lg">
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
              {filteredTherapists.map((therapist, index) => (
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
