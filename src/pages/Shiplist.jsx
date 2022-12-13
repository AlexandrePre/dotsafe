import axios from "axios";
import { useState, useEffect } from "react";
import Getchrono from "@components/Getchrono";
import Ship from "../components/Ship";

export default function ShipList() {
  const [shipList, setShipList] = useState([]);
  // const [accessoryList, setAccessoryList] = useState([]);
  const [selectedBateau, setSelectedBateau] = useState();

  const handleChange = (event) => {
    setSelectedBateau(event.target.value);
  };

  const getAllShip = () => {
    const url =
      "https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=previsions_pont_chaban&q=&rows=75&sort=date_passage";
    axios.get(url).then((response) => setShipList(response.data));
  };

  useEffect(() => {
    getAllShip();
  }, []);


  return (
    <div>
      <div className="titre">
        <h1>Fermetures du Pont Chabans</h1>
      </div>

      <Getchrono />
      {/* <form className="center">
        <label htmlFor="ship-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>

            {shipList.records.map((bat) => (
              <option key={bat.id} value={bat.id}>
                {bat.fields.bateau}
              </option>
            ))}
          </select>
        </label>
      </form> */}
      {/* <ul className="cupcake-list" id="cupcake-list">  */}
      {/* Step 2: repeat this block for each cupcake */}
      {/* {shipList.records.filter(
        (bats) => selectedBateau === "" || bats.bat_id === selectedBateau
      )} */}
      <div className="ship-item">
        {shipList.records &&
          shipList.records.map((ship) => (
            <Ship
              datePassage={ship.fields.date_passage}
              reOuvertureCirculation={ship.fields.re_ouverture_a_la_circulation}
              fermetureCirculation={ship.fields.fermeture_a_la_circulation}
              bateau={ship.fields.bateau}
            />
          ))}
      </div>
    </div>
  );
}
