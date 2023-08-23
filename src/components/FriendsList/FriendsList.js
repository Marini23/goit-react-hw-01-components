import { FriendListItem } from "../FriendListItem/FriendListItem";
import {
    ListFriends,
} from "./FriendsList.styled";
export const FriendList = ({friends}) => {
    return (
    <ListFriends>
        {friends.map(friend => (
                <FriendListItem friend={friend} key={friend.id} />
        ))}
    </ListFriends>
    );
};