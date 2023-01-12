import { NavAll, NavItem, NavButton } from './Css.style';

function Navigation () {

  return (
    <NavAll>
      <NavItem>
        ChuglyMonster
      </NavItem>
      <NavItem>
        <NavButton>SIGN OUT</NavButton>
      </NavItem>
    </NavAll>
  );
}

export default Navigation;
