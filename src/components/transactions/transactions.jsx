import PropTypes from 'prop-types';
import css from './transactions.module.css';


export const TransactionHistory = ({items }) => {
    // console.log(items )
    return (
        <table className="transaction-history">
  <thead>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map(({ id, type, amount, currency }) => {
        return (
          <tr className={css.tr} key={id}>
            <td className={css.td}>{ type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td> 
          </tr>
        )})
    }
    
  </tbody>
</table>
    )
}
TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};