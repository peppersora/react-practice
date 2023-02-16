// newslist는 api를 요청하고, 뉴스데이터가 들어있는 배열을 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
import { useEffect, useState } from "react";
import styled from "styled-components";
import News from "./News";
import axios from "axios";
import usePromise from "./lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left:1rem;
        padding-right: 1rem;

    }
`;

const NewsList = ({category}) => {

  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&{category}=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2d51a3f33d104b4198e99ad4bc65ea14`);
  },[category]);

  // 대기중일때
    if(loading) {
        return
            <NewsListBlock>대기중...</NewsListBlock>;
    }
    // 아직 response값이 설정되지 않았을때
    if(!response) {
        return null;
    }

    // 에러가 발생했을때
    if(error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const {articles} = response.data;
    return(
        <NewsListBlock>
            {articles.map((article) => (
                // news의 props이용
                <News key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;