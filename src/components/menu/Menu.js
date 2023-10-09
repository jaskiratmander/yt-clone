import Footer from "./footer/Footer";
import MenuItem from "./menu-item/MenuItem";
import "./Menu.css";

const Menu = ({ toggleState }) => {
  return (
    <section className={`menu ${toggleState === "close" && "close"}`}>
      {toggleState === "close" && (
        <>
          <MenuItem iconName="home" text="Home" fill close />
          <MenuItem iconName="slow_motion_video" text="Shorts" close />
          <MenuItem iconName="subscriptions" text="Subscriptions" close />
          <MenuItem iconName="video_library" text="Library" close />
        </>
      )}
      {toggleState === "open" && (
        <>
          <div className="menu_items_wrapper">
            <MenuItem iconName="home" text="Home" fill active />
            <MenuItem iconName="slow_motion_video" text="Shorts" />
            <MenuItem iconName="subscriptions" text="Subscriptions" />
          </div>
          <div className="menu_items_wrapper">
            <MenuItem iconName="video_library" text="Library" />
            <MenuItem iconName="history" text="History" />
            <MenuItem iconName="slideshow" text="Your videos" />
            <MenuItem iconName="watch_later" text="Watch later" />
            <MenuItem iconName="thumb_up" text="Liked videos" />
          </div>
          <div className="menu_items_wrapper">
            <p className="menu-sub-heading">Subscriptions</p>
            <MenuItem iconName="music_note" text="Music" />
            <MenuItem iconName="sports_soccer" text="Sports" />
            <MenuItem iconName="sports_esports" text="Gaming" />
            <MenuItem iconName="theaters" text="Music & Shows" />
          </div>
          <div className="menu_items_wrapper">
            <p className="menu-sub-heading">Explore</p>
            <MenuItem iconName="local_fire_department" text="Trending" />
            <MenuItem iconName="music_note" text="Music" />
            <MenuItem iconName="theaters" text="Movies & Shows" />
            <MenuItem iconName="live_tv" text="Live" />
            <MenuItem iconName="sports_esports" text="Gaming" />
            <MenuItem iconName="newspaper" text="News" />
            <MenuItem iconName="sports_soccer" text="Sports" />
            <MenuItem iconName="tips_and_updates  " text="Learning" />
            <MenuItem iconName="styler" text="Fashion & Beauty" />
          </div>
          <div className="menu_items_wrapper">
            <p className="menu-sub-heading">More from YouTube</p>
            <MenuItem iconName="home" text="YouTube Premium" />
            <MenuItem iconName="slow_motion_video" text="Creator Studio" />
            <MenuItem iconName="subscriptions" text="YouTube Music" />
            <MenuItem iconName="subscriptions" text="YouTube Kids" />
            <MenuItem iconName="subscriptions" text="YouTube TV" />
          </div>
          <div className="menu_items_wrapper">
            <MenuItem iconName="settings" text="Settings" />
            <MenuItem iconName="report" text="Report history" />
            <MenuItem iconName="help" text="Help" />
            <MenuItem iconName="feedback" text="Send feedback" />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default Menu;
