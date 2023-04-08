import PropTypes from 'prop-types';
import clsx from "clsx";
import css from "./Friend.module.css";
import { FaCircle } from "react-icons/fa";

export const Friend = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span><FaCircle className={clsx(css.status, isOnline && css.isOnline)} size={25} /></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48px"/>
            <p className={css.name}>{name}</p>
</li>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
