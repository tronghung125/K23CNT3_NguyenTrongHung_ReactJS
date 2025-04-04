import React from "react";
import { Link } from "react-router-dom";

const NthNavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/nth-event" style={styles.link}>Events</Link>
        </li>
        <li style={styles.li}>
          <Link to="/nth-event-add" style={styles.link}>Add Event</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#333",
    padding: "10px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  li: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default NthNavBar;
