import styled from "styled-components";
import userIcon from "../../assets/images/icon-26-user.svg";
import pwIcon from "../../assets/images/icon-26-certifycenter.svg";

function TextFields({
    type,
    className,
    placeholder,
    disabled,
    error,
    errorTxt,
    value,
}) {
    /* 
    type: text, password, Number
    disabled : disabled
    className : loginId,loginPW - 로그인
    error : 유효성검사에서 error - error="error"
    errorTxt : 에러메시지
    // 사용 예시
    <TextFields
        type="text"
        className="loginId"
        placeholder="ID"
        disabled
        error="error"
        errorTxt="에러메시지"
    />
    */
    // className 과 error 조합
    let classNames = [];
    if (className) {
        classNames = classNames.concat(className.split(" "));
    }
    if (error) {
        classNames.push("error");
    }
    const combinedClassName = classNames.join(" ");
    const TextField = styled.div`
        width: 22.4rem;
        height: 4rem;
        input {
            width: 100%;
            height: 100%;
            border-radius: 0.8rem;
            border: 1px solid ${({ theme }) => theme.colors.border};
            outline: none;
            padding: 0 2rem;
            color: ${({ theme }) => theme.colors.gray1};
            &:focus,
            &:hover {
                border-color: ${({ theme }) => theme.colors.black};
            }
            &:disabled {
                background: #f9f9f9;
                color: ${({ theme }) => theme.colors.gray3};
                &:hover {
                    border-color: ${({ theme }) => theme.colors.border};
                }
            }
        }
        &.loginId,
        &.loginPW {
            width: 100%;
            height: 5.4rem;
            position: relative;
            input {
                padding-left: 8.3rem;
                border-radius: 0.8rem;
                border: 1px solid ${({ theme }) => theme.colors.border};
                font-size: 1.6rem;
                font-weight: 500;
                &:focus,
                &:hover {
                    border-color: ${({ theme }) => theme.colors.black};
                }
                &:disabled {
                    background: #f9f9f9;
                    color: ${({ theme }) => theme.colors.gray3};
                    &:hover {
                        border-color: ${({ theme }) => theme.colors.border};
                    }
                }
            }

            &::before {
                content: "";
                position: absolute;
                width: 2px;
                height: 2.4rem;
                background: #e1e1e1;
                top: 1.5rem;
                left: 6.1rem;
            }
            &::after {
                content: "";
                position: absolute;
                top: 1.4rem;
                left: 2rem;
                width: 2.6rem;
                height: 2.6rem;
                background: url(${userIcon}) no-repeat center;
            }
        }
        &.loginPW::after {
            background: url(${pwIcon}) no-repeat center;
        }
        &.error {
            input {
                border-color: ${({ theme }) =>
                    theme.colors.secondary} !important;
            }
        }
        &.w100 {
            width: 100%;
        }
    `;
    const ErrorMsg = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        text-align: left;
        font-size: 1.2rem;
        line-height: 2.4rem;
        width: 100%;
    `;
    return (
        <>
            <div>
                <TextField className={combinedClassName}>
                    <input
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        value={value}
                    />
                </TextField>
                {errorTxt && <ErrorMsg>{errorTxt}</ErrorMsg>}
            </div>
        </>
    );
}
export default TextFields;
