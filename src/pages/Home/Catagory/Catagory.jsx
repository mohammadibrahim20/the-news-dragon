import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Catagory = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {id && <h2>This category News: {categoryNews?.length} </h2>}
      {categoryNews?.map((news, i) => (
        <NewsCard key={i} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Catagory;
