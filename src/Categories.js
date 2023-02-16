import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import styled, { css } from "styled-components";

const categories = [
{
    name: "all",
    text: "전체보기",
},
{
    name: "business",
    text: "비지니스",
},
{
    name: "entertainment",
    text: "엔터테인먼트",
},
{
    name: "health",
    text: "건강",
},
{
    name: "science",
    text: "과학",
},
{
    name: "sports",
    text: "스포츠",
},
{
    name: "technology",
    text: "기술",
},
];

const CategoriesBlock = styled.div`
display: flex;
padding: 2em;
width: 768px;
margin: 0 auto;
@media screen and(max-width:768px){
    width: 100%;
    overflow-x: auto;
}
`;

const Category = styled(NavLink)`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;

&:hover{
    color: #CED371;
}

&.active {

    font-weight: 600;
    border-bottom: 2px solid #3E63BF;
    color: #547AD9;
    &:hover{
        color: #3E63BF;
    }
}


&+& {
    margin-left: 1rem;
}
`;

// 부모가 자식에게 props를 보냄
const Categories = ({onSelect,category}) => {
    return(
        <CategoriesBlock>
          {categories.map(cate =>(
            <Category 
            key={cate.name}
            className = {({isActive}) => (isActive ? "active" : undefined)}
            to={cate.name === "all" ? "/" : `/${cate.name}`}
            >
                {cate.text}
                </Category>
          ))}
        </CategoriesBlock>
    );
}


export default Categories;