import "./MenuItem.css";

const MenuItem = ({ iconName, text, fill, active, close }) => {
  return (
    <div
      className={`menu-item ${active ? "menu-active" : ""} ${
        close && "close_menu_item"
      } `}
    >
      <span className={`material-symbols-outlined ${fill ? "icon-fill" : ""} `}>
        {iconName}
      </span>
      <p className="menu-item_text">{text}</p>
    </div>
  );
};

export default MenuItem;
