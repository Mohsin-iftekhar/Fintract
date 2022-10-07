import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Image from 'next/image';
import styles from '/styles/Home.module.css'
export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Image 
        src="/finlogo.png"
        height={80}
        width={50}
        />
2
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className='justify-content-center'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 mx-5 justify-content-center'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>About Us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Our Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
              More
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          </MDBNavbarNav>
          <form className='d-flex input-group w-auto'>
          <MDBBtn outline color='light' className={styles.login}>
         <h3>LogIn
         <Image src="/login.png"
          // className={styles.ii}
          height={28}
          width={28}
          /></h3>
         
        </MDBBtn>
       
          </form>
          <Image
          src="/sear.png"
          height={40}
          width={40}
          />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}