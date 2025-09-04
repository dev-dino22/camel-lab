import styled from "@emotion/styled";
import { useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  opened?: boolean;
  onClose: () => void;
  onUnmount: () => void;
};

function Modal({ opened = true, onClose, onUnmount }: Props) {
  const modalRoot = document.querySelector("#modal") as HTMLElement;
  const [hi, setHi] = useState("hi");

  return ReactDOM.createPortal(
    // <>
    //   {opened ? (
    //     <>
    //       <S.BackDrop onClick={() => onClose()} />
    //       <S.Container>
    //         <div>{hi}</div>
    //         <button onClick={() => setHi('hiiii')}>버튼</button>
    //         <button onClick={() => onUnmount()}>언마운트</button>
    //         <button onClick={() => onClose()}>닫기</button>
    //       </S.Container>
    //     </>
    //   ) : null}
    // </>,
    <>
      {opened && (
        <>
          <S.BackDrop onClick={() => onClose()} />
          <S.Container>
            <div>{hi}</div>
            <button onClick={() => setHi("hiiii")}>버튼</button>
            <button onClick={() => onUnmount()}>언마운트</button>
            <button onClick={() => onClose()}>닫기</button>
          </S.Container>
        </>
      )}
    </>,
    modalRoot
  );
}

export default Modal;

const S = {
  BackDrop: styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(1, 1, 1, 0.2);
    position: fixed;
  `,

  Container: styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
