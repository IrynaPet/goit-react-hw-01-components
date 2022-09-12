import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

// import Statisics from 'components/Statistics/data.json';
import Statisics from 'components/Statistics/Statistic';

export const App = () => {
  return (
    <div>
      <Profile
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
    </div>
  )
}

export default App