import styled from '@emotion/styled';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.aside`
  padding: 5px 20px;
  background-color: rgb(130, 10, 209);
  color: rgb(255, 255, 255);
  width: 200px;
  height: 100vh;
  flex-grow: 0;
  flex-shrink: 0;
`

const LogoWrapper = styled.div`
  text-align: center;
`

const PanelNav = styled.nav`
`

const NavLinkList = styled.ul`
  list-style: none;
  margin: unset;
  padding: unset;

  li {
    margin-top: 5px;
  }

  & & {
    padding-left: 2em;
  }

  & + & {
    margin-top: 1em;
  }
`

const Header: FC = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <p>
          <Link
            color="white"
            to="home"
          >
            Dashboard
          </Link>
        </p>
      </LogoWrapper>
      <PanelNav>
        <NavLinkList>
          <li>
            Users
            <NavLinkList>
              <li>
                <Link
                  color="white"
                  to="user"
                >
                  List
                </Link>
              </li>
              <li>
                <Link
                  color="white"
                  to="user/new"
                >
                  New
                </Link>
              </li>
            </NavLinkList>
          </li>
        </NavLinkList>
      </PanelNav>
    </SidebarWrapper>
  );
}

export default Header;