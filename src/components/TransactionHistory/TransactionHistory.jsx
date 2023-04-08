import css from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';
import { Transaction } from "../Transaction/Transaction";

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {transactions.map(({ id, type, amount, currency }, index) => (<Transaction 
        
        key={id}
        type={type}
        amount={amount}
        currency={currency}
        index={index}
    />
    ))}
  </tbody>
</table>       
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact(
            {
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired
            }
        ),
    ),
}