import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
<ul className={css.friend_list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
          )
      })}
</ul>)
}

FriendList.propTypes = {
  friends : PropTypes.arrayOf(PropTypes.shape({
  id : PropTypes.number.isRequired}))
}
export default FriendList



