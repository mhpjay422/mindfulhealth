import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../assets/components/ui/select";

export default function FilterDropdowns({
  invokeFiltering,
  allCities,
  allInsurances,
}) {
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterInsurance, setFilterInsurance] = useState("all");
  const [filterRemote, setFilterRemote] = useState("all");
  const handleFilterSubmit = () => {
    invokeFiltering([filterLocation, filterInsurance, filterRemote]);
  };
  return (
    <div className="flex justify-around items-center bg-gray-50 rounded-lg border border-gray-100 h-24 w-[50%] mb-6 mx-auto">
      <Select
        defaultValue="all"
        onValueChange={(value) => {
          setFilterLocation(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          {allCities.map((city, index) => (
            <SelectItem key={index} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        defaultValue="all"
        onValueChange={(value) => {
          setFilterInsurance(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Insurance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Insurances</SelectItem>
          {allInsurances.map((insurance, index) => (
            <SelectItem key={index} value={insurance}>
              {insurance}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        defaultValue="all"
        onValueChange={(value) => {
          setFilterRemote(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Remote" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Remote</SelectItem>
          <SelectItem value={true}>Yes</SelectItem>
          <SelectItem value={false}>No</SelectItem>
        </SelectContent>
      </Select>
      <button
        className="bg-blue-700 rounded-lg"
        onClick={() => handleFilterSubmit()}
      >
        <div className="px-4 py-2 text-sm text-white font-semibold">Filter</div>
      </button>
    </div>
  );
}
