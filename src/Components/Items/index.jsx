import React from "react";
import styled from "styled-components";
import ImageFilter from "../ImageFilter";
import Item from "../Item";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0 10px 0;
`;

export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
