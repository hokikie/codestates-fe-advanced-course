function Pagenation({ total, limit, page, setPage }) {
  const pageNum = Math.ceil(total / limit)
  return (
  <>
    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="w-10 h-10">
      &lt;
    </button>
    {
      Array(pageNum)
        .fill()
        .map((_, i) => (
          <button 
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
            className="w-10 h-10 focus:rounded-md focus:bg-[#442cdc] focus:text-white hover:bg-slate-100 hover:rounded-md"
          >
            {i + 1}
          </button>
        ))
    }
    <button onClick={() => setPage(page + 1)} disabled={page === pageNum} className="w-10 h-10">
      &gt;
    </button>
  </>
  )
}

export default Pagenation;