import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";
import axios from "axios";

type useStateValue = {
  label: string;
  citySwitch: string;
  fetchData: string;
};

const App = () => {
  const [fetchedData, setFetchedData] = useState<useStateValue>(
    {} as useStateValue
  );
  let abc = useFlags();
  console.log(abc);
  console.log(abc[fetchedData.citySwitch]);
  const citySwitch = abc[fetchedData.citySwitch];

  const fetchData = abc[fetchedData.fetchData];
  // console.log(fetchData);

  useEffect(() => {
    axios.get("./data.json").then((res) => setFetchedData(res.data));
  }, []);

  // console.log("From JSON File " + typeof fetchedData.citySwitch);
  // console.log("From JSON File " + fetchedData.citySwitch);
  // console.log("Launch Darkly -- " + typeof citySwitch);
  // console.log("Launch Darkly " + citySwitch);

  return (
    <div>
      {citySwitch ? <Demo1 /> : <Demo2 />}
      {fetchData === "dont" ? "hi" : "bye"}
      <br />
      <br />
      {citySwitch ? <Demo1 /> : <Demo2 />}
    </div>
  );
};

export default App;
