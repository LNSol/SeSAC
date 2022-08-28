import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserPostsPage = () => {
  const { nickname: inputNickname } = useParams();
  const [userNickname, setUserNickname] = useState('');
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:4000/posts/nickname/${inputNickname}`);
      setUserNickname(prev => data?.nickname);
      setPosts(prev => data?.Posts);
    };
    getData();

  }, [inputNickname]);

  return (
    <div>
      {!posts ? <p>검색 결과 없음</p> :
      posts.map(({ id, title, content })=> (
        <p key={id}>nickname: {userNickname}, title: {title}, content: {content}</p>
      ))}
    </div>
  );
};
export default UserPostsPage;