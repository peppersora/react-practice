// 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여주는 함수 컴포넌트 만들기

import { useCallback, useMemo, useRef, useState } from "react";

// 평균 계산 함수
const getAverage = numbers => {
    console.log("평균값 계산중..");
    // list에 숫자가 없을때 => 0을 반환
    if(numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length
}

const Average = () =>{
    const [list, setList] = useState([]);
    // input에 넣을 숫자
    const [number, setNumber] = useState("");
    // 버튼을 누르면 focus가 input으로 향하게 useRef를 사용하여
    const inputEl = useRef(null);
    // useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current값이
    // 실제 element를 가리킨다.

    //useCallback(생성하고 싶은 함수, [배열]) 
    // [배열]에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야하는지 명시
    //  함수 내부에서 상태값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜줘야한다.
    const onChange = useCallback((e) => {setNumber(e.target.value)},[]);
    const onkeydown = (e) => {
        if(e.key === "Enter") {
            onInsert();
        }
    };
    // 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onInsert = useCallback(() => {
        // 리스트들의 평균
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
    // click했을시 현재 포커스를 input으로 반환시켜줌
    },[number,list]);

    // useMemo를 사용해서 특정값이 바뀌었을때만 연산을 실행하고 원하는 값이 바뀌지 않으면 이전에 연산했던 결과를 다시 사용하는 방식
    const avg  = useMemo(() => getAverage(list),[list]);

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputEl} onKeyDown={onkeydown}/>
            <button onClick={onInsert}>
                등록
            </button>
            <ul>
                {list.map((value,index) => (
                <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;