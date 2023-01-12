import { NavAll, NavItem, NavButton } from './Css.style';

function Navigation () {

  return (
    <NavAll>
      <NavItem>
        <strong>ChuglyMonster</strong>
      </NavItem>
      <NavItem>
        <NavButton>SIGN OUT</NavButton>
      </NavItem>
    </NavAll>
  );
}

export default Navigation;
