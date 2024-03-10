import React, { useState, useEffect } from "react";
import "./FilterScreen.scss";
// import { JsonData } from "../Data/Data";
// import FilterComponent from "../components/FilterComponent";
// import { list1 } from "../components/FilterComponent";
import {
  FilterComponent,
  filterDataLogged,
} from "../components/FilterComponent";

function FilterScreen({ filters, setFilters,JsonData }) {


  // console.log("here data", filters);
  const regions = new Set();
  const country = new Set();
  const source = new Set();
  const sector = new Set();
  const topic = new Set();
  const pestle = new Set();

  JsonData.forEach((entry) => {
    regions.add(entry.region);
    country.add(entry.country);
    source.add(entry.source);
    sector.add(entry.sector);
    topic.add(entry.topic);
    pestle.add(entry.pestle);
  });
  const completeData = {
    regions: Array.from(regions),
    country: Array.from(country),
    source: Array.from(source),
    sector: Array.from(sector),
    topic: Array.from(topic),
    pestle: Array.from(pestle),
  };
  console.log(completeData);
  const [regionsArray, setRegionsArray] = useState(Array.from(regions));
  const [countryArray, setCountryArray] = useState(Array.from(country));
  const [sourceArray, setSourceArray] = useState(Array.from(source));
  const [sectorArray, setSectorArray] = useState(Array.from(sector));
  const [topicArray, setTopicArray] = useState(Array.from(topic));
  const [pestleArray, setPestleArray] = useState(Array.from(pestle));

  //region filter

  // const reference = {
  //   "Northern America": [
  //     "United States of America",
  //     "Iraq",
  //     "Canada",
  //     "South Africa",
  //     "Jordan",
  //   ],
  // };

  // useEffect(() => {
  //   regions.forEach((item) => {
  //     if (filters.includes(item)) {
  //       setCountryArray(
  //         countryArray.filter((coun) => reference[item].includes(coun))
  //       );
  //     }
  //   });
  // }, [filters]);



  return (
    <>
      <div className="filter_container">
        <div className="filter_upper">
          <h1>Filter</h1>
        </div>
        <div className="filter_body">
          <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Regions"
            regionsdata={regionsArray}
          />
          <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Countries"
            regionsdata={countryArray}
          />
          <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Pestles"
            regionsdata={pestleArray}
          />
          {/* <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Sectors"
            regionsdata={sectorArray}
          /> */}
          <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Topics"
            regionsdata={topicArray}
          />
          <FilterComponent
            filters={filters}
            setFilters={setFilters}
            regions="Sources"
            regionsdata={sourceArray}
          />
        </div>
      </div>
    </>
  );
}

export default FilterScreen;
