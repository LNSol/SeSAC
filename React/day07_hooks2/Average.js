import {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
  console.log("평균값 계산중...");
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const inputEl = useRef(null);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);


  const handleClick = useCallback(() => {
    const nextList = list.concat(parseInt(value));
    setList(nextList);
    setValue('');
    inputEl.current.focus();
  }, [value, list]);

  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  return (
    <>
      <input type="text" ref={inputEl} value={value} onChange={handleChange} />
      <button type="button" onClick={handleClick}>등록</button>
      <ul>{
        list.map((element, index) => {
          return (<li key={index}>{element}</li>);
        })
      }</ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </>
  );
};

export default Average;