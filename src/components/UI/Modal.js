import styled from "styled-components";
import IconX from "../../assets/images/modal_close.svg";
import Button from "./Button";
import { useEffect } from "react";

function Modal({ title, children, close }) {
    const ModalWrap = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(34, 34, 34, 0.55);
        z-index: 200;
    `;
    const Modal = styled.div`
        width: 38rem;
        max-height: 74rem;
        background: #fff;
        border-radius: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .header {
            padding: 2.8rem 3rem 0rem;
            position: relative;
            h3 {
                flex: 1;
                font-size: 2rem;
                line-height: 2.4rem;
                font-weight: bold;
                padding-bottom: 2rem;
                padding-right: 4rem;
                border-bottom: 2px solid ${({ theme }) => theme.colors.black};
                ${({ theme }) => theme.common.ellipsis};
            }
            .closeX {
                width: 2.4rem;
                height: 2.4rem;
                position: absolute;
                top: 3rem;
                right: 3rem;
                background: url(${IconX}) no-repeat center;
                cursor: pointer;
            }
        }
        .body {
            padding: 2.8rem 3rem 2.8rem;
            max-height: 53rem;
            overflow-y: auto;
        }
        .footer {
            padding: 2.8rem 7rem 4rem;
        }
    `;

    useEffect(() => {
        const bodyWrap = document.getElementById("bodyWrap");

        const disableScroll = () => {
            bodyWrap.style.overflow = "hidden";
            bodyWrap.style.height = "100vh";
        };

        const enableScroll = () => {
            bodyWrap.style.overflow = "auto";
            bodyWrap.style.height = "auto";
        };

        // 컴포넌트가 마운트될 때 스크롤을 비활성화합니다.
        disableScroll();

        // 컴포넌트가 언마운트될 때 다시 스크롤을 활성화합니다.
        return () => {
            enableScroll();
        };
    }, []);
    return (
        <ModalWrap>
            <Modal>
                <div className="header">
                    <h3>{title}</h3>
                    <span className="closeX" onClick={close}></span>
                </div>
                <div className="modalBody">{children}</div>
            </Modal>
        </ModalWrap>
    );
}
export default Modal;
