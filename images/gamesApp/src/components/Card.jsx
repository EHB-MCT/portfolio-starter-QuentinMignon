import React, { useEffect } from "react";

export const Card = (props) => {

  return (
    <>
      <div className="card">
        <p>
          Game: <span>{props.data.game}</span>
        </p>
        <p>
          Category: <span>{props.data.category}</span>
        </p>
      </div>
    </>
  );
};
