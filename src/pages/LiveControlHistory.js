import styled from "styled-components";
import Button from "../components/UI/Button";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SelectBox from "../components/UI/SelectBox";
import DateRangePicker from "../components/UI/DatePicker";
// ag-grid 사용하는 컴포넌트에서는 아래 3개를 꼭 import 해야 합니다.
import { AgGridReact } from "ag-grid-react";
//ag-grid 기본 스타일
import "ag-grid-community/styles/ag-grid.css";
// ag-grid custom style
import "../assets/css/ag-custom-style.css";
import firstIcon from "../assets/images/page_first.svg";
import lastIcon from "../assets/images/page_last.svg";
import prevIcon from "../assets/images/page_prev.svg";
import nextIcon from "../assets/images/page_next.svg";

function LiveControlHistory() {
    const SearchBox = styled.div`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 0.8rem;
        background: #f7f8fa;
        margin-bottom: 4rem;
        display: flex;
    `;
    const SearchFilter = styled.div`
        padding: 2.5rem 5rem;
        flex: 1;
        .flex_row {
            display: flex;
            justify-content: space-between;
            &:first-child {
                margin-bottom: 1.2rem;
            }
        }
    `;
    const SearchBtn = styled.div`
        width: 19.6rem;
        padding: 2.5rem 5rem;
        border-left: 1px solid ${({ theme }) => theme.colors.borderLight};
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    `;
    const Item = styled.div`
        display: flex;
        gap: 1.6rem;
        align-items: center;
        & > p {
            width: 12rem;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.gray1};
            font-weight: 500;
        }
    `;
    const Counter = styled.div`
        display: flex;
        gap: 0.8rem;
        margin-bottom: 1.6rem;
        align-items: center;
        h4 {
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 2.6rem;
        }
        p {
            line-height: 2.2rem;
            font-size: 1.4rem;
            b {
                font-weight: bold;
                color: ${({ theme }) => theme.colors.primaryDark};
            }
        }
    `;
    const Pagination = styled.div`
        text-align: center;
        padding: 3rem 0;
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            li {
                cursor: pointer;
                font-size: 1.5rem;
                min-width: 3.2rem;
                height: 3.2rem;
                line-height: 3.2rem;
                border-radius: 0.4rem;
                &.active {
                    background: ${({ theme }) => theme.colors.primaryDark};
                    color: #fff;
                }
                &.first,
                &.last,
                &.prev,
                &.next {
                    text-indent: -999999px;
                    font-size: 0;
                    color: transparent;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                &.first {
                    background-image: url(${firstIcon});
                }
                &.last {
                    background-image: url(${lastIcon});
                }
                &.prev {
                    background-image: url(${prevIcon});
                }
                &.next {
                    background-image: url(${nextIcon});
                }
            }
        }
    `;

    //select box 의 샘플 데이터
    const optiondata01 = [
        { key: "01-0", value: "전체" },
        { key: "01-1", value: "option" },
    ];
    const optiondata02 = [
        { key: "02-0", value: "전체" },
        { key: "02-1", value: "option" },
    ];
    const optiondata03 = [
        { key: "03-0", value: "전체" },
        { key: "03-1", value: "option" },
    ];

    // ag-grid 화면 확인을 위해 작성한 코드 입니다.
    // 이후 개발단에서 알맞게 처리 해 주세요
    const gridRef = useRef(); // Optional - for accessing Grid's API

    //paging size
    const paginationPageSize = 10;
    // Each Column Definition results in one Column.

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true,
        wrapHeaderText: true,
        autoHeaderHeight: true,
        wrapText: true,
    }));
    const [totalPages, setTotalPages] = useState(0);
    const [currentPages, setCurrentPages] = useState(0);
    let currentPage = "";
    // 총 목록 수
    const onPaginationChanged = useCallback(() => {
        if (gridRef.current.api) {
            document.querySelector("#lbTotalPages").innerHTML =
                gridRef.current.api.paginationGetRowCount();
            setTotalPages(gridRef.current.api.paginationGetTotalPages());
        }
    }, []);
    // pagination api
    const onBtFirst = useCallback(() => {
        gridRef.current.api.paginationGoToFirstPage();
    }, []);

    const onBtLast = useCallback(() => {
        gridRef.current.api.paginationGoToLastPage();
    }, []);

    const onBtNext = useCallback(() => {
        gridRef.current.api.paginationGoToNextPage();
    }, []);

    const onBtPrevious = useCallback(() => {
        gridRef.current.api.paginationGoToPreviousPage();
    }, []);

    const onBtPage = useCallback(
        (pageNumber) => () => {
            console.log(`Clicked page ${pageNumber}`);
            gridRef.current.api.paginationGoToPage(pageNumber);
        },
        [gridRef]
    );
    const liElements = [];
    for (let i = 1; i <= totalPages; i++) {
        liElements.push(
            <li key={i} onClick={onBtPage(i - 1)}>
                {i}
            </li>
        );
    }

    // thead datas
    const [columnDefs, setColumnDefs] = useState([
        {
            field: "no",
            headerName: "이력 일련번호",
            width: 100,
            autoHeight: true,
        },
        {
            field: "id",
            headerName: "무인체 ID",
            width: 100,
            autoHeight: true,
        },
        {
            field: "enterpriseName",
            headerName: "업체",
            width: 120,
            autoHeight: true,
        },
        {
            field: "siteName",
            headerName: "작업 사이트",
            width: 120,
            autoHeight: true,
        },
        {
            field: "object",
            headerName: "무인체 구분",
            width: 80,
            autoHeight: true,
        },
        {
            field: "jobId",
            headerName: "작업 ID",
            width: 80,
            autoHeight: true,
        },
        {
            field: "jobType",
            headerName: "작업유형",
            width: 100,
            autoHeight: true,
        },
        {
            field: "startDate",
            headerName: "시작일시",
            width: 120,
            autoHeight: true,
        },
        {
            field: "endDate",
            headerName: "종료일시",
            width: 120,
            autoHeight: true,
        },
        {
            field: "startLocation",
            headerName: "출발지 정보",
            width: 105,
            autoHeight: true,
        },
        {
            field: "endLocation",
            headerName: "도착지 정보",
            width: 105,
            autoHeight: true,
        },
        {
            field: "timeForWork",
            headerName: "작업 소요 시간",
            width: 80,
            autoHeight: true,
        },
        {
            field: "isEmergency",
            headerName: "긴급 작업 여부",
            width: 80,
            autoHeight: true,
        },
        {
            field: "registerDate",
            headerName: "등록일시",
            width: 120,
            autoHeight: true,
        },
    ]);

    //tbody datas
    const [rowData] = useState([
        {
            no: 100,
            id: 39120,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 101,
            id: 39121,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 102,
            id: 3912,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 103,
            id: 39123,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 104,
            id: 39124,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 105,
            id: 39125,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 106,
            id: 39126,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 107,
            id: 39127,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 108,
            id: 39128,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 109,
            id: 39129,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 120,
            id: 39120,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
        {
            no: 121,
            id: 39121,
            enterpriseName: "업체1",
            siteName: "사이트1",
            object: "AMR",
            jobId: "50",
            jobType: "MOVE",
            startDate: "2023-04-25 10:10",
            endDate: "2023-04-25 10:10",
            startLocation: "1층 A공정",
            endLocation: "1층 C공정",
            timeForWork: "10분",
            isEmergency: "N",
            registerDate: "2023-04-25 10:10",
        },
    ]);

    return (
        <section>
            <h2>작업이력 관리</h2>
            <SearchBox>
                <SearchFilter>
                    <div className="flex_row">
                        <Item>
                            <p>업체 구분</p>
                            <SelectBox optionData={optiondata01} />
                        </Item>
                        <Item>
                            <p>작업사이트 구분</p>
                            <SelectBox optionData={optiondata02} />
                        </Item>
                        <Item>
                            <p>무인체 구분</p>
                            <SelectBox optionData={optiondata03} />
                        </Item>
                    </div>
                    <div className="flex_row">
                        <Item>
                            <p>검색일자</p>
                            <DateRangePicker />
                        </Item>
                    </div>
                </SearchFilter>
                <SearchBtn>
                    <Button className="primary" type="submit" value="조회" />
                    <Button type="button" value="초기화" />
                </SearchBtn>
            </SearchBox>

            <Counter>
                <h4>목록</h4>
                <p>
                    총 <b id="lbTotalPages">30</b>건
                </p>
            </Counter>

            {/* s: ag-grid */}
            <div
                className="ag-theme-alpine"
                style={{ width: "100%", height: 803 }}
            >
                <AgGridReact
                    ref={gridRef} // Ref for accessing Grid's API
                    rowData={rowData} // Row Data for Rows
                    columnDefs={columnDefs} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties
                    rowSelection={"multiple"} // Options - allows click selection of rows
                    pagination={true}
                    paginationPageSize={paginationPageSize}
                    alwaysShowVerticalScroll={false}
                    onPaginationChanged={onPaginationChanged}
                    rowHeight={72}
                />
            </div>
            {/* e: ag-grid */}

            {totalPages > 0 && (
                <Pagination>
                    <ul>
                        <li className="first" onClick={onBtFirst}>
                            to first
                        </li>
                        <li className="prev" onClick={onBtPrevious}>
                            to prev
                        </li>
                        {liElements}
                        {/*
                            ***********
                            현재페이지와 비교 하여 일치하는 page item 에게 active 클래스 추가해주세요.
                            퍼블단에서는 구현이 어려워 스타일만 추가 해 두었습니다.
                            현재 페이지 표기 className = 'active' 추가
                            ***********
                            <li className='active' onClick={onBtPage(1)}>1</li>
                            <li onClick={onBtPage(2)}>2</li>*/}
                        <li className="next" onClick={onBtNext}>
                            to next
                        </li>

                        <li className="last" onClick={onBtLast}>
                            to last
                        </li>
                    </ul>
                </Pagination>
            )}
        </section>
    );
}
export default LiveControlHistory;
