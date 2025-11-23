import styled from "@emotion/styled";

function CssTestPage() {
  return (
    <S.Container>
      <S.Child1>자식1</S.Child1>
      <S.Child2>자식2</S.Child2>
    </S.Container>
  );
}

export default CssTestPage;

const S = {
  Container: styled.div`
    width: 100px;
    height: 100px;
    background-color: #dddddd;
  `,
  Child1: styled.div`
    width: 100%;
    height: 100%;
    background-color: #d08787;
  `,
  Child2: styled.div`
    width: 30px;
    height: 30px;
    background-color: #96d087;
  `,
};
