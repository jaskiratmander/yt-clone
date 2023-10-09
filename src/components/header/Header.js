import "./Header.css";
import "../icons/Icon";
import Icon from "../icons/Icon";
import Search from "./search/Search";
import Logo from "../icons/Logo";

const Header = ({ onMenuButtonClick }) => {
  return (
    <section className="header">
      <Icon onClick={onMenuButtonClick}>menu</Icon>
      <Logo />
      <Search />
      <Icon fill styles={["margin-right-auto"]}>
        keyboard_voice
      </Icon>
      <Icon>video_call</Icon>
      <Icon>notifications</Icon>
      <img
        src="https://yt3.ggpht.com/r6KEBpIrfFUb_M7xAFfcPygWDA_ShdKMdEOeioHrAoHhgo4wa-lW0orUbdZMobREot1ris2i=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="Profile settings"
        className="profile_image"
      ></img>
    </section>
  );
};

export default Header;
