import styled from 'styled-components';

export const Wrapper = styled.div`
width: 800px;
margin: 0px auto;
padding: 30px;
text-align: center;
background-color: #C8C8C8;
`;

export const Description = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin: 0px auto;
padding: 20px;
background-color: #fff`;

export const Avatar = styled.img`
width: 190px;
height: 200px;`;

export const Name = styled.p`
font-weight: 800;
font-size: 28px;
line-height: 1.17;
margin: 0;`;

export const Tag = styled.p`
font-size: 18px;
line-height: 1.17;
color: #696969;`;

export const Location = styled.p`
font-size: 20px;
line-height: 1.17;
color: #696969;`;

export const StatsList = styled.ul`
display: flex;
width: 440px;
padding: 0;
margin: 0 auto;
background-color: #F5F5F5;
`;
export const StatsItem = styled.li`
width: calc(100%  / 3);
height: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #663366;
`;