import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
    padding: 2rem;
    h2 {
        margin-bottom: 2rem;
    }
    ul {
        margin-left: 2rem;
        li {
            list-style: disc;
            height: 3.5rem;
            line-height: 3.5rem;
            a {
                text-decoration: underline;
                text-underline-position: under;
            }
        }
    }
`;

function PageList() {
    return (
        <Wrap>
            <h2>pages</h2>
            <ul>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/">통합 관제 시스템</Link>
                </li>
                <li>
                    <Link to="/livehistory">
                        실시간 관제 {">"} 작업이력 관리
                    </Link>
                </li>
                <li>
                    <Link to="/uiComponents">ui components</Link>
                </li>
            </ul>
        </Wrap>
    );
}
export default PageList;
