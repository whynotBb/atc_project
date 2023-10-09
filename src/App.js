import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import { createGlobalStyle } from "styled-components";
import UIComponents from "./pages/UIComponents";
import PageList from "./pages/PageList";
import LiveControl from "./pages/LiveControl/LiveControl";
import LiveControlHistory from "./pages/LiveControl/LiveControlHistory";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="live" replace />,
            },
            {
                path: "live",
                element: <LiveControl />,
            },
            {
                path: "livehistory",
                element: <LiveControlHistory />,
            },
        ],
    },
    { path: "/login", element: <Login /> },
    { path: "/uiComponents", element: <UIComponents /> },
    { path: "/pageList", element: <PageList /> },
]);
const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css");
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  html{
    
    font-size: 10px;
    font-weight: 400;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.default};
    max-width: 256rem;
    min-width: 172rem;
    margin: 0 auto;
    width: 100%;
    background: #fff;
    
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  input:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px white inset;
	box-shadow: 0 0 0 1000px white inset;
}
/* scroll custom */
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px; /* 1 */
  height: 10px;
  background: #999;
  box-shadow: -200px 0 0 200px #999; /* 2 */
  border: 2px solid #999; /* 1 */
}

::-moz-range-track {
  height: 10px;
  background: #ddd;
}

::-moz-range-thumb {
  background: #999;
  height: 10px;
  width: 40px;
  border: 3px solid #999;
  border-radius: 0 !important;
  box-shadow: -200px 0 0 200px transparent;
  box-sizing: border-box;
}

::-ms-fill-lower {
  background: dodgerblue;
}

::-ms-thumb {
  background: #999;
  border: 2px solid #999;
  height: 10px;
  width: 40px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #ddd;
  color: transparent;
  height: 10px;
  border: none;
}

::-ms-tooltip {
  display: none;
}

/* 스크롤바 설정*/
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  height: 17%;
  background-color: rgba(186, 186, 186, 0.5);
  border-radius: 10px;
}

/* 스크롤바 뒷 배경 설정*/
::-webkit-scrollbar-track {
  background-color: rgba(245, 245, 245, 0.5);
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
