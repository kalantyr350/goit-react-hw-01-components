import css from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './cartFriend';

export function FriendList({ friends }) {
  // console.log(friends)
    return (
      <ul className={css.friendsList}>
        {friends.map(({ avatar,  name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
            />
        ))}
    </ul>
    );
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