import React from "react";

export const User = ({ attributes }, index) => {
  const number = index + 1;
  const firstName = attributes["first-name"];
  const lastName = attributes["last-name"];
  return (
    <div key={index}>
      {number}. {firstName} {lastName}
    </div>
  );
};
