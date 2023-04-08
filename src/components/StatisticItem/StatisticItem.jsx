import PropTypes from 'prop-types'; 
import css from "components/StatisticItem/StatisticItem.module.css";


export const StatisticItem = ({ label, percentage }) => {
  const randomBackgr = { backgroundColor: getRandomColor() };
  
return (
    <li className={css.item} style={randomBackgr}>
      <span className={css.label}>{label} </span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

  function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }
