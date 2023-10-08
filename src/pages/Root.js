import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import styled from "styled-components";
import Lnb from "../components/Lnb";

function RootLayout() {
    const BodyWrap = styled.div`
        background: #f4f6fa;
        min-height: 100vh;
        padding-top: 7.4rem;
        main {
            width: 172rem;
            min-height: 84rem;
            margin: 0 auto;
            background: #fff;
            border-radius: 2.4rem;
            display: flex;
            section {
                padding: 4rem;
                flex: 1;
                h2 {
                    font-size: 2.6rem;
                    line-height: 3.1rem;
                    color: #000;
                    font-weight: bold;
                    padding-bottom: 2.4rem;
                    border-bottom: 2px solid #222;
                    margin-bottom: 2rem;
                }
            }
        }
    `;
    return (
        <>
            <BodyWrap id="bodyWrap">
                {/* ↓ 페이지 이동 시 스크롤 상단으로 이동 */}
                <ScrollToTop />
                {/* 헤더 */}
                <Header />
                {/* breadcrumb */}
                <Breadcrumb />
                <main>
                    <Lnb />
                    <Outlet />
                </main>
            </BodyWrap>
        </>
    );
}

export default RootLayout;
