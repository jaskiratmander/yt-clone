import ContentGrid from "./content/ContentGrid";
import { useInfiniteQuery } from "react-query";
import { createUrl } from "../../lib/helper";
import CategoriesSlider from "./slider/CategoriesSlider";
import React, { useRef } from "react";

import "./Main.css";

async function fetchData({ pageParam }) {
  let urlConfig = {
    part: "snippet,contentDetails,statistics,player",
    chart: "mostPopular",
    maxResults: 15,
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  };
  if (pageParam) urlConfig.pageToken = pageParam;
  let videosUrl = createUrl(process.env.REACT_APP_GOOGLE_VIDEOS_URL, urlConfig);
  let res = await fetch(videosUrl);
  let data = await res.json();
  return data;
}

const Main = ({ isFullWidth }) => {
  const contentQuery = useInfiniteQuery(`FETCH_DATA`, fetchData, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextPageToken;
    },
  });

  const mainRef = useRef(null);
  const { data, fetchNextPage } = contentQuery;

  const handleScroll = () => {
    const main = mainRef.current;
    if (
      Math.floor(main.scrollTop) + Math.floor(main.clientHeight) >
      Math.floor(main.scrollHeight) * 0.7
    ) {
      let nextPageToken = data.pages.slice(-1)[0].nextPageToken;
      if (nextPageToken && !contentQuery.isFetchingNextPage)
        fetchNextPage({ pageParam: nextPageToken });
    }
  };

  return (
    <section
      className={`main ${isFullWidth && "main--fullWidth"}`}
      ref={mainRef}
      onScroll={handleScroll}
    >
      <CategoriesSlider />
      <ContentGrid queryData={contentQuery} />
    </section>
  );
};

export default Main;
