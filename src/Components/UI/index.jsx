import styled from "styled-components";

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconTheme = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.content};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
    :nth-child(1n+2) {
    margin-top: 32px;
  };
  }
`;

export const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detalhe = styled.span`
  color: #41d3be;
  font-size: 24px;
`;

export const ThemeButton = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`