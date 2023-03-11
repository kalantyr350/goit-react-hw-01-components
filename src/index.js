// import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './file_json/user.json';
import data from './file_json/data.json';
import friends from './file_json/friends.json';
import transactions from './file_json/transactions.json';
import { Profile } from 'components/profile/User';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { FriendList } from 'components/friends/Friends';
import { TransactionHistory } from 'components/transactions/transactions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
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

