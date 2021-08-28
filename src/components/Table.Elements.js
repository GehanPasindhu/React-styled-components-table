import styled from "styled-components";

export const RecentWrap = styled.div`
  margin: 20px 20px;
  display: block;
  align-items: center;
  padding: 10px 50px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 1px 6px 1px rgb(69 65 78 / 20%);

  :after,
  :before {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1100px) {
    max-width: auto;
    width: auto;
    margin: 10px;
  }

  @media screen and (max-width: 768px) {
    max-width: auto;
    width: auto;
    margin: 20px;
    padding: 15px;
    padding-bottom: 30px;
  }
`;

export const Header = styled.h3`
  display: block;
  margin: 10px auto;
  font-size: 30px;
  background: transparent;
`;

export const HR = styled.hr`
  color: #dcdcdc;
  opacity: 0.4;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media screen and (max-width: 1100px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableHRow = styled.tr`
  text-align: left;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const TableHData = styled.th`
  border-top: 1px solid #ddd;
  padding: 8px;
  background: black;
  color: #ffffff;
`;

export const TableBRow = styled.tr`
  ::nth-child(even) {
    background: #f2f2d2;
  }

  :hover {
    background: #ddd;
  }
`;

export const TableBData = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px;
`;

export const MidTable = styled.div`
  display: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    display: grid;
    align-items: center;
    grid-gap: 16px;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const MidTableRow = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

export const MidTableDataLeft = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MidTableDataRight = styled.td`
  flex-grow: 1;
  text-align: right;
  z-index: 1;
  text-transform: capitalize;
`;
