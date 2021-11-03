import style from "./menu.module.css";
import Pocket from "../icons/pocket";
export default function Menu() {
  return (
    <div className={style.mainContainer}>
      <div className={style.containerFirst}>
        <a className={style.items} href="#">
          Home
        </a>
        <a className={style.items} href="#">
          Services
        </a>
        <a className={style.items} href="#">
          Map
        </a>
        <a className={style.items} href="#">
          Enterprise
        </a>
        <a className={style.items} href="#">
          Contact
        </a>
      </div>
      <div className={style.containerSecond}>
        <a className={style.items} href="#">
          Login
        </a>
        <a className={style.items} href="#">
          Register
        </a>
        <button className={style.pocketButton}>
          <Pocket />
        </button>
        <button className={style.addHubButton}>+ ADD HUB</button>
      </div>
    </div>
  );
}
