import styled from "styled-components";
import firstIcon from "../../assets/images/page_first.svg";
import lastIcon from "../../assets/images/page_last.svg";
import prevIcon from "../../assets/images/page_prev.svg";
import nextIcon from "../../assets/images/page_next.svg";

function Pagination() {
    const Pagination = styled.div`
        text-align: center;
        padding: 3rem 0;
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            li {
                cursor: pointer;
                font-size: 1.5rem;
                min-width: 3.2rem;
                height: 3.2rem;
                line-height: 3.2rem;
                border-radius: 0.4rem;
                &.active {
                    background: ${({ theme }) => theme.colors.primaryDark};
                    color: #fff;
                }
                &.first,
                &.last,
                &.prev,
                &.next {
                    text-indent: -999999px;
                    font-size: 0;
                    color: transparent;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                &.first {
                    background-image: url(${firstIcon});
                }
                &.last {
                    background-image: url(${lastIcon});
                }
                &.prev {
                    background-image: url(${prevIcon});
                }
                &.next {
                    background-image: url(${nextIcon});
                }
            }
        }
    `;
    return (
        <Pagination>
            <ul>
                <li className="first">to first</li>
                <li className="prev">to prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li className="next">to next</li>
                <li className="last">to last</li>
            </ul>
        </Pagination>
    );
}
export default Pagination;
