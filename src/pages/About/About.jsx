import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        adipisci doloribus provident architecto optio officia molestiae
        perspiciatis autem mollitia odit quae possimus, debitis nobis
        necessitatibus ducimus! Porro amet aspernatur in voluptate tempore
        omnis. Adipisci repellendus est ea, molestias odit sit similique a,
        aliquid eos consequatur eligendi sint hic amet distinctio!
      </p>
      <ul>
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default About;
