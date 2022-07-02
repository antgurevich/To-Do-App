import React from "react";
import { Link, Route, useMatch } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = () => {
    const match = useMatch();
    return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${match.url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${match.url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};

export default About;
