import { useState } from "react";
import styled from "styled-components";

function FloorBtn() {
    const FloorBtnWrap = styled.div`
        width: 4rem;
        height: 20rem;
        background: rgba(34, 34, 34, 0.85);
        border-radius: 2rem;
        ul {
            width: 4rem;
            padding: 0.45rem;
            li {
                cursor: pointer;
                color: #eeeeee;
                width: 3.2rem;
                height: 3.2rem;
                line-height: 3.2rem;
                border-radius: 1.6rem;
                text-align: center;
                font-size: 1.4rem;
                transition: all 0.3s;
                &.on {
                    background: #fff;
                    color: ${({ theme }) => theme.colors.black};
                    font-weight: bold;
                }
            }
        }
    `;
    // 화면 구현을 위해 퍼블단에서 작성한 코드 입니다. 이후 개발에서 변경해 주세요
    // 층 데이터
    const floorDatas = ["B2", "B1", "1", "2", "3", "4"];
    // 층 변경 시 상태 업데이트
    const [selectedFloor, setSelectedFloor] = useState(floorDatas[0]);

    const selectedFloorHandler = (index) => {
        setSelectedFloor(index);
    };
    return (
        <FloorBtnWrap>
            <ul>
                {floorDatas.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => selectedFloorHandler(item)}
                        // 클릭한 대상과 층 상태가 일치하면 on 클래스 추가
                        className={item === selectedFloor ? "on" : ""}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </FloorBtnWrap>
    );
}
export default FloorBtn;
