import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';

interface PaginationProps {
    limit: number;
    total: number;
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ limit, total, offset, setOffset }) => {
    const currentPage = offset ? Math.floor(offset / limit) + 1 : 1;
    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (page: number) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        setOffset((newPage - 1) * limit);
    };

    const getPages = () => {
        const pages = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage === 1) {
                pages.push(1, 2, 3);
            } else if (currentPage === totalPages) {
                pages.push(totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            }
        }

        return pages;
    };

    const pagesToShow = getPages();

    return (
        <div className={styles.container}>
           <button 
                onClick={() => handlePageChange(1)} 
                className={styles.backAll}
                disabled={currentPage <= 2}
            >
                {currentPage > 2 && <div className={styles.doubleArrowLeft}/>}
            </button>

            <button 
                onClick={() => handlePageChange(currentPage - 1)}
                className={styles.back}
                disabled={currentPage === 1}
            >
                {currentPage !== 1 && <div className={styles.arrowLeft}/>}
            </button>

            <div className={styles.btns}>
                {pagesToShow.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={page === currentPage ? styles.active : styles.btn}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button 
                onClick={() => handlePageChange(currentPage + 1)}
                className={styles.next}
                disabled={currentPage === totalPages}
            >
                {currentPage !== totalPages && <div className={styles.arrowRight}/>}
            </button>

            <button 
                onClick={() => handlePageChange(totalPages)}
                className={styles.nextAll}
                disabled={currentPage >= (totalPages - 1)}
            >
                {currentPage < (totalPages - 1) && <div className={styles.doubleArrowRight}/>}
            </button>
        </div>
    );
}

export default Pagination;
