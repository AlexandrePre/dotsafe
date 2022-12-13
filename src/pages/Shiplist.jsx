import axios from "axios";
import { useState, useEffect } from "react";
import Getchrono from "@components/Getchrono";
import Ship from "../components/Ship";

export default function ShipList() {
  const [shipList, setShipList] = useState([]);
  const [selectedBateau, setSelectedBateau] = useState();
  const [date, setDate] = useState();

  const handleChangeShip = (event) => {
    setSelectedBateau(event.target.value);
    setDate("");
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
    setSelectedBateau("");
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

      <form className="ship-center">
        <label htmlFor="ship-select">
          Filtrer par raison de fermeture{" "}
          <select id="ship-select" onChange={handleChangeShip}>
            <option value="">---</option>

            {shipList.records &&
              shipList.records.map((bat) => (
                <option key={bat.recordid} value={bat.recordid}>
                  {bat.fields.bateau}
                </option>
              ))}
          </select>
        </label>
      </form>
      <form className="date-center">
        <label htmlFor="date-select">
          Filter par date{" "}
          <select id="date-select" onChange={handleChangeDate}>
            <option value="">---</option>

            {shipList.records &&
              shipList.records.map((dat) => (
                <option key={dat.recordid} value={dat.recordid}>
                  {dat.fields.date_passage}
                </option>
              ))}
          </select>
        </label>
      </form>
      <div className="ship-item">
        {shipList.records &&
          shipList.records
            .filter(
              (close) =>
                selectedBateau === "" || close.recordid === selectedBateau
            )
            .filter((closeDate) => date === "" || closeDate.recordid === date)
            .map((ship) => (
              <Ship
                datePassage={ship.fields.date_passage}
                reOuvertureCirculation={
                  ship.fields.re_ouverture_a_la_circulation
                }
                fermetureCirculation={ship.fields.fermeture_a_la_circulation}
                bateau={ship.fields.bateau}
              />
            ))}
      </div>
    </div>
  );
}
