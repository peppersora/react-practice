import { useState } from "react";

const Iteration = () => {
   const [names,setNames] = useState([
      {id: 1, text: "눈사람"},
      {id: 2, text: "얼음"},
      {id: 3, text: "눈"},
      {id: 4, text: "바람"}
   ]);
   

   const [inputText, setInputText] = useState("");
   // 새로운 항목을 추가할때 사용할 id => 다음부터는 5 로 시작할것
   const [nextId, setNextId] = useState(5);
   const onChange = (e) => {
      setInputText(e.target.value);
   };

   const onkeypressdown = (e) => {
      if(e.key === "Enter"){
         onClick();
      };
   };

   const onClick = () => {
      const nextNames = names.concat({
         id:nextId,
         text: inputText
      });
      // id값 업데이트
      setNextId(nextId+1);
      // name값 없데이트
      setNames(nextNames);
      // input값 비우기
      setInputText("");
   };
   // html 태그를 더블클릭하면 지워짐 => id이용 => id 더블클릭시 (nextNames이용)
   const onRemove = (id) => {
      // id 와 text를 concat한 nextNames를 이용
      // filter함수를 이용해서  id가 같은 것들만 filtering된다.
      const nextNames = names.filter(name => name.id !== id);
      setNames(nextNames);
   }

   const namesList = names.map(name =>
       <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
         {name.text}
         </li>
         );

   return (
   <>
   <input value={inputText} 
   onKeyDown={onkeypressdown}
   onChange={onChange}/>
   <button onClick={onClick}>클릭</button>
   <ul>{namesList}</ul>;
   </>
   );
};

export default Iteration;
