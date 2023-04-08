import PropTypes from 'prop-types';
import css from "./FriendList.module.css";
import { Friend } from "components/Friend/Friend";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Friend
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}                
                />
           ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact(
      {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired
    
      }
    ),
  ),
}