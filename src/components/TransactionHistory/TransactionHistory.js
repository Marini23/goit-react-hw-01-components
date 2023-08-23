import PropTypes from 'prop-types';
import {
    TableWrapper,
    TableTitle,
    TableElement,
    TableRow,
} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => { 
    return (
        <TableWrapper>
    <thead>
    <tr>
        <TableTitle>Type</TableTitle>
        <TableTitle>Amount</TableTitle>
        <TableTitle>Currency</TableTitle>
    </tr>
            </thead>
            <tbody>
            {items.map(item => {
                return (
  
                
                    <TableRow key={item.id} >
                        <TableElement>{item.type}</TableElement>
                        <TableElement>{item.amount}</TableElement>
                        <TableElement>{item.currency}</TableElement>
                    </TableRow> 
                );
    })}
  
 </tbody>
</TableWrapper>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}