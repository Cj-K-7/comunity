import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggle } from "../redux/slices/darkmode";
import { RootState } from "../redux/store";

function Navigation() {
  const darkmode = useAppSelector(state => state.darkmode)
  const dispatch = useAppDispatch();
  const onDarkmodeBtnClick = () =>{
    dispatch(toggle())
  }

  return (
    <div>
      <main>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <a>Community</a>
            </Link>
          </li>
        </ul>
      </main>
      <section>
        <button onClick={onDarkmodeBtnClick}>Dark mode</button>
      </section>
    </div>
  );
}

export default Navigation;
