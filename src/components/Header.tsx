import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';
function Header() {
  const links = [
    { href: "/", label: "Trang chủ" },
    { href: "/product", label: "Sản phẩm" },
    { href: "/history", label: "Lịch sử" },
    { href: "/favorite", label: "Yêu thích" },
  ];
  const location = useLocation();
  return (
    <>
      <Navbar expand="lg" sticky='top'  variant="dark" className={`shadow-sm py-2 ${styles.headerBackground}`}>
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src="logo.png" alt="logo" className={styles.img_logo} />
            <span className={styles.text_logo}>E-Learning</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              {links.map(link => (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  className={`mx-2 fw-semibold ${location.pathname === link.href ? 'active' : ''}`}
                  style={{ fontSize: 16 }}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;