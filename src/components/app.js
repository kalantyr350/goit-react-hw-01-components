// import ReactDOM from 'react-dom/client';
import user from '../file_json/user.json';
import data from '../file_json/data.json';
import friends from '../file_json/friends.json';
import transactions from '../file_json/transactions.json';
import { Profile } from './profile/User';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './friends/Friends';
import { TransactionHistory } from './transactions/transactions';


export const RenderDOM = () => {
    return (
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        {/* <Statistics title="Upload stats" stats={data} /> */}
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    );
};

