import PropTypes from 'prop-types';
import {
    Wrapper,
    StatList,
    StatItem,
    Title,
} from './Statistics.styled';


export const Statistics = ({ stats, title }) => {
    
    return (<Wrapper>

        
        {title&&<Title>Upload stats</Title>}
        
        <StatList>
            {stats.map(item => (
                <StatItem key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </StatItem>
            ))}
        </StatList>
    </Wrapper>);
};

Statistics.protoTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
    title: PropTypes.string,
};

