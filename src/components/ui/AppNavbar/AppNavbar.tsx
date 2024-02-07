import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from '@nextui-org/react';
import { Brackets } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavbar.css';

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Dashboard', 'Users'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">React CRUD</p>
          <Brackets />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/">Dashboard</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/users">Users</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
