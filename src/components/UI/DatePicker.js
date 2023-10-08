import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import calendarIcon from "../../assets/images/calendar.svg";

function DateRangePicker(props) {
    const DateRangePicker = styled.div`
        min-width: 18rem;
        display: flex;
        align-items: center;
        span {
            padding: 0 0.8rem;
        }
        input[type="text"] {
            cursor: pointer;
            height: 4rem;
            padding: 0 2rem;
            background: #fff url(${calendarIcon}) no-repeat right 2rem center;
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: 0.8rem;
            outline: none;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
                system-ui, Roboto, "Helvetica Neue", "Segoe UI",
                "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                sans-serif;
        }
        .modal-calendar {
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
                system-ui, Roboto, "Helvetica Neue", "Segoe UI",
                "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                sans-serif;
            .react-datepicker__triangle {
                display: none;
            }
            .react-datepicker-wrapper {
                width: 24rem;
            }
            .react-datepicker__triangle {
                display: none;
            }
            .react-datepicker__header {
                padding: 1rem 0;
                border-bottom: 1px solid #dedede;
                background-color: #fff;
                .react-datepicker__current-month {
                    font-size: 1.6rem;
                    font-weight: 500;
                    line-height: 2rem;
                }
                .react-datepicker__day-names {
                    .react-datepicker__day-name {
                        width: 3rem;
                        line-height: 3rem;
                        font-size: 1.4rem;
                        color: #999;
                    }
                }
            }
            .react-datepicker__month-container {
                float: inherit;
            }
            .react-datepicker__month {
                .react-datepicker__day-name,
                .react-datepicker__day,
                .react-datepicker__time-name {
                    line-height: 3rem;
                    width: 3rem;
                    font-size: 1.4rem;
                }
            }
            .react-datepicker__day--selected,
            .react-datepicker__day--in-selecting-range,
            .react-datepicker__day--in-range,
            .react-datepicker__month-text--selected,
            .react-datepicker__month-text--in-selecting-range,
            .react-datepicker__month-text--in-range,
            .react-datepicker__quarter-text--selected,
            .react-datepicker__quarter-text--in-selecting-range,
            .react-datepicker__quarter-text--in-range,
            .react-datepicker__year-text--selected,
            .react-datepicker__year-text--in-selecting-range,
            .react-datepicker__year-text--in-range {
                background-color: ${({ theme }) => theme.colors.primary};
            }
            .react-datepicker__day--in-range,
            .react-datepicker__month-text--in-range,
            .react-datepicker__quarter-text--in-range,
            .react-datepicker__year-text--in-range {
                background-color: #8172d4;
            }
            .react-datepicker__year-read-view--down-arrow,
            .react-datepicker__month-read-view--down-arrow,
            .react-datepicker__month-year-read-view--down-arrow,
            .react-datepicker__navigation-icon::before {
                width: 6px;
                height: 6px;
                border-width: 2px 2px 0 0;
                border-color: #999;
                top: 8px;
            }
            .react-datepicker__day--outside-month {
                color: #999;
            }
        }
    `;
    const [startDate, setStartDate] = useState(props.value);
    const [endDate, setEndDate] = useState(props.value);

    return (
        <DateRangePicker>
            <ReactDatePicker
                selected={startDate === undefined ? new Date() : startDate}
                onChange={(date) => setStartDate(date)}
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dropdownMode="select"
                showMonthDropdown={props.showMonthDropdown}
                showYearDropdown={props.showYearDropdown}
                selectsStart
                calendarClassName="modal-calendar"
            />
            <span>-</span>
            <ReactDatePicker
                selected={endDate === undefined ? new Date() : endDate}
                onChange={(date) => setEndDate(date)}
                locale={ko}
                dateFormat="yyyy-MM-dd"
                dropdownMode="select"
                showMonthDropdown={props.showMonthDropdown}
                showYearDropdown={props.showYearDropdown}
                selectsEnd
                calendarClassName="modal-calendar"
            />
        </DateRangePicker>
    );
}
export default DateRangePicker;
