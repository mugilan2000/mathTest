import React from 'react'
import { Link } from 'react-router-dom'
import leftIcon from '../Accessories/double-arrow-left.svg'
import rightIcon from '../Accessories/double-arrow-right.svg'
import '../Css/Pagination.css'

const Pagination = ({currentPage, setCurrentPage, recordsPerPage, firstIndex, lastIndex, npage}) => {

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
  return (
    <>
    <div>
        <Link onClick={prePage}><img src={leftIcon} className='prev'/></Link>
        <Link onClick={nextPage}><img src={rightIcon} className='next'/></Link>
    </div>
    </>
  )
}

export default Pagination