import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  column-gap: 0.5rem;
`;
const Li = styled.li`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

export const ColorList = ({ color }) => {
  return (
    <Ul>
      {color.map((item, index) => (
        <Li key={index} color={item}></Li>
      ))}
    </Ul>
  );
};