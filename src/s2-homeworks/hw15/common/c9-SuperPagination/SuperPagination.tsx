import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination';
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
   {
     page,
     itemsCountForPage,
     totalCount,
     onChange,
     id = 'hw15',
   }
) => {

  const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

  const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage)
  }

  const onChangeSelect = (id: number) => {
    // пишет студент
    onChange(page, id)
  }

  return (
     <div className={s.pagination}>
       <Pagination
          id={id + '-pagination'}
          sx={{
            // стили для Pagination // пишет студент
          }}
          color="primary"
          shape="rounded"
          page={page}
          count={lastPage}
          onChange={onChangeCallback}
          hideNextButton
          hidePrevButton
       />

       <div className={s.container}>
        <span className={s.text1}>
          показать
        </span>

         <SuperSelect
            id={id + '-pagination-select'}
            value={itemsCountForPage}
            //st={{width: "50px", padding: "4px 6px", appearance: "none"}}
            options={[
              {id: 4, value: 4},
              {id: 7, value: 7},
              {id: 10, value: 10},
            ]}
            onChangeOption={onChangeSelect}
         />

         <span className={s.text2}>
          строк в таблице
        </span>
       </div>
     </div>
  )
}

export default SuperPagination