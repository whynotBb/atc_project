import styled from "styled-components";
import LoginHeader from "../components/LoginHeader";
import TextFields from "../components/UI/TextFields";
import Checkbox from "../components/UI/Checkbox";
import Button from "../components/UI/Button";
const LoginBodyWrap = styled.div`
    min-height: calc(100vh - 7.4rem);
    background: #f4f6fa;
    padding-top: 14rem;
`;
const LoginBox = styled.div`
    width: 46rem;
    min-height: 51.4rem;
    border-radius: 2.4rem;
    background: #fff;
    margin: 0 auto;
    padding: 6rem 7rem;

    h1 {
        font-size: 3.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primaryDark};
        margin-bottom: 2rem;
        text-align: center;
    }
    h2 {
        color: #777;
        line-height: 2.4rem;
        word-break: keep-all;
        margin-bottom: 3rem;
        text-align: center;
    }
    .formBox {
        & > div {
            margin-bottom: 1.4rem;
            width: 100%;
            &:nth-child(3) {
                text-align: right;
                margin-top: 0.6rem;
            }
        }
        .login {
            margin-top: 2.6rem;
        }
    }
`;
function Login() {
    return (
        <div>
            <LoginHeader />
            <LoginBodyWrap>
                <LoginBox>
                    <div className="inner">
                        <h1>로그인</h1>
                        <h2>
                            무인이동체 생산 스케줄링 디지털트윈 관제 모니터링
                            시스템 방문을 환영합니다.
                        </h2>
                        <form>
                            <div className="formBox">
                                <TextFields
                                    type="text"
                                    className="loginId"
                                    placeholder="ID"
                                    error="error"
                                    errorTxt="에러메시지"
                                />
                                <TextFields
                                    type="password"
                                    className="loginPW"
                                    placeholder="PASSWORD"
                                />
                                <Checkbox
                                    id="saveId"
                                    label="Save your ID"
                                    defaultChecked
                                />
                                <Button
                                    className="login"
                                    type="submit"
                                    value="로그인"
                                />
                            </div>
                        </form>
                    </div>
                </LoginBox>
            </LoginBodyWrap>
        </div>
    );
}
export default Login;
