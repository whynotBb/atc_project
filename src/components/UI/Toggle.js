import styled from "styled-components";
import IconToggleOn from "../../assets/images/toggle_on.svg";
import IconToggleOff from "../../assets/images/toggle_off.svg";
import disabledIcon from "../../assets/images/check-box-disabled.svg";

function Toggle({ id, label, defaultChecked }) {
    const Toggle = styled.div`
        display: inline-block;
        input {
            display: none;
            &:checked {
                & + label {
                    background-image: url(${IconToggleOn});
                }
            }
        }
        label {
            display: inline-block;
            cursor: pointer;
            height: 2rem;
            line-height: 2rem;
            padding-left: 6.2rem;
            background-image: url(${IconToggleOff});
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 4rem 2rem;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 2rem;
            color: ${({ theme }) => theme.colors.black};
            text-align: left;
            transition: all 0.3s;
        }
    `;
    return (
        <Toggle>
            <input type="checkbox" id={id} defaultChecked={defaultChecked} />
            <label htmlFor={id}>{label}</label>
        </Toggle>
    );
}
export default Toggle;
