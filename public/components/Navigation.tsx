import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const NaviBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NaviMenus = styled.section`
  & ul {
    display: flex;
    flex-direction: row;
  }
  & ul li {
    margin: 10px;
    font-size: 1.5em;
    font-weight: 500;
  }
`;

const UtillMenus = styled.section`
  margin : 5px;
`;

interface INaviProps {
  setDark: Dispatch<SetStateAction<boolean>>;
}

function Navigation({ setDark }: INaviProps) {
  const onDarkmodeBtnClick = () => {
    setDark((Bool) => !Bool);
  };

  return (
    <>
      <NaviBar>
        <NaviMenus>
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
        </NaviMenus>
        <UtillMenus>
          <button onClick={()=>{}}>Log In/Out</button>
          <button onClick={onDarkmodeBtnClick}>Dark mode</button>
        </UtillMenus>
      </NaviBar>
    </>
  );
}

export default Navigation;
