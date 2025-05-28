import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import PersonDetail from "./PersonDetail";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortPeople from "./SortPeople";
import GroupByOccupation from "./GroupByOccupation";
import OldestYoungest from "./OldestYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <PersonDetail />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortPeople />
    <GroupByOccupation />
    <OldestYoungest />
    <AverageAgeByOccupation />
  </React.StrictMode>
);

reportWebVitals();
