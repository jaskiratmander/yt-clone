import "./ItemSkeleton.css";

const ItemSkeleton = () => {
  return (
    <div className="item_skeleton">
      <div className={`image_wrapper_skeleton`}></div>
      <button className={`channel_image_btn_wrapper_skeleton`}></button>
      <div className="details_wrapper_skeleton"></div>
      <div className={`info_wrapper_skeleton`}></div>
    </div>
  );
};

export default ItemSkeleton;
