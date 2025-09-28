import React, {useEffect, useState,} from "react";
import axios from "axios"
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = ({articles,setArticles, category}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
const fetchAllNews = async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&apiKey=8053c96a6d7645c687415f34d736a1e4`
      );
      setArticles(res.data.articles)
      console.log(res.data.articles)

    } catch (error) {
     
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch when page or category changes
  useEffect(() => {
    fetchAllNews();
  }, [page, category]);

  // Reset when category changes
  useEffect(() => {
    setArticles([]);
  }, [category]);


  return(
     <>
     <div className="bg-gray-900">
    <h1 className="text-center text-3xl font-semibold pt-6 mb-4 text-white">Top-Headlines - {category}</h1>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4">
      {articles.map((article,index)=> {
             return <NewsItem key ={index} article={article}/>
})}
            </div>
          
        
    </div>
        
    </>
  )
}

export default News;


