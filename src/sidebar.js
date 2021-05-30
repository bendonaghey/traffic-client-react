import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Sidebar() {
    return (
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <SubMenu title="Components">
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    )
}
export default Sidebar;
