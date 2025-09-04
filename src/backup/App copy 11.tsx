import { BasicModal } from "@dev-dino22/modal-components";
import { useEffect, useState } from "react";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenModal = () => {
    setIsOpened(true);
  };
  const handleCloseModal = () => {
    setIsOpened(false);
  };
  return (
    <>
      <button onClick={handleOpenModal}>++++</button>$
      {isOpened && (
        <BasicModal
          modalPosition="bottom"
          onClose={() => {
            console.log("닫힘 클릭됨");
            handleCloseModal();
          }}
          closeType="none"
        >
          123123
        </BasicModal>
      )}
    </>
  );
}
