import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Friends.module.css';

export default function FriendListItem({ avatar, id, name, isOnline }) {
  console.log(id)
  return (
    <li key={id} className="item" >
      <span className={clsx(css.status, !isOnline && css.isOutLined)}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="avatar-img" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
};