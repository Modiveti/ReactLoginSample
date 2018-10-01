import React from "react";
import { FormGroup, Container, Col, Row, Input, Label } from "reactstrap";
import { PulseLoader } from "react-spinners";
import { fetchPlanets } from "../../Services/apiService";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: ["value1","value2","value3"],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        fetchPlanets().then( res => {
            if(res.status) {
                let users = [];
                if(res.data.results.length > 0) {
                    for(let i=0; i<res.data.results.length; i++) {
                        users.push(res.data.results[i].name)
                    }
                }
                this.setState({ 
                    loading: false,
                    usersList: users
                })
            }
          })
          .catch( err => {
              this.setState({
                loading: false
              })
            console.log(err);
          })
    }

    displayUsersDetails = (usersList) => {
        if(!this.state.loading) {
            if (usersList.length > 0) {
                return (
                    <Row>
                      <Col className="col-sm-6">
                        <FormGroup className="large-text-input">
                          <Label className="content-item-title">
                            Select User from List
                          </Label>
                          <Input
                            type="select"
                            disabled={this.state.loading}
                            onChange={this.handleFormChange}
                            // value={values.campaign_id}
                            name="campaign_id"
                          >
                            <option value="">Select</option>
                            {this.state.usersList.map(i => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                                ))
                            }
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                )
            }
        } else {
            return (
                <div style={{ margin: "20px auto", textAlign: "center" }}>
                    <PulseLoader color="#007bff" loading={this.state.loading} />
                    <div>Fetching Details...</div>
                </div>
            )
        }
    }

    render() {
        const { usersList } = this.state;
        return (
            <div>
                <Container style={{ paddingTop: "10px", paddingBottom: "25px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "30px", marginTop: "-30px" }}>
                        User Details
                    </h2>
                    {this.displayUsersDetails(usersList)}
                </Container>
            </div>
        )
    }
}

export default Home;