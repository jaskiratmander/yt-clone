import "./Item.css";
import {
  processDuration,
  calcDate,
  convertNum,
  createUrl,
} from "../../../../lib/helper";
import { useQuery } from "react-query";
import ItemSkeleton from "../content-item-skeleton/ItemSkeleton";

const Item = ({
  thumbnail,
  channelId,
  title,
  publishInfo,
  channelName,
  duration,
  views,
}) => {
  let timePeriod =
    calcDate(publishInfo) > 1
      ? calcDate(publishInfo) + " days ago"
      : calcDate(publishInfo) + " day ago";

  const channelsUrl = createUrl(process.env.REACT_APP_GOOGLE_CHANNELS_URL, {
    part: "snippet",
    id: channelId,
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const { data } = useQuery(`FETCH_CHANNEL_${channelId}`, async () => {
    let res = await fetch(channelsUrl);
    let data = await res.json();
    return data;
  });

  if (!data) return <ItemSkeleton />;
  let channelImageUrl = data?.items[0].snippet.thumbnails.default?.url;

  return (
    <div className="item">
      <div className={`image_wrapper`}>
        <img src={thumbnail} alt="video thumbnail" className="item_image"></img>
        <span className="duration_wrapper">{processDuration(duration)}</span>
      </div>
      <button className={`channel_image_btn_wrapper`}>
        <img
          src={channelImageUrl}
          alt="Channel profile"
          className="channel_image"
        ></img>
      </button>
      <div className="details_wrapper">
        <p className={`text_wrapper`}>{title}</p>
        <button className="three-dot">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </button>
      </div>
      <div className={`info_wrapper`}>
        <p>{channelName}</p>
        <div className="statistics">
          <p>{convertNum(views)} views</p>
          <span className="item_dot">.</span>
          <p>{timePeriod}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
