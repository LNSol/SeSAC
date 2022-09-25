// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import axios from 'axios';
// import { FiAlertCircle } from 'react-icons/fi';
// import './CreateMyPings.css';
// import PostList from '../List/PostList';

// const options = [
//   {value: 1, text: 'default'},
//   {value: 2, text: '핫 플레이스'},
//   {value: 3, text: '포토존'},
//   {value: 4, text: '힐링'},
//   {value: 5, text: '액티비티'},
//   {value: 6, text: '기타'}
// ];

// type Post = {
//   id: number
//   createdAt: string
//   updated_at: string
//   title: string
//   content: string
//   longitude: string
//   latitude: string
//   user: number
//   mypings: number | null
//   is_private: boolean
// }

// interface IProps {
//   close: () => void,
//   children: string,
// }

// const CreateMyPings = ({ close, children }: IProps) => {
//   const [ posts, setPosts ] = useState<Post[]>([]);
//   const [ title, setTitle ] = useState<string>('');
//   const [ category, setCategory ] = useState<number>(1);
//   const [ is_private, setIsPrivate ] = useState<boolean>(false);
//   const [ selected, setSelected ] = useState<Post[]>([]);
//   const inputTitle = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const getMe = async () => {
//       const { data } = await axios.get('http://localhost:4000/me');
//       console.log(data);
//     };
//     getMe();

//     const getData = async () => {
//       const { data } = await axios.get('http://localhost:4000/users/7/posts');
//       setPosts(prev => { return data });
//     };
//     getData();
//   }, []);

//   const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(prev => {
//       const titleByteSize = new Blob([e.target.value]).size;
//       return titleByteSize > 30 ? prev : e.target.value;
//     });
//   }, [title]);
//   const onChangeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
//     setCategory(prev => parseInt(e.target.value));
//   }, [category]);
//   const onChangeIsPrivate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsPrivate(prev => e.target.checked);
//   }, [is_private]);

//   const onClickSelect = useCallback((post: Post) => {
//     setSelected(prev => {
//       if (prev.includes(post)) {
//         return prev.filter(prevPost => prevPost.id !== post.id);
//       } else {
//         return prev.concat(post);
//       }
//     });
//   }, [selected]);

//   const onClickCreate = useCallback(async () => {
//     if (title === '') {
//       const { current } = inputTitle;
//       if (current !== null) {
//         current.focus();
//         current.placeholder = 'MyPings 이름을 입력해주세요.'
//       }
//       return;
//     }
//     const result = await axios.post('http://localhost:4000/mypings', { title, category, is_private, posts: selected});
//     console.log(result.data);
//     close();
//   }, [title, category, is_private, selected]);

//   return (
//     <div className='mypings-modal-content'>
//       <div className='mypings-modal-box'>
//         <header className='mypings-modal-header'>
//           <h1 className='mypings-modal-title'>{children}</h1>
//           <form className='mypings-setting-form'>
//             <input className='mypings-title' placeholder='MyPings 이름' value={title} ref={inputTitle} onChange={onChangeTitle} /><br />
//             <div className='mypings-category-public'>
//               <select onChange={onChangeCategory}>
//                 {options.map(option => (
//                   <option value={option.value}>{option.text}</option>
//                 ))}
//               </select>
//               <div className='ispublic'>
//                 <input id='private-chk' type='checkbox' onChange={onChangeIsPrivate}/>
//                 <label htmlFor='private-chk'>비공개</label>
//               </div>
//             </div>
//           </form>
//         </header>
//         <main className='mypings-modal-main'>
//           <PostList posts={posts} onClickSelect={onClickSelect} />
//         </main>
//         <footer className='mypings-modal-footer'>
//           <button className='cancel-button' type='button' onClick={close}>취소</button>
//           <button className='create-button' type='button' onClick={onClickCreate}>생성</button>
//         </footer>
//       </div>
//     </div>
//   );
// };
// export default CreateMyPings;