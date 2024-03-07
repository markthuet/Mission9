// App.tsx
import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";
import Heading from "./Heading";
import TeamList from "./TeamList";
import TeamCard from "./TeamCard";

// Map the original data to the expected structure for 'teams'
const teams = data.teams.map((team) => ({
  school: team.school,
  name: team.name,
  location: `${team.city}, ${team.state}`,
}));

// App functional component
function App() {
  return (
    <div className="App">
      {/* Render Heading component with a title */}
      <Heading title="NCAA College Teams" />
      {/* Render TeamList component with the 'teams' data */}
      <TeamList teams={teams} />
      {/* Render TeamCard component with the first team from 'teams' */}
      <TeamCard team={teams[0]} />
    </div>
  );
}

export default App;
