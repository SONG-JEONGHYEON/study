
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition} from 'react-transition-group';
import {Container, Navbar, Nav, NavDropdown, FormControl, Form, Button} from "react-bootstrap";
import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Navbar className="App-Navbar">
        <Container>
        <Navbar.Brand href="/">케이뱅크 인재모집</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">          
           <NavDropdown title="바로가기" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://kbank.recruiter.co.kr/">지원하기</NavDropdown.Item>
            <NavDropdown.Item href="https://kbank-recruit.tistory.com/">케미스토리</NavDropdown.Item>
            <NavDropdown.Item href="/">Benefit</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">문의하기</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <img src="https://kbank.recruiter.co.kr/upload/68209/site/myImage/202207/a9316424-794e-4925-878d-3a55f2c484e9.jpg" className="App-logo" alt="logo" />
        <p>
          대한민국 최초의 인터넷은행
        </p>
        <p>
          케이뱅크
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          함께 일해요.
        </p>
        <Button>
          <a
            className="App-link"
            href="https://kbank.recruiter.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join us!
          </a>
        </Button>
      </header>
      <body>
        <div className="App-body">
          <p>
            국내 최초 비대면 계좌 개설
          </p>
          <p>
            국내 최초 비대면 아파트 담보 대출
          </p>
          <p>
            국내 최초 !
          </p>
          <p>
            국내 최초 !
          </p>
          <p>
            국내 최초 !
          </p>
          <p>
            국내 최초 !
          </p>
        </div>
        <div className='App-body-kemicode'>
          <p>
          케이뱅크의 일하는 방식
          </p>
          <p>
          * 케미는 케이뱅크의 K, 그리고 친구를 뜻하는 프랑스단어 ami를 합친 말로,
          </p>
          <p>
          케이뱅크 친구들 이라는 뜻이에요.
          </p>
          <p>
          케미코드 1
          </p>
          <p>
          케미코드 2
          </p>
          <p>
          케미코드 3
          </p>
        </div>
        <div className='App-body-kemiblog'>
          <p>
          케이뱅크 사람들. 케미스토리
          </p>
          <div className='App-body-kemistory'>
          <img src="/img/test01.PNG" className="App-kemipicture" alt="picture" />
          <p>
          “케이뱅크에서 많이 배웠어요. 기존 은행에서는 제 연차가 되면 배울 일보다 제 기존 지식이나 경험을 전달하는 일이 더 많은데요. 인터넷전문은행에서는 새롭게 공부하는 분야가 생기고, 동료와의 관계에서도 색다른 방식의 소통이 일어나요. 젊은 조직이라는 생각이 들어요.”
          </p>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        Copyright © Kbank
      </footer>
    </div>
  );
}

export default App;
