import React,{useState} from "react";
import '../../../assets/styles/finding-style.css'
import ReactPaginate from 'react-paginate';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

export const  FoundRepo = ({repository, length, nextPage}) => {

    const [currentPage, setCurrentPage] = useState({first:1, last:length<4?length:4 })
    
    const handlePageClick = (event) => {
        nextPage(event.selected+1)
        const curr = event.selected*4+1;
        setCurrentPage({ first:curr, last:curr+3<length?curr+3:length })
    }
    
    return(

        <div className="repository">
            <h1>{`Repositories (${length})`}</h1>
            <div className="repository_container">
                {repository.map( el =>
                    <div className="repository_item" key={ el.id }>
                        <a href={ el.html_url } target="_blank" className="repository_item_name">{ el.name }</a>
                        <div className="repository_item_desc">{ el.description }</div>
                    </div>
                )} 
            </div>
            <div className="paginator">
                <div className="paginator_pages">{`${ currentPage.first }-${ currentPage.last } of ${ length } items`}</div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<IoIosArrowForward/>}
                    previousLabel={<IoIosArrowBack/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={Math.ceil(length/4)}                    
                    renderOnZeroPageCount={null}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </div>
    )
}
