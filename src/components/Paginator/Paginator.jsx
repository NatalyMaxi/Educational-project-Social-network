import React from 'react';
import classes from './Paginator.module.css';

const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let newCurrentPage = props.currentPage;
   let beginningSlicedPages = ((newCurrentPage - 5) < 0) ? 0 : newCurrentPage - 5;
   let endSlicedPages = newCurrentPage + 5;
   let slicedPages = pages.slice(beginningSlicedPages, endSlicedPages);

   return (
      <div className={classes.pages}>
         {slicedPages.map((page) => {
            return (
               <span
                  key={page}
                  className={props.currentPage === page ?
                     `${classes.page} ${classes.page_active}` :
                     `${classes.page} `}
                  onClick={(evt) => { props.onPageChanget(page) }}
               >
                  {page}
               </span>
            )
         })}
      </div>

   );
};

export default Paginator;