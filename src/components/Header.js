import styled from "styled-components";
import theme from "../theme";
import LogoSrc from "../assets/images/logo.svg";
import LogoutIco from "../assets/images/icon-24-logout.svg";
import UserIco from "../assets/images/icon-24-user.svg";

function Header() {
    const HeaderWrap = styled.div`
        height: 7.4rem;
        background: ${({ theme }) => theme.colors.primaryDark};
        color: #ffffff;
        padding: 0 2rem;
        width: 100%;
        max-width: 256rem;
        position: fixed;
        z-index: 100;
        top: 0;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 172rem;
            margin: 0 auto;
        }
    `;
    const HeaderLogo = styled.div`
        font-size: 1.8rem;
        line-height: 7.4rem;
        display: flex;
        font-size: 500;
        padding-left: 7rem;
        background: url(${LogoSrc}) no-repeat left center;
        h1 {
            font-weight: 800;
            margin-right: 1rem;
        }
    `;
    const UserInfoWrap = styled.ul`
        display: flex;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: bold;
        gap: 2.5rem;
        li {
            position: relative;
            line-height: 2.4rem;
            &::before {
                content: "";
                display: block;
                width: 1px;
                height: 1.2rem;
                background: #fff;
                position: absolute;
                top: 7px;
                left: -1.2rem;
            }
            &:first-child::before {
                display: none;
            }
            &.user {
                padding-left: 3rem;
                background: url(${UserIco}) no-repeat left center;
            }
            &.logout {
                text-indent: -999999px;
                width: 2.4rem;
                height: 2.4rem;
                cursor: pointer;
                background: url(${LogoutIco}) no-repeat center;
            }
        }
    `;

    return (
        <HeaderWrap>
            <header>
                <HeaderLogo>
                    <h1>무인이동체 디지털트윈</h1>모니터링
                </HeaderLogo>
                <UserInfoWrap>
                    <li>Company : AA</li>
                    <li className="user">User : admin</li>
                    <li className="logout">logout</li>
                </UserInfoWrap>
            </header>
        </HeaderWrap>
    );
}
export default Header;
