import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { darkmodeToggle } from "../redux/slices/darkmode";


function Navigation() {
  const darkmode = useAppSelector(state => state.darkmode)
  const dispatch = useAppDispatch();
  const onDarkmodeBtnClick = () =>{
    dispatch(darkmodeToggle())
  }

  return (
    <div className='navi'>
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
