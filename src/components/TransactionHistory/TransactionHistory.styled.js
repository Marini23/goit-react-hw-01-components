import styled from 'styled-components';

export const TableWrapper = styled.table`
width: 860px;
margin: 0 auto;
padding: 30px 210px;
background-color: #C8C8C8;
`;
export const TableTitle = styled.th`
font-size: 16px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
width: calc(100% / 3);
color: #fff;
background-color: #309ECF;
padding: 10px;
height: 20px;
`;
export const TableElement = styled.td`
padding: 10px;
height: 20px;
text-align: center;
width: calc(100% / 3);
color: #808080;

`;
export const TableRow = styled.tr`
 background-color: ${props => {
    if (props.$index % 2 !== 0) {
        return '#EAE7E6';
    }
    else { return `#F5F5F5`}
}}
`;

    