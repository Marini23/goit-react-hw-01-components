import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    return (
        <div>
                <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
        </div>
    );
};

FriendListItem.protoTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.node,
    name: PropTypes.string,
};