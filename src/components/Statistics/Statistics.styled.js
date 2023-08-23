import styled from 'styled-components';

export const Wrapper = styled.section`
padding: 30px;
`;

export const StatList = styled.ul`
width: 440px;
display: flex;
padding:  0;
margin: 0 auto;
background-color: #F5F5F5;`;

export const StatItem = styled.li`
width: calc(100% / 5);
height: 60px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #663366;
`;

export const Title = styled.h2`
width: 440px;
height: 80px;
font-weight: 800;
font-size: 36px;
line-height: 1.17;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
border: 1px solid #663366;
background-color: #F5F5F5;`;