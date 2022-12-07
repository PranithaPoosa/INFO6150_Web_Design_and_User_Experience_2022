import React from "react";
import { GET_FEW_ITEMS_URL } from "../API";
import axios from "axios";
import { Row, Card, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./customStyles.css";
import Footer from "./Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get(GET_FEW_ITEMS_URL(80))
      .then((res) => {
        if (res.data) {
          this.setState({
            items: res.data,
          });
        }
      })
      .catch((err) => {
        this.setState({
          items: [],
        });
      });
  }

  goToDescription = (productId) => {
    this.props.history.push(`/description/${productId}`);
  };

  render() {
    const { items = [] } = this.state;
    return (
      <div>
        <h1>{items.length}</h1>
        <Container>
          <Row className="justify-content-evenly">
            {items.map((item) => {
              return (
                <Card
                  key={item["_id"]}
                  className="p-2 mt-4"
                  style={{
                    width: "18rem",
                    height: "22rem",
                    cursor: "pointer",
                  }}
                  onClick={() => this.goToDescription(item["_id"])}
                >
                  <Card.Img
                    variant="top"
                    src={new URL(item.images[0])}
                    className="home-image"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {item.name}
                      </h6>
                    </Card.Title>
                    <Card.Text className="d-flex align-items-start align-items-center">
                      Price:{item.pricing}$
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Home);
