import { useState } from "react";
import styled from "styled-components";
import downIcon from "../../assets/images/select_down.svg";
import upIcon from "../../assets/images/select_up.svg";

function SelectBox({ optionData, className, readonly }) {
    // ↓ 퍼블단에서 화면 확인만을 위해 작성한 코드 입니다.
    //   추후 개발단에서 수정 해 주세요

    //select 값
    const [showOptions, setShowOptions] = useState(false);
    const HandleShowOption = () => {
        //readonly 가 아닐때만 작동
        if (readonly !== true) {
            setShowOptions((current) => !current);
        }
    };
    const HandleMouseLeave = () => {
        setShowOptions(false);
    };
    const [selected, setSelected] = useState(optionData[0].value);
    const HandleSelected = (txt) => {
        setSelected(txt);
    };
    const SelectBox = styled.div`
        cursor: pointer;
        position: relative;
        min-width: 18rem;
        p {
            height: 4rem;
            line-height: 3.8rem;
            background: #fff;
            color: ${({ theme }) => theme.colors.gray1};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: 0.8rem;
            padding: 0 2rem;
            font-size: 1.5rem;
            font-weight: 500;
            position: relative;
            &::after {
                content: "";
                display: block;
                position: absolute;
                width: 2.4rem;
                height: 2.4rem;
                top: 0.8rem;
                right: 1.6rem;
                background-image: url(${downIcon});
                background-repeat: no-repeat;
                background-position: center;
                transition: all 0.3s;
            }
            &:hover {
                border-color: ${({ theme }) => theme.colors.black};
            }
        }
        ul {
            display: none;
            position: absolute;
            width: 100%;
            z-index: 10;
            background: #fff;
            border: 1px solid ${({ theme }) => theme.colors.black};
            border-top: 0;
            border-radius: 0 0 0.8rem 0.8rem;
            overflow: hidden;
            li {
                padding: 0 2rem;
                height: 4rem;
                line-height: 4rem;
                font-size: 1.5rem;
                font-weight: 500;
                color: ${({ theme }) => theme.colors.gray2};
                &:hover {
                    background: #f9f9f9;
                }
            }
        }
        &.on {
            p {
                border-color: ${({ theme }) => theme.colors.black};
                border-radius: 0.8rem 0.8rem 0 0;
                &::after {
                    transform: rotate(180deg);
                }
            }
            ul {
                display: block;
            }
        }
        &.lg {
            p {
                height: 4.6rem;
                line-height: 4.4rem;
            }
        }
    `;

    return (
        <SelectBox
            className={`selectBox ${className} ${showOptions ? "on" : ""}`}
            onClick={HandleShowOption}
            onMouseLeave={HandleMouseLeave}
        >
            <p>{selected}</p>
            <ul>
                {optionData.map((data) => (
                    <>
                        <li
                            key={data.key}
                            id={data.key}
                            value={data.value}
                            onClick={() => HandleSelected(data.value)}
                            className={data.disabled}
                        >
                            {data.value}
                            {data.state && (
                                <span
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.currentTarget.parentNode.click();
                                    }}
                                >
                                    - {data.state}
                                </span>
                            )}
                        </li>
                    </>
                ))}
            </ul>
        </SelectBox>
    );
}
export default SelectBox;
