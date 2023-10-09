import styled from "styled-components";
import deselectedIcon from "../../assets/images/check-box.svg";
import selectedIcon from "../../assets/images/check-box-selected.svg";
import disabledIcon from "../../assets/images/check-box-disabled.svg";

function Checkbox({ id, label, defaultChecked, disabled }) {
    const CheckBox = styled.div`
        display: inline-block;
        input {
            display: none;
            &:checked {
                & + label {
                    background-image: url(${selectedIcon});
                }
            }
            &:disabled {
                & + label {
                    cursor: default;
                    background-image: url(${disabledIcon});
                }
            }
        }
        label {
            display: inline-block;
            cursor: pointer;
            height: 2.2rem;
            line-height: 2.2rem;
            padding-left: 2.8rem;
            background-image: url(${deselectedIcon});
            background-repeat: no-repeat;
            background-position: left center;
            color: ${({ theme }) => theme.colors.gray1};
            text-align: left;
        }
    `;
    return (
        <CheckBox>
            <input
                type="checkbox"
                id={id}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
        </CheckBox>
    );
}
export default Checkbox;
