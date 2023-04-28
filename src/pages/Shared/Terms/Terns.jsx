import React from "react";
import { Link } from "react-router-dom";

const Terns = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        perspiciatis magni nulla excepturi quasi amet optio vel similique
        nostrum ratione, atque quos, quae eligendi commodi adipisci minima. Ab,
        deleniti nihil!
      </p>
      <p>
        Go Back <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terns;
