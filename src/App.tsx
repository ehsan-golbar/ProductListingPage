import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Routing from "./components/Routing";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Stack,
} from "react-bootstrap";

import MyImg from "./assets/wp5242957.jpg";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}

      <Provider store={store}>
        <Routing></Routing>
      </Provider>

      {/* </BrowserRouter> */}
      {/* <Container
        fluid
        className="vh-100"
        style={{ backgroundColor: "#ddd1d1", overflowY: "scroll" }}
      >
        <Row>
          <Stack
            direction="horizontal"
            gap={3}
            style={{ backgroundColor: "blue" }}
          >
            <h6 className="text-white">Home</h6>
            <h6 className="text-white">Products</h6>
            <h6 className="text-white">About</h6>
            <h6 className="text-white"> Contact</h6>
          </Stack>
        </Row>

        <Row className="mt-3">
          <Col md={4}>
            <Card className="p-3">
              <Card.Img className="rounded-3" variant="top" src={MyImg} />
              <Card.Title className="mt-2 m-2 text-center">Joker</Card.Title>
              <Card.Body className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis voluptas illo, reiciendis ipsum explicabo laudantium
                fugiat facere aliquam dolor excepturi autem inventore itaque
                numquam. Sunt a veritatis odio sit enim?
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Row md={7}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={MyImg} />
                <Card.Title>Joker</Card.Title>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card style={{}}>
                <Card.Img variant="top" src={MyImg} />
                <Card.Title>Joker</Card.Title>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis corrupti sapiente aliquid accusamus natus explicabo
                quasi repellat odio fuga quas voluptatibus, doloribus
                perferendis, omnis rerum veniam dolore quos deserunt neque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id
                dicta quaerat perspiciatis ipsam quibusdam maiores voluptates
                cupiditate, facilis molestiae. Repellat minus, nulla neque
                architecto voluptatibus quae assumenda recusandae quas.
              </p>
            );
          })}
        </Row>
      </Container> */}
    </>
  );
}

export default App;
