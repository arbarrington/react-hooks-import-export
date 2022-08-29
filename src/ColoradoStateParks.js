import React from "react";
import howManyParks from "./parks/howManyParks";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); 
  MesaVerde();// => "42 parks!"
  console.log({parkTrees, parkWildlife});

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;