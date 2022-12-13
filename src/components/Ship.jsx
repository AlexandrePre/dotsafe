import PropTypes from "prop-types";

export default function Ship({
  datePassage,
  reOuvertureCirculation,
  fermetureCirculation,
  bateau,
}) {
  return (
    <div className="ship-container">
      <h2>{datePassage}</h2>
      <h3>{fermetureCirculation}</h3>
      <h3>{reOuvertureCirculation}</h3>
      <h3>{bateau}</h3>
    </div>
  );
}

Ship.propTypes = {
  datePassage: PropTypes.string.isRequired,
  fermetureCirculation: PropTypes.string.isRequired,
  reOuvertureCirculation: PropTypes.string.isRequired,
  bateau: PropTypes.string.isRequired,
};
