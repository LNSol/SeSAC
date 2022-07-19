import {useState} from "react";

const EventPracticeFn = () => {
  /* input이 많으면 하나하나 만들어주기 귀찮 */
  // const [message, setMessage] = useState('');
  // const [username, setUsername] = useState('');

  // const onChangeUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const onChangeMessage = (e) => {
  //   setMessage(e.target.value);
  // };
  const [form, setForm] = useState({username: '', message: ''});
  const {username, message} = form;

  const onChange = (e) => {
    const newForm = {
      ...form, 
      [e.target.name]: e.target.value
    };
    setForm(newForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({username: '', message:''});
  };
  const onKeyPress = (e) => {
    if(e.key === 'Enter' && e.target.value !== '') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="아이디를 입력하세요."
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventPracticeFn;