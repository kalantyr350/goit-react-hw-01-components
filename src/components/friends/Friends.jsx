import clsx from 'clsx';
import css from './Friends.module.css';
import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
    return (
        <section className="friends">
            <ul className="friends-list">
                {friends.map(({ avatar, id, isOnline, name }) => {
                        console.log( id)

                    return (
                        <li key={id} className="friends-item">
                            <span className={clsx(css.status, !isOnline && css.isOutLined)}></span>
                            <img className="avatar-friend" src={avatar} alt="User avatar" width="48"/>
                            <p className="name">{name}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
     })
)};