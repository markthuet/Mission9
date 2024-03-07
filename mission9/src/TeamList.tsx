// TeamList.tsx
import React from "react";
import TeamCard from "./TeamCard";

// Define the properties expected by TeamList component
interface TeamListProps {
  teams: Array<{
    school: string;
    name: string;
    location: string;
  }>;
}

// TeamList functional component that takes in a 'teams' prop
const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="team-list">
      {/* Map through the 'teams' array and render a TeamCard for each team */}
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
