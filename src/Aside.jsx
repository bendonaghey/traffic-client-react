import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Aside = ({ collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange }) => {

  const [locationA, setLocationA] = useState("");
  const [locationB, setLocationB] = useState("");

  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 16,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          TRAFFIC CLIENT
        </div>


      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu
            title='Search Traffic'
            icon={<AiFillCar />}
            defaultOpen={true}
          >
            <Form style={{ paddingRight: "20px" }}>
              <Form.Group controlId="locationA">
                <Form.Label>Location A</Form.Label>
                <Form.Control
                  value={locationA}
                  type="text"
                  placeholder="Enter a Location"
                  onChange={e => setLocationA(e.target.value)}
                  defaultValue="Derry"
                />
              </Form.Group>

              <Form.Group controlId="locationB">
                <Form.Label>Location B</Form.Label>
                <Form.Control
                  value={locationB}
                  type="text"
                  placeholder="Enter a Location"
                  onChange={e => setLocationB(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
               </Button>
            </Form>
          </SubMenu>

          {/* Add More Here */}

        </Menu>



        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}>components</MenuItem>
        </Menu>

      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;