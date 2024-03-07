// TeamCard.tsx
import React from "react";

// Define the properties expected by TeamCard component
interface TeamCardProps {
  team: {
    school: string;
    name: string;
    location: string;
  };
}

// TeamCard functional component that takes in a 'team' prop
const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card">
      {/* Display the school name as the heading */}
      <h2>{team.school}</h2>
      {/* Display the mascot name */}
      <p>Mascot: {team.name}</p>
      {/* Display the location (city, state) */}
      <p>Location: {team.location}</p>
    </div>
  );
};

export default TeamCard;
