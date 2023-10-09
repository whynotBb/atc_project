import styled from "styled-components";

import Weather from "../../components/UI/Weather";
import SelectBox from "../../components/UI/SelectBox";
import Toggle from "../../components/UI/Toggle";
import LiveControlCctvSlide from "./LiveControlCctvSlide";
import LiveControlChartSlide from "./LiveControlChartSlide";
import VerticalToggle from "../../components/UI/VerticalToggle";
import FloorBtn from "./FloorBtn";

import ImgMap from "../../assets/images/map_sample.png";
import IconAmr from "../../assets/images/Ico_AMR_40.svg";
import IconAgv from "../../assets/images/Ico_AGV_40.svg";

function LiveControl() {
    const Now = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        .updateTime {
            font-size: 2rem;
            font-weight: bold;
            line-height: 2.4rem;
        }
    `;
    const DashbordWrap = styled.div`
        display: flex;
        gap: 2.4rem;
        height: 70rem;
        margin-top: 2rem;
    `;
    const WorkStatusWrap = styled.div`
        width: 25.2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `;
    const WorkStatus = styled.div`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;

        h3 {
            height: 5.9rem;
            line-height: 5.9rem;
            border-bottom: 1px solid ${({ theme }) => theme.colors.border};
            padding: 0 2rem;
            font-size: 1.8rem;
            font-weight: 600;
        }
        .statusBox {
            padding: 0 2rem 1.6rem;
            p {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 500;
                color: ${({ theme }) => theme.colors.gray1};
                height: 4.8rem;
                line-height: 4.8rem;
                span {
                    color: ${({ theme }) => theme.colors.secondary};
                    font-weight: bold;
                }
            }
            ul {
                display: flex;
                padding: 1.2rem;
                background: #f7f8fa;
                border-radius: 0.4rem;
                gap: 0.4rem;
                li {
                    text-align: center;
                    line-height: 1.8rem;
                    flex: 1;
                    span {
                        display: block;
                        margin-bottom: 0.8rem;
                        color: ${({ theme }) => theme.colors.gray1};
                    }
                    i {
                        font-weight: 500;
                    }
                }
            }
        }
    `;
    const ChartWrap = styled.div`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        h3 {
            height: 5.9rem;
            line-height: 5.9rem;
            border-bottom: 1px solid ${({ theme }) => theme.colors.border};
            padding: 0 2rem;
            font-size: 1.8rem;
            font-weight: 600;
        }
        .chartBox {
            height: 22rem;
        }
    `;
    const CctvWrap = styled.div`
        padding: 2rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        height: 18.4rem;
    `;
    const MapWrap = styled.div`
        flex: 1;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        background: #f9f9f9;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .floatBtnWrap {
            position: absolute;
            top: 1.8rem;
            right: 1.8rem;
        }
    `;
    const LegendWrap = styled.div`
        position: absolute;
        right: 1.8rem;
        bottom: 1.8rem;
        width: 28.4rem;
        height: 9.8rem;
        border-radius: 0.8rem;
        background: rgba(34, 34, 34, 0.6);
        display: flex;
        padding: 2rem 1.6rem;
        ul {
            display: flex;
            color: #fff;
            &.object {
                height: 5.8rem;
                border-right: 1px dashed #efefef;
                gap: 1.9rem;
                padding-right: 1.5rem;
                li {
                    width: 4rem;
                    font-weight: 600;
                    text-align: center;
                    padding-top: 4rem;
                    background-repeat: no-repeat;
                    background-position: center top;
                    &.amr {
                        background-image: url(${IconAmr});
                    }
                    &.agv {
                        background-image: url(${IconAgv});
                    }
                }
            }
            &.status {
                font-size: 1rem;
                color: #eee;
                flex-wrap: wrap;
                padding: 0.3rem 0 0 1.5rem;
                gap: 0.8rem;
                li {
                    width: calc(50% - 4px);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &::after {
                        content: "";
                        width: 3rem;
                        height: 0.4rem;
                        border-radius: 0.2rem;
                        background: #fff;
                    }
                    &.white::after {
                        background: #fff;
                    }
                    &.orange::after {
                        background: #ffa65d;
                    }
                    &.red::after {
                        background: #e50200;
                    }
                    &.green::after {
                        background: #37d1cc;
                    }
                    &.blue::after {
                        background: #33b5fc;
                    }
                    &.yellow::after {
                        background: #fcc355;
                    }
                }
            }
        }
    `;
    const OptionWrap = styled.div`
        width: 19.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    `;
    const OptionBox = styled.div`
        padding: 2rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    `;
    const ObjectList = styled.div`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        overflow: hidden;
        h4 {
            height: 4.7rem;
            line-height: 4.7rem;
            border-bottom: 1px solid ${({ theme }) => theme.colors.border};
            padding: 0 2rem;
            font-size: 1.5rem;
            font-weight: 500;
        }
        .listBox {
            height: 34.6rem;
            overflow-y: auto;

            li {
                height: 4.8rem;
                line-height: 4.8rem;
                padding: 0 2rem;
                color: ${({ theme }) => theme.colors.gray1};
                &:nth-child(2n) {
                    background: #f7f8fa;
                }
            }
        }
    `;
    //select box 의 샘플 데이터
    const optiondata01 = [
        { key: "01-0", value: "업체 선택" },
        { key: "01-1", value: "option" },
    ];
    const optiondata02 = [
        { key: "02-0", value: "직업사이트 선택" },
        { key: "02-1", value: "option" },
    ];

    return (
        <section>
            <Now>
                <div className="updateTime">2023.07.07 Monday 14:06:10</div>
                <Weather />
            </Now>
            <DashbordWrap>
                <WorkStatusWrap>
                    <WorkStatus>
                        <h3>작업 현황</h3>
                        <div className="statusBox">
                            <p>
                                완료 / 계획 건수<span>100/150</span>
                            </p>
                            <ul>
                                <li>
                                    <span>대기</span>
                                    <i>3</i>
                                </li>
                                <li>
                                    <span>이동</span>
                                    <i>5</i>
                                </li>
                                <li>
                                    <span>충전</span>
                                    <i>1</i>
                                </li>
                                <li>
                                    <span>이상</span>
                                    <i>0</i>
                                </li>
                            </ul>
                        </div>
                    </WorkStatus>
                    <ChartWrap>
                        <h3>Chart</h3>
                        <div className="chartBox">
                            <LiveControlChartSlide />
                        </div>
                    </ChartWrap>
                    <CctvWrap>
                        <LiveControlCctvSlide />
                    </CctvWrap>
                </WorkStatusWrap>
                <MapWrap>
                    <img src={ImgMap} alt="지도 이미지" />
                    <div className="floatBtnWrap">
                        <VerticalToggle
                            id="isIndoor"
                            label1="실내"
                            label2="실외"
                            defaultChecked
                        />
                        <FloorBtn />
                    </div>
                    <LegendWrap>
                        <ul className="object">
                            <li className="amr">AMR</li>
                            <li className="agv">AGV</li>
                        </ul>
                        <ul className="status">
                            <li className="white">대기</li>
                            <li className="green">하차</li>
                            <li className="orange">이동</li>
                            <li className="blue">충전</li>
                            <li className="red">상차</li>
                            <li className="yellow">이상</li>
                        </ul>
                    </LegendWrap>
                </MapWrap>
                <OptionWrap>
                    <SelectBox optionData={optiondata01} className="lg" />
                    <SelectBox optionData={optiondata02} className="lg" />
                    <OptionBox>
                        <Toggle id="AMR" label="AMR" defaultChecked />
                        <Toggle id="AGV" label="AGV" />
                        <Toggle id="ALERT" label="ALERT" defaultChecked />
                        <Toggle id="PATH" label="PATH" defaultChecked />
                    </OptionBox>
                    <ObjectList>
                        <h4>무인 이동체 목록</h4>
                        <div className="listBox">
                            <ul>
                                <li>WKVAMR0001</li>
                                <li>WKVAMR0002</li>
                                <li>WKVAGV0001</li>
                                <li>WKVAMR0003</li>
                                <li>WKVAGV0002</li>
                                <li>WKVAGV0020</li>
                                <li>WKVAGV0300</li>
                                <li>WKVAGV0311</li>
                            </ul>
                        </div>
                    </ObjectList>
                </OptionWrap>
            </DashbordWrap>
        </section>
    );
}
export default LiveControl;
