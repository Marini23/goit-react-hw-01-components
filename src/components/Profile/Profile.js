import PropTypes from 'prop-types';

import {
    Wrapper,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
} from './Profile.styled';


const Profile = ({
    avatar,
    username,
    tag,
    location,
    stats
}) => {
    return (<Wrapper>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <Name>{username}</Name>
            <Tag>{`@` +tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <StatsList>
            <StatsItem>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </StatsItem>
        </StatsList>
    </Wrapper>);
};

export default Profile;

Profile.propTypes = {
    avatar: PropTypes.node,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
