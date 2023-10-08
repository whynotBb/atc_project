import styled from "styled-components";
import HomeIco from "../assets/images/icon-26-navi-home.svg";
import ArrowIco from "../assets/images/navi_arrow.svg";

function Breadcrumb() {
    const BreadcrumbWrap = styled.div`
        padding: 1.2rem 0;
        max-width: 172rem;
        margin: 0 auto;
    `;
    const List = styled.ul`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2.4rem;
        li {
            position: relative;
            cursor: pointer;
            color: ${({ theme }) => theme.colors.gray1};
            line-height: 2.6rem;
            font-size: ${({ theme }) => theme.fontSizes.sm};
            &.home {
                text-indent: -9999999px;
                width: 2.6rem;
                height: 2.6rem;
                background: url(${HomeIco}) no-repeat center;
                &::before {
                    display: none;
                }
            }
            &::before {
                content: "";
                position: absolute;
                width: 5px;
                height: 7px;
                background: url(${ArrowIco}) no-repeat center;
                top: 1rem;
                left: -1.3rem;
            }
            &.active {
                color: ${({ theme }) => theme.colors.black};
                font-weight: 700;
            }
        }
    `;

    return (
        <BreadcrumbWrap>
            <List>
                <li className="home">Home</li>
                <li>실시간관제</li>
                <li className="active">이력관리</li>
            </List>
        </BreadcrumbWrap>
    );
}
export default Breadcrumb;
