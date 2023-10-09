import "./Icon.css";

const Icon = ({ children, fill, onClick }) => {
  let classes = `material-symbols-outlined icon_${children}`;
  if (fill) classes += " icon-fill";
  return (
    <button className="nav_btn" onClick={onClick}>
      <span className={classes}>{children}</span>
    </button>
  );
};

export default Icon;
