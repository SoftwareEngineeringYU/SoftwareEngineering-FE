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

  const arrowLeftEnd = () =>{
    return(
        {totalPages>5 && selectedPage>5 ? <button value={"<<"} onClick={()=>setSelectedPage(1)}></button>:null};
    );
  };

  return (
    <ul>
        {renderPageBtns()}
    </ul>
  );
};

export default PaginationBtn;
