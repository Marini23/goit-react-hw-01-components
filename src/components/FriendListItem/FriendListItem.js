import PropTypes from 'prop-types';

import {
    ListItemFriend,
    StatusItem,
} from './FriendListItem.styled';

export const FriendListItem = ({friend: {  avatar, name, isOnline,}}) => {
    return (
        <ListItemFriend >
            <StatusItem $status={isOnline}>{isOnline}</StatusItem>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </ListItemFriend>
    );
};

FriendListItem.protoTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.node,
    name: PropTypes.string,
};