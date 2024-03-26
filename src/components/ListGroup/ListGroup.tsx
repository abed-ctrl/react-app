import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

// this will return a React component List styled
const List = styled.ol`
  padding-left: 50px;
`;

// we can style a component based on state variable. eg: selectedIndex
interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  color: ${(props) => (props.active ? "#ffffff" : "#4F4F4F")} ;
  padding-left: 16px;
  margin-top: 35px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  background: ${(props) => (props.active ? "#0d6efd" : "none")};

  &:before {
    content: '';
    display: block;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 2px solid #ddd;
    position: absolute;
    top: -12px;
    left: -46px;
    background: ${(props) => (props.active ? "#0d6efd" : "none")};
    z-index: -1;
  }

  &:nth-child(odd)::before{
    border-color: #0BAD02;
  }
  
  &:nth-child(even)::before{
    border-color: #2378D5;
  }
}
`;

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* we can access to list-group like this styles.list-group because of - is not accepted in js this why we use styles['list-group']*/}
      {/* or we can use CamelCasing in css file*/}
      {/* we use [ ] and join method to add many classes*/}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
