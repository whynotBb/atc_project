import styled from "styled-components";

function Button({ type, value, className, disabled }) {
    // ↓ 퍼블단에서 화면 확인만을 위해 작성한 코드 입니다.
    //   추후 개발단에서 수정 해 주세요
    // className 조합
    let classNames = [];
    if (className) {
        classNames = classNames.concat(className.split(" "));
    }
    const combinedClassName = classNames.join(" ");
    const Btn = styled.button`
        height: 4rem;
        line-height: 3.8rem;
        display: inline-block;
        padding: 0 2rem;
        min-width: 9.6rem;
        font-size: 1.5rem;
        font-weight: 500;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background: #fff;
        cursor: pointer;
        border-radius: 0.8rem;
        outline: none;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
            "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        &:hover {
            border-color: ${({ theme }) => theme.colors.black};
        }
        &:disabled {
            cursor: default;
            background: #f9f9f9;
            border-color: #e1e1e1;
        }
        &.login {
            width: 100%;
            height: 6rem;
            border-radius: 3rem;
            background: ${({ theme }) => theme.colors.primary};
            color: #fff;
            border-color: ${({ theme }) => theme.colors.primary};
            font-size: 2.4rem;
            font-weight: 500;
            &:hover {
                border-color: ${({ theme }) => theme.colors.primary};
            }
        }
        &.primary {
            background: ${({ theme }) => theme.colors.primaryLight};
            border-color: ${({ theme }) => theme.colors.primaryLight};
            color: #fff;
            &:hover {
                background: #11b2ed;
            }
            &:disabled {
                cursor: default;
                background: #b5b5b5;
                border-color: #b5b5b5;
            }
        }
        &.secondary {
            background: ${({ theme }) => theme.colors.gray2};
            border-color: ${({ theme }) => theme.colors.gray2};
            color: #fff;
            &:hover {
                background: ${({ theme }) => theme.colors.gray1};
                border-color: ${({ theme }) => theme.colors.gray1};
            }
            &:disabled {
                cursor: default;
                background: #b5b5b5;
                border-color: #b5b5b5;
            }
        }
    `;
    return (
        <Btn className={combinedClassName} type={type} disabled={disabled}>
            {value}
        </Btn>
    );
}
export default Button;
