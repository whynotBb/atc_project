// ag-grid 사용하는 컴포넌트에서는 아래 3개를 꼭 import 해야 합니다.
import { AgGridReact } from "ag-grid-react";
//ag-grid 기본 스타일
import "ag-grid-community/styles/ag-grid.css";
// ag-grid custom style
import "../../assets/css/ag-custom-style.css";
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";

function AgTable() {
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
        <>
            <Counter>
                <h4>목록</h4>
                <p>
                    총 <b id="lbTotalPages">30</b>건
                </p>
            </Counter>
            <div
                className="ag-theme-alpine"
                style={{ width: 1430, height: 400 }} // 세로 값에 따라 자동으로 세로 스크롤이 생깁니다.
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
        </>
    );
}
export default AgTable;
