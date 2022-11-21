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

  const citySwitch = abc[fetchedData.citySwitch];

  const fetchData = abc[fetchedData.fetchData];

  useEffect(() => {
    axios.get("./data.json").then((res) => setFetchedData(res.data));
  }, []);

  return (
    <div>
      {fetchData === "dont" ? "hi" : "bye"}
      <br />
      <br />
      {citySwitch ? <Demo1 /> : <Demo2 />}
    </div>
  );
};

export default App;
