import React from "react";
import {
  RecentWrap,
  Header,
  HR,
  Table,
  TableHRow,
  TableHData,
  TableBRow,
  TableBData,
  MidTable,
  MidTableRow,
  MidTableDataLeft,
  MidTableDataRight,
} from "./Table.Elements";

import { rOrderData } from "./TableData";

function SCTable() {
  return (
    <RecentWrap>
      <Header>Latest Orders</Header>
      <HR />
      <Table>
        <TableHRow>
          <TableHData>Order ID</TableHData>
          <TableHData>Customer</TableHData>
          <TableHData>Location</TableHData>
          <TableHData>Order Items</TableHData>
          <TableHData>Total Price</TableHData>
          <TableHData>Supplier</TableHData>
          <TableHData>Status</TableHData>
          <TableHData>Delivered Time</TableHData>
        </TableHRow>

        {rOrderData.map((item, index) => {
          return (
            <TableBRow key={index}>
              <TableBData>#Kamino{item.orderId}</TableBData>
              <TableBData>{item.customer}</TableBData>
              <TableBData>{item.Location}</TableBData>
              <TableBData>{item.OrderItems}</TableBData>
              <TableBData>LKR {item.price}</TableBData>
              <TableBData>{item.supplier}</TableBData>
              <TableBData>{item.Status}</TableBData>
              <TableBData>{item.dTime}</TableBData>
            </TableBRow>
          );
        })}
      </Table>

      {rOrderData.map((item, index) => {
        return (
          <MidTable key={index}>
            <MidTableRow>
              <MidTableDataLeft>Order ID</MidTableDataLeft>
              <MidTableDataRight>#Kamino{item.orderId}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Customer</MidTableDataLeft>
              <MidTableDataRight>{item.customer}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Location</MidTableDataLeft>
              <MidTableDataRight>{item.Location}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Order Items</MidTableDataLeft>
              <MidTableDataRight>{item.OrderItems}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Total Price</MidTableDataLeft>
              <MidTableDataRight>LKR {item.price}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Supplier</MidTableDataLeft>
              <MidTableDataRight>{item.supplier}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Status</MidTableDataLeft>
              <MidTableDataRight>{item.Status}</MidTableDataRight>
            </MidTableRow>
            <MidTableRow>
              <MidTableDataLeft>Delivery Time</MidTableDataLeft>
              <MidTableDataRight>{item.dTime}</MidTableDataRight>
            </MidTableRow>
          </MidTable>
        );
      })}
    </RecentWrap>
  );
}

export default SCTable;
