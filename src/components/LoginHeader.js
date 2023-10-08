import styled from "styled-components";
import LogoSrc from "../assets/images/logo.svg";

function LoginHeader() {
    const HeaderWrap = styled.div`
        height: 7.4rem;
        background: ${({ theme }) => theme.colors.primaryDark};
        color: #ffffff;
        padding: 0 12rem;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
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

    return (
        <HeaderWrap>
            <header>
                <HeaderLogo>
                    <h1>무인이동체 디지털트윈</h1>모니터링
                </HeaderLogo>
            </header>
        </HeaderWrap>
    );
}
export default LoginHeader;
