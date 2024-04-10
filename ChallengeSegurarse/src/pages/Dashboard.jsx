import React from "react";
import NavMenu from "../components/NavMenu";
import Admin from "../components/Admin";

function Dashboard() {
  return(
    <>
        <header>
        <NavMenu />
        </header>
        <div>
            <Admin />
        </div>
        <footer>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
        </footer>

    </>
  ) 
}

export default Dashboard;
