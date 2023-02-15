import propTypes from "prop-types";
import styled from "styled-components";
function News({article}) {
// props들을 article로 한번에 받기
const {title, description, url,urlToImage } = article;

const NewsItem = styled.div`
display: flex;
.thumbnail {
    margin-right: 1rem;
    img {
        display: block;
        width: 160px;
        height: 100px;
        object-fit: cover;

    }
}
.contents {
    h2 {
        margin: 0;
        a{
            color:black;
        }
    }
    p{
        margin:0;
        line-height: 1.5rem;
        margin-top: 0.5rem;
        white-space: normal;
    }
}
&+& {
    margin-top: 3rem;
}
`;

return(
    <NewsItem>
        {urlToImage && (
            <div className="thumbnail">
                <a href={url}
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src={urlToImage} alt="thumbnail"/>
                </a>
            </div>
        )}
    <div className="contents">
        <h2>
            <a href={url}
            target="_blank"
            rel="noopener noreferrer">
                {title}
            </a>
        </h2>
        <p>{description}</p>
    </div>
    </NewsItem>

);
}
// news에 대한 props 정리하기
News.prototype = {
    title: propTypes.string.isRequired,
    description:propTypes.string.isRequired,
    url:propTypes.string.isRequired,
    urlToImage:propTypes.string.isRequired,

};
export default News;