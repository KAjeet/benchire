import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class FormViewUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desaibleBtn: false
        }
    }

    render() {
        return (
            <Row>
                <Col md={3}> </Col>
                <Col md={6}>
                    <Form style={{ background: "#f9f9f9", padding: '20px' }}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                autoComplete="off"
                                minLength="1"
                                maxLength="100"
                                onBlur={this.props.nameValidation}
                            />
                            {
                                this.props && this.props.nameError ?
                                    <Form.Label style={{ color: "red" }}>
                                        {this.props.nameError}
                                    </Form.Label>
                                    : null
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="a@gmail.com"
                                autoComplete="off"
                                onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                onBlur={this.props.emailValidation}
                            />
                            {
                                this.props && this.props.emailError ?
                                    <Form.Label style={{ color: "red" }}>
                                        {this.props.emailError}
                                    </Form.Label>
                                    : null
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                autoComplete="off"
                                name="password"
                                onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                minLength="1"
                                maxLength="20"
                                onBlur={this.props.passwordValidation}
                            />
                            {
                                this.props && this.props.passwordError ? <Form.Label style={{ color: "red" }}>{this.props.passwordError}</Form.Label> : null
                            }
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Row>
                                <Col md={2}>
                                    <Form.Control
                                        type="text"
                                        placeholder="+91"
                                        autoComplete="off"
                                        name="countryCode"
                                        onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                        onBlur={this.props.countryCodeValidation}
                                    />
                                    {
                                        this.props && this.props.countryCodeError ? <Form.Label style={{ color: "red" }}>{this.props.countryCodeError}</Form.Label> : null
                                    }
                                    {
                                        console.log("view countryCodeError", this.props.countryCodeError)
                                    }
                                </Col>
                                <Col md={10}>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Mobile number"
                                        autoComplete="off"
                                        name="number"
                                        onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                        minLength="10"
                                        maxLength="20"
                                        onBlur={this.props.phoneValidation}
                                    />
                                    {
                                        this.props && this.props.numberError ? <Form.Label style={{ color: "red" }}>{this.props.numberError}</Form.Label> : null
                                    }
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                name="address"
                                autoComplete="off"
                                onChange={(e) => { this.props.formValue(e.target.value, e.target.name) }}
                                minLength="1"
                                maxLength="250"
                                onBlur={this.props.addressValidation}
                            />
                            {
                                this.props && this.props.addressError ? <Form.Label style={{ color: "red" }}>{this.props.addressError}</Form.Label> : null
                            }
                        </Form.Group>
                        {
                            this.props && this.props.disabledBtn === true ?

                                <Button variant="info" onClick={this.props.submitFormValue}>
                                    Submit
                                </Button>

                                : null
                        }

                    </Form>
                </Col>
            </Row>

        )
    }
}

export default FormViewUI;