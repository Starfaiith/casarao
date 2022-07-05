import React from "react";
import {Outlet} from "react-router-dom" ;

function Acervo() {
  return (
    <div className="Acervo">
      <h1>Hello World</h1>

      <Outlet />
    </div>
  );
}

export default Acervo;