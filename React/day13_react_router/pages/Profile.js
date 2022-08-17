import { useParams } from 'react-router-dom';

const users = {
  jolgang: {
    name: '임은하',
    description: '임졸갱 프로필'
  },
  gukja: {
    name: '김시연',
    description: '김국자 프로필'
  }
}

const Profile = () => {
  const params = useParams();
  const profile = users[params.username];

  return (
    <div>
      <h1>프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  )
};
export default Profile;