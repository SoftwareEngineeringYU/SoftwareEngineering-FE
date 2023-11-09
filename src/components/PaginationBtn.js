import StyledPaginationBtn from "styles/components/StyledPaginationBtn";


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
        <StyledPaginationBtn>
        <button class="pagingNumBtn"
          style={{
            backgroundColor: selectedPage === page ? "black" : "white",
            color: selectedPage === page ? "white" : "black",
          }}
          onClick={() => {
            setSelectedPage(page);
          }}
          key={page}
        >
          {page}
        </button>
        </StyledPaginationBtn>
      );
    });
  };

  return (
    <StyledPaginationBtn>
      <ul id="paging">
        {totalPages<2?null:<button class="pagingBtn"           

          onClick={() => setSelectedPage(1)}>&lt;&lt;</button>}
        {renderPageBtns()}
        {totalPages<2?null:<button class="pagingBtn" onClick={() => setSelectedPage(totalPages)}>&gt;&gt;</button>}
      </ul>
    </StyledPaginationBtn>
  );
};

export default PaginationBtn;
