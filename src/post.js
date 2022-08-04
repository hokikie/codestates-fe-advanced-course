import Home from './home'
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";

function Post() {
  let { post_id } = useParams()
  const { data, isLoading, isFetching, error } = useQuery([], () => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`), {keepPreviousData: true});
  const location = useLocation()
  const content = location.state

  if (isLoading) return 'Loading,,,'
  if (error) return 'Error Message: ' + error.message

  return (
    <div className="max-w-7xl max-h-full mx-auto px-4 py-2">
      <Home />
      { content && 
        <>
          <p className="text-right text-sm text-gray-500 mt-2">유저명 {content.userId}</p>
          <div className="flex flex-col items-center my-20">
            <p className="text-[#442cdc] text-2xl font-[900]">
              {content.title} 
            </p>
            <p className="my-4 text-md">
              {content.body} 
            </p>
          </div>
        </>
      }
      <p>댓글 { isFetching ? '가져오는중...' :  `${data.data.length}개`}</p>
      <div className="border-[1px] rounded-md p-4 my-2">
        { !isFetching && data.data.map(el => 
          <li key={el.id} className="flex flex-col py-2">
            <p className="font-semibold text-slate-600">{el.name}</p>
            <p>{el.body}</p>
          </li>
          )
        }
      </div>
    </div>
  )
}

export default Post;