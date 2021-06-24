import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/icons+logos/pinterest-icon.svg";
import bell from "../../images/icons+logos/bell-icon.svg";
import message from "../../images/icons+logos/message-icon.svg";
// import user from "../../images/icons+logos/user-icon.svg";
import user from "../../images/angel-photo.jpg";
import menu from "../../images/icons+logos/dropdown-icon.svg";
import Search from "../search/Search";

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const Logo = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
const LogoButton = styled.div`
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background-color: #efefef;
  }
`;

const Buttons = styled.div`
  display: flex;
  height: 48px;
  min-width: 60px;
  padding-left: 9px;
  padding-right: 9px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomeButton = styled(Buttons)`
  background-color: #111111;
  a {
    font-weight: 700;
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const TodayButton = styled(Buttons)`
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #efefef;
  }
`;

const IconButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background-color: #efefef;
  }
`;
const UserButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background-color: #efefef;
  }
`;
const MenuButton = styled.div`
  display: flex;
  height: 24px;
  min-width: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background-color: #efefef;
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <Logo>
        <LogoButton>
          <img src={logo} alt="" style={{ width: 24 }} />
        </LogoButton>
      </Logo>

      <HomeButton>
        <NavLink exact to={"/"}>
          Home
        </NavLink>
      </HomeButton>
      <TodayButton>
        <NavLink exact to={"/"}>
          Today
        </NavLink>
      </TodayButton>
      <Search />
      <IconButtons>
        <img src={bell} alt="" />
      </IconButtons>
      <IconButtons>
        <img src={message} alt="" />
      </IconButtons>
      <UserButton>
        <div
          style={{
            width: 24,
            height: 24,
            backgroundColor: "#efefef",
            borderRadius: 24,
          }}
        >
          <img src={user} alt="" style={{ width: 24, borderRadius: 24 }} />
        </div>
      </UserButton>
      <MenuButton>
        <img src={menu} alt="" style={{ width: 12, height: 12 }} />
      </MenuButton>
    </HeaderArea>
  );
};

export default Header;
