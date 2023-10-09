import Item from "./content-item/Item";
import React from "react";
import "./ContentGrid.css";
import ItemSkeleton from "./content-item-skeleton/ItemSkeleton";

const dummyArray = Array(15).fill(null);

const ContentGrid = ({ queryData }) => {
  return (
    <div className="content-grid">
      {!queryData.data &&
        queryData.isLoading &&
        dummyArray.map((item, index) => <ItemSkeleton key={index} />)}
      {queryData.data &&
        queryData.data.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page.items
                .filter((item) => item.snippet.thumbnails.maxres)
                .map(({ id, snippet, contentDetails, statistics }) => (
                  <Item
                    key={id}
                    title={snippet.title}
                    publishInfo={snippet.publishedAt}
                    thumbnail={
                      snippet.thumbnails.maxres?.url ||
                      snippet.thumbnails.standard?.url ||
                      snippet.thumbnails.default?.url
                    }
                    channelName={snippet.channelTitle}
                    duration={contentDetails.duration}
                    views={statistics.viewCount}
                    channelId={snippet.channelId}
                  />
                ))}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ContentGrid;
