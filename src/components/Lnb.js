import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import liveIcon from "../assets/images/lnb_live.svg";
import scheduleIcon from "../assets/images/lnb_schedule.svg";
import statisticsIcon from "../assets/images/lnb_statistics.svg";
import serviceIcon from "../assets/images/lnb_service.svg";
import settingIcon from "../assets/images/lnb_setting.svg";
import liveOnIcon from "../assets/images/lnb_live_on.svg";
import scheduleOnIcon from "../assets/images/lnb_schedule_on.svg";
import statisticsOnIcon from "../assets/images/lnb_statistics_on.svg";
import serviceOnIcon from "../assets/images/lnb_service_on.svg";
import settingOnIcon from "../assets/images/lnb_setting_on.svg";
import downIcon from "../assets/images/lnb_down.svg";
import upIcon from "../assets/images/lnb_up.svg";
import { useState } from "react";
const LnbWrap = styled.div`
    width: 21rem;
    padding: 3.6rem 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
    .depth1 {
        & > li {
            border-bottom: 1px solid #efefef;
            padding: 1.2rem 0;
            & > a {
                display: block;
                height: 3.8rem;
                line-height: 3.8rem;
                padding-left: 4rem;
                position: relative;
                font-size: 1.6rem;
                font-weight: bold;
                background-repeat: no-repeat;
                background-position: left 0.9rem center;
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 1.6rem;
                    height: 1.6rem;
                    background: url(${downIcon}) no-repeat center;
                    top: 1.1rem;
                    right: 0;
                }
                &.on {
                    color: ${({ theme }) => theme.colors.primaryDark};
                    &::after {
                        background: url(${upIcon}) no-repeat center;
                    }
                }
            }
            &.live {
                & > a {
                    background-image: url(${liveIcon});
                    &.on {
                        background-image: url(${liveOnIcon});
                    }
                }
            }
            &.schedule {
                & > a {
                    background-image: url(${scheduleIcon});
                    &.on {
                        background-image: url(${scheduleOnIcon});
                    }
                }
            }
            &.statistics {
                & > a {
                    background-image: url(${statisticsIcon});
                    &.on {
                        background-image: url(${statisticsOnIcon});
                    }
                }
            }
            &.service {
                & > a {
                    background-image: url(${serviceIcon});
                    &.on {
                        background-image: url(${serviceOnIcon});
                    }
                }
            }
            &.setting {
                & > a {
                    background-image: url(${settingIcon});
                    &.on {
                        background-image: url(${settingOnIcon});
                    }
                }
            }
        }
    }
    .depth2 {
        padding: 0 0.8rem;
        height: 0;
        overflow: hidden;
        transition: all 0.2s ease;
        li {
            a {
                height: 3.2rem;
                line-height: 3.2rem;
                display: block;
                padding-left: 3.2rem;
                color: ${({ theme }) => theme.colors.gray1};
                font-weight: 500;
                border-radius: 0.8rem;
                position: relative;
                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 0.2rem;
                    background: #fff;
                    top: 1.4rem;
                    left: 2rem;
                }
                &.active {
                    color: #fff;
                    background: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }
    .depth1 > li > a.on {
        & + .depth2 {
            height: auto;
            padding: 0.8rem;
        }
    }
`;

function Lnb() {
    // pathname check 하여 depth 1 을 활성화
    const location = useLocation();
    const currentPath = location.pathname;
    const isLiveInPath = currentPath.includes("live");
    const isScheduleInPath = currentPath.includes("schedule");
    const isStatisticsInPath = currentPath.includes("statistics");
    const isServiceInPath = currentPath.includes("service");
    const isSettingInPath = currentPath.includes("setting");
    return (
        <LnbWrap>
            <nav>
                <ul className="depth1">
                    <li className="live">
                        <NavLink to="live" className={isLiveInPath && "on"}>
                            실시간관제
                        </NavLink>
                        <ul className="depth2">
                            <li>
                                <NavLink to="live">실시간 작업관제</NavLink>
                            </li>
                            <li>
                                <NavLink to="livehistory">이력관리</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="schedule">
                        <NavLink
                            to="productionschedule"
                            className={isScheduleInPath && "on"}
                        >
                            작업스케쥴관리
                        </NavLink>
                        <ul className="depth2">
                            <li>
                                <NavLink to="productionschedule">
                                    생산계획관리
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="schedulescenario">
                                    생산시나리오관리
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="statistics">
                        <NavLink
                            to="objectstatistics"
                            className={isStatisticsInPath && "on"}
                        >
                            통계
                        </NavLink>
                        <ul className="depth2">
                            <li>
                                <NavLink to="objectstatistics">
                                    이동체 통계
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="workshopstatistics">
                                    작업장 통계
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="service">
                        <NavLink
                            to="serviceenterprise"
                            className={isServiceInPath && "on"}
                        >
                            서비스관리
                        </NavLink>
                        <ul className="depth2">
                            <li>
                                <NavLink to="serviceenterprise">
                                    업체 관리
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="servicesite">
                                    작업사이트관리
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="serviceuser">회원관리</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="setting">
                        <NavLink
                            to="settingauth"
                            className={isSettingInPath && "on"}
                        >
                            시스템관리
                        </NavLink>
                        <ul className="depth2">
                            <li>
                                <NavLink to="settingauth">권한관리</NavLink>
                            </li>
                            <li>
                                <NavLink to="settingcommoncode">
                                    공통코드관리
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="settingcustomcode">
                                    커스텀코드관리
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </LnbWrap>
    );
}
export default Lnb;
