import styled from 'styled-components';

export const ListItemFriend = styled.li`
width: 440px;
display: flex;
align-items: center;
padding: 10px 10px 10px 60px;
gap:20px;
margin: 0 auto;
background-color: #F5F5F5;`;

export const StatusItem = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.$status) {
    case true:
        return 'green';
    case false:
        return 'red';
    default:
        return 'yellow';
    }
  }};
`;
