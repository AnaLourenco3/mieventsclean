import styled from "styled-components";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Button
        key={i}
        active={currentPage === i}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Button>
    );
  }

  return <PaginationWrapper>{pages}</PaginationWrapper>;
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? "#c9952c" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: transparent;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;
