import Home from './home'
import Pagenation from './pagenation';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

function Posts() {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const { data, isLoading, error } = useQuery([], () => axios.get('https://jsonplaceholder.typicode.com/posts'));

  if (isLoading) return 'Loading,,,'
  if (error) return 'Error Message: ' + error.message

  return (
    <div className="max-w-7xl max-h-full mx-auto px-4 py-2">
      <Home />
      <p className="flex justify-center top-20 my-20 font-bold text-5xl mx-auto">게시글 리스트</p>
      <label className="h-12 my-auto flex items-center">
        페이지 당 표시 게시물   
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
          className="h-8 mx-2 px-1 rounded-full border-[1px]"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <div className="h-12 my-auto flex f border-t-[1px] border-t-black border-b-[1px] py-3  justify-between">
        <span>제목</span>
        <span>글쓴이</span>
      </div>
      <div className="flex flex-col">
        { data && data.data.slice(offset, offset + limit).map(el =>
          <Link key={el.id} to={`/${el.id}`}
          state={
            {
              id: el.id,
              userId: el.userId,
              title: el.title,
              body: el.body, 
            }
          }>
            <li className="h-12 py-3 flex justify-between border-b-[1px]">
              <span className="justify-start">
                {el.title} 
              </span>
              <span className="justify-end">
                {el.userId}
              </span>
            </li>
          </Link>
          )
        }
      </div>
      <div className="py-4 flex justify-center">
        { data && 
          <Pagenation 
          total={data.data.length}
          limit={limit}
          page={page}
          setPage={setPage}
          />
        }
      </div>
    </div>
  )
}

export default Posts;