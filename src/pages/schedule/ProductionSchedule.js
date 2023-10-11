import styled from "styled-components";
import SelectBox from "../../components/UI/SelectBox";
import DateRangePicker from "../../components/UI/DatePicker";
import Button from "../../components/UI/Button";
import TextFields from "../../components/UI/TextFields";

function ProductionSchedule() {
    const SearchTableWrap = styled.div``;
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
    //select box 의 샘플 데이터
    const optiondata = [
        { key: "01-0", value: "선택" },
        { key: "01-1", value: "option1" },
        { key: "01-1", value: "option2" },
    ];
    return (
        <section>
            <h2>작업이력 관리</h2>
            <SearchTableWrap>
                <div className="btnTitle">
                    <h3>생산계획 등록(수정)</h3>
                    <div className="btnWrap">
                        <Button
                            className="secondary"
                            type="button"
                            value="삭제"
                        />
                        <Button
                            className="primary"
                            type="button"
                            value="저장"
                        />
                    </div>
                </div>
                <table>
                    <colgroup>
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "35%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "35%" }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>
                                업체 <span className="required">*</span>
                            </th>
                            <td>
                                <SelectBox optionData={optiondata} />
                            </td>
                            <th>
                                작업사이트 <span className="required">*</span>
                            </th>
                            <td>
                                <SelectBox optionData={optiondata} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                생산계획번호 <span className="required">*</span>
                            </th>
                            <td>
                                <TextFields
                                    disabled="disabled"
                                    value="시스템 자동 발번"
                                />
                            </td>
                            <th>
                                상태 <span className="required">*</span>
                            </th>
                            <td>
                                <TextFields
                                    disabled="disabled"
                                    value="시스템 자동 적용"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>비고</th>
                            <td colSpan={3}>
                                <TextFields className="w100" />
                            </td>
                        </tr>
                        <tr>
                            <th>등록일</th>
                            <td>관리자</td>
                            <th>등록일시</th>
                            <td>2023-03-23 10:12</td>
                        </tr>
                        <tr>
                            <th>수정일</th>
                            <td>관리자</td>
                            <th>수정일시 </th>
                            <td>2023-03-23 10:12</td>
                        </tr>
                    </tbody>
                </table>
            </SearchTableWrap>
        </section>
    );
}

export default ProductionSchedule;
