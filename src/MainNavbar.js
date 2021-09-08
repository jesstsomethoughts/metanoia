// import './Navbar.css';

// import React from "react";

// import {
//   Button,
//   UncontrolledCollapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";

// // import Logo from "assets/img/brand/header_logo.png";
// // import smallerLogo from "assets/img/brand/metanoia_newlogo.png"

// class MainNavbar extends React.Component {
//   componentDidMount() {
//     let headroom = new Headroom(document.getElementById("navbar-main"));
//     // initialise
//     headroom.init();
//     window.addEventListener("resize", this.handleResize);
//   }
//   componentWillUnmount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   handleResize = (e) => {
//     this.setState({ windowWidth: window.innerWidth });
//   };

//   state = {
//     collapseClasses: "",
//     collapseOpen: false,
//     windowWidth: window.innerWidth,
//   };

//   onExiting = () => {
//     this.setState({
//       collapseClasses: "collapsing-out",
//     });
//   };

//   onExited = () => {
//     this.setState({
//       collapseClasses: "",
//     });
//   };

//   render() {
//     if (this.state.windowWidth < 992) {
//       var a = (
//         <NavLink
//           className="nav-link-icon"
//           href="subscribe"
//           id="tooltip356693867" //
//         >
//           <i className="ni ni-bold-right d-lg-none mr-1" />
//           <span className="nav-link-inner--text">Subscribe</span>
//         </NavLink>
//       );
//     } else {
//       var b = (
//         <Button
//           className="btn-neutral btn-icon"
//           color="default"
//           href="subscribe"
//           id="subscribe"
//         >
//           <span className="nav-link-inner--text text-danger">Subscribe</span>
//         </Button>
//       );
//     }

//     return (
//       <>
//         <header className="header-global">
//           <Navbar
//             className="navbar-main navbar-transparent navbar-light"
//             expand="lg"
//             id="navbar-main"
//           >
//             <Container>
//               <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
//                 {/* <img style={{height: '60px'}} alt="..." src={Logo} /> */}
//               </NavbarBrand>
//               <button className="navbar-toggler" id="navbar-">
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <UncontrolledCollapse
//                 toggler="#navbar-danger"
//                 navbar
//                 className={this.state.collapseClasses}
//                 onExiting={this.onExiting}
//                 onExited={this.onExited}
//               >
//                 <div className="navbar-collapse-header">
//                   <Row>
//                     <Col className="collapse-brand" xs="6">
//                       <Link to="/">
//                         {/* <img
//                           style={{height: '30pt',
//                           width: '30pt'}}
//                           alt="..."
//                           src={smallerLogo}
//                           id="navBarLogo"
//                         /> */}
//                       </Link>
//                     </Col>
//                     <Col className="collapse-close" xs="6">
//                       <button className="navbar-toggler" id="navbar-danger">
//                         <span />
//                         <span />
//                       </button>
//                     </Col>
//                   </Row>
//                 </div>
//                 <Nav className="align-items-lg-center ml-lg-auto" navbar>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="landing"
//                       id="tooltip333589074"
//                     >
//                       <i className="ni ni-bold-right d-lg-none mr-1" />
//                       <span className="nav-link-inner--text">Home</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="about"
//                       id="tooltip333589074"
//                     >
//                       <i className="ni ni-bold-right d-lg-none mr-1" />
//                       <span className="nav-link-inner--text">About</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="contact"
//                       id="tooltip184698705"
//                     >
//                       <i className="ni ni-bold-right d-lg-none mr-1" />
//                       <span className="nav-link-inner--text">Contact</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="login"
//                       id="tooltip356693867"
//                     >
//                       <i className="ni ni-bold-right d-lg-none mr-1" />
//                       <span className="nav-link-inner--text">Log In</span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="d-lg-block ml-lg-4">
//                     {a}
//                     {b}
//                   </NavItem>
//                 </Nav>
//               </UncontrolledCollapse>
//             </Container>
//           </Navbar>
//         </header>
//       </>
//     );
//   }
// }

// export default MainNavbar;
