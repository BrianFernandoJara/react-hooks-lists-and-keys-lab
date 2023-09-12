import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const createLinks = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>
    {createLinks}
  </nav>;
}

export default NavBar;
