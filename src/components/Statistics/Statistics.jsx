// import data from '../../file_json/data.json' 
// import "./statistics.module.css"

export const Statistics = ({ stats }) => {
    // console.log(stats)
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {
                    stats.map(({ id, label, percentage }) => {
                        return (
                            <li key={id} className='item' id={id} >
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
