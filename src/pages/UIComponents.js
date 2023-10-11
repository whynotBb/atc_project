import styled from "styled-components";
import Button from "../components/UI/Button";
import Checkbox from "../components/UI/Checkbox";
import SelectBox from "../components/UI/SelectBox";
import DateRangePicker from "../components/UI/DatePicker";
import Pagination from "../components/UI/Pagination";
import AgTable from "../components/UI/AgTable";
import WeatherIcon from "../components/UI/WeatherIcon";
import VerticalToggle from "../components/UI/VerticalToggle";
import Toggle from "../components/UI/Toggle";
import FloorBtn from "./liveControl/FloorBtn";
import { useState } from "react";
import Modal from "../components/UI/Modal";
const Wrap = styled.div`
    padding: 4rem;
    max-width: 192rem;
    margin: 0 auto;
    h2 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
    h3 {
        margin-bottom: 2rem;
    }
    hr {
        margin: 2rem 0;
    }
`;
const FlexRow = styled.div`
    display: flex;
    gap: 1rem;
`;
const Ul = styled.ul`
    padding-left: 2rem;
    padding-bottom: 5rem;
    li {
        list-style: disc;
        line-height: 2rem;
    }
`;

function UIComponents() {
    //select box 의 샘플 데이터
    const optiondata01 = [
        { key: "01-0", value: "전체" },
        { key: "01-1", value: "option글자수가 길면 말줄임 처리" },
    ];
    // 모달여닫기
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    const closeModalHandler = () => {
        console.log("bottom click");
        setIsModalOpen(false);
    };
    return (
        <Wrap>
            <h2>
                ✔ 컴포넌트를 구성하기 위한 스크립트 들은 퍼블단에서 화면
                확인만을 위해 작성하였으니, 개발단에서는 개발 상황에 맞게 수정
                하여 이용 부탁드립니다.
            </h2>
            <h3>🌞button</h3>
            <FlexRow>
                <Button className="primary" type="button" value="primary" />
                <Button className="secondary" type="button" value="secondary" />
                <Button type="button" value="normal" />
                <Button type="button" value="disabled" disabled />
            </FlexRow>
            <hr />
            <h3>🌞check/radio</h3>
            <FlexRow>
                <Checkbox id="saveId" label="Save your ID" />
                <VerticalToggle
                    id="isIndoor"
                    label1="실내"
                    label2="실외"
                    defaultChecked
                />
                <Toggle id="toggle" label="AMR" defaultChecked />
                <FloorBtn />
            </FlexRow>
            <hr />
            <h3>🌞input field</h3>
            <FlexRow>
                <SelectBox optionData={optiondata01} />
                <DateRangePicker />
            </FlexRow>
            <hr />
            <h3>weather icon</h3>
            <FlexRow>
                <WeatherIcon className="sunny" />
                <WeatherIcon className="cloudy" />
                <WeatherIcon className="overcast" />
                <WeatherIcon className="rainy" />
                <WeatherIcon className="snow" />
                <WeatherIcon className="shower" />
                <WeatherIcon className="snowstorm" />
            </FlexRow>
            <hr />
            <h3>Modal</h3>
            <Button onClick={openModalHandler} value="modal open" />
            {isModalOpen && (
                <Modal close={closeModalHandler} title="WKVAMR0001">
                    <div className="body">모달 내용</div>
                    <div className="footer">
                        <Button
                            className="xl"
                            value="확인"
                            onClick={closeModalHandler}
                        />
                    </div>
                </Modal>
            )}
            <hr />
            <h3>🌞pagination</h3>
            <Pagination />
            <hr />
            <h3>🌞ag table</h3>
            <div>
                <p>✔ UI - AgTable 컴포넌트를 참고 해 주세요</p>
                <Ul>
                    <li>컴포넌트 상단의 import 3개 꼭 import 해 주세요</li>
                    <li>
                        custom 스타일은 assets - css - ag-custom-style.css 로
                        빼두었습니다.
                    </li>
                    <li>
                        테이블을 div.ag-theme-alpine로 감싸주셔야 스타일이 적용
                        됩니다.
                    </li>
                    <li>
                        가로 스크롤이 생기는 것을 원치 않으시면, columnDefs 에
                        데이터를 넣으실 때, 가로 값을 지정해 주세요.
                    </li>
                    <li>
                        ag-theme-alpine 에서 인라인으로 가로/세로 값을 지정해
                        주시면, 데이터 양이 많아 지는 경우 자동으로 세로
                        스크롤이 생깁니다.
                    </li>
                </Ul>
            </div>
            <AgTable />
        </Wrap>
    );
}
export default UIComponents;
