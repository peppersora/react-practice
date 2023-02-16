// 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수
import { useEffect, useState } from "react";

// promise의 대기중 , 완료결과, 실패결과에 대한 상태 관리
// usePromise의 의존배열 deps를 파라미터로 받아왔다.
export default function usePromise(promiseCreator, deps) {
const [loading, setLoading] = useState(false);
const [resolved, setResolved] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    const process = async() => {
        setLoading(true);
    try{
        const resolved = await promiseCreator();
        setResolved(resolved);

    }catch(e){
        setError(e);

    }
    setLoading(false);
    };
    process();
},deps);
return [loading,resolved,error];
};