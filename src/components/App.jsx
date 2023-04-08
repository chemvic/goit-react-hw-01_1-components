import { Profile } from "./Profile/Profile";
import user from '../info/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from "../info/data.json";
import friends from "../info/friends.json";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../info/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
      

    </div>

    
  );
};
