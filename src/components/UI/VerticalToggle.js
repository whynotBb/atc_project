import styled from "styled-components";
import IconToggleOn from "../../assets/images/toggle_on.svg";
import IconToggleOff from "../../assets/images/toggle_off.svg";

function VerticalToggle({ id, label1, label2, defaultChecked }) {
    const Toggle = styled.div`
        display: inline-block;
        input {
            display: none;
            &:checked {
                & + label {
                    span {
                        &:nth-child(1) {
                            background: ${({ theme }) =>
                                theme.colors.primaryLight};
                            color: #fff;
                        }
                        &:nth-child(2) {
                            background: none;
                            color: #eeeeee;
                        }
                    }
                }
            }
        }
        label {
            display: block;
            width: 4rem;
            height: 7.8rem;
            border-radius: 2rem;
            background-color: rgba(34, 34, 34, 0.85);
            cursor: pointer;
            position: relative;
            span {
                position: absolute;
                display: block;
                font-size: 1.4rem;
                height: 3.9rem;
                width: 100%;
                border-radius: 50%;
                text-align: center;
                line-height: 3.9rem;
                transition: all 0.3s;
                &:nth-child(1) {
                    background: none;
                    color: #eeeeee;
                    top: -0.5px;
                }
                &:nth-child(2) {
                    background: ${({ theme }) => theme.colors.primaryLight};
                    color: #fff;
                    bottom: -1px;
                }
            }
        }
    `;
    return (
        <Toggle>
            <input type="checkbox" id={id} defaultChecked={defaultChecked} />
            <label htmlFor={id}>
                <span>{label1}</span>
                <span>{label2}</span>
            </label>
        </Toggle>
    );
}
export default VerticalToggle;
