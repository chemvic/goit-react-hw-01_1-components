import PropTypes from 'prop-types';
import css from "./Transaction.module.css";
import clsx from 'clsx';

export const Transaction = ({ type, amount, currency, index }) => {

    return (<tr className={clsx(
    index % 2 === 0 ? css.tableRowEven:css.tableRowOdd
    )}>
                <td className={css.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>

    )
}


Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}















