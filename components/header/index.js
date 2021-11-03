import style from "./header.module.css";
import UrbanicFarm from "../icons/urbanicFarm";
import Menu from "../menu";
export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <UrbanicFarm />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
