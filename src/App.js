import Posts from './posts.js';
import Post from './post.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path=":post_id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
