import { useState } from "react";
const PaginationBtn = ({ totalPages }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const [selectedPage, setSelectedPage] = useState(1);

  const renderPageBtns = () => {
    return pages.map((page) => {
      return (
        <button
          style={{
            backgroundColor: selectedPage === page ? "lightgray" : "ivory",
          }}
          onClick={() => {
            setSelectedPage(page);
          }}
          key={page}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <ul>
      <button onClick={() => setSelectedPage(1)}>&lt;&lt;</button>
      {renderPageBtns()}
      <button onClick={() => setSelectedPage(totalPages)}>&gt;&gt;</button>
    </ul>
  );
};

export default PaginationBtn;
