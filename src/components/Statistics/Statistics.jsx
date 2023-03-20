// import data from '../../file_json/data.json'
import css from "./Statistics.module.css"
import PropTypes from 'prop-types';


export const Statistics = ({title, stats }) => {
    // console.log(title)
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {
                    stats.map(({ id, label, percentage}) => {
                        return (
                            <li key={id} className="item" >
                                <span className="label">{label}</span>
                                <span className="percentage">{percentage}%</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })).isRequired,
}