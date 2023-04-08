import PropTypes from 'prop-types'; 
import data from "info/data.json";
import css from "./Statistics.module.css";
import { StatisticItem } from "../StatisticItem/StatisticItem";



  
export const Statistics = (props) => {
    return (<section className={css.section}>
    {props.title && <h2 className={css.title}>{props.title}</h2>}

  <ul className={css.stat_list}>
        {data.map(({ id, label, percentage }) => {
          return (<StatisticItem key={id}
            label={label}
            percentage={percentage} />
        
    )})}
  </ul>
</section>)  
 
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact(
      {
        label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
      }
    ),
  ),
  
}

  
