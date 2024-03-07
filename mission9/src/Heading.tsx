// Heading.tsx
import React from "react";

// Define the properties expected by Heading component
interface HeadingProps {
  title: string;
}

// Heading functional component that takes in a 'title' prop
const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Heading;
