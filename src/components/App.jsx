
import Profile from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendsList/FriendsList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </div>
  );
};