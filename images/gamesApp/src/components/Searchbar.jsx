import React from "react";

export const Searchbar = (onChange) => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a game"
          onChange={(e) => onChange.onChange(e.target.value)}
        />
      </div>
    </>
  );
};
