import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Nav'
import styles from '../styles/Home.module.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Body from '../Body';
import About from '../About';
import Services from '../Services';
import Ceo from '../Ceo';
import Best from '../Best';
import Clients from '../Clients';
import Sign from '../Sign';
import Abt from '../Abt';


export default function Home() {
  return (
    <div className>
  <Nav/>
  
  <Body/>
  <About/>
  <Services/>
  <Ceo/>
  <Best/>
  <Clients/>
  <Sign/>
  <Abt/>
    </div>
  )
}
