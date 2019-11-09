import React from 'react'
import FormView from './form.view';
import { Redirect } from 'react-router-dom';
class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            countryCode: '',
            number: '',
            address: '',
            disabledBtn: false,
            nameError: '',
            emailError: '',
            passwordError: '',
            countryCodeError: '',
            numberError: '',
            addressError: '',
            error: '',
            redirectDetails: false
        }
    }

    receiveFormValue(fildValue, fieldname) {
        this.setState({
            [fieldname]: fildValue
        })
    }

    nameValidation() {
        if (!this.state.name.match(/^[a-zA-Z-\s]+$/i)) {
            this.setState({ nameError: "Name format is required" });
        } else {
            this.validate();
            this.setState({ nameError: '' });
        }
    }
    emailValidation() {
        if (!this.state.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i)) {
            this.setState({ emailError: "Email format is required" });
        } else {
            this.validate();
            this.setState({ emailError: '' });
        }
    }
    passwordValidation() {
        if (this.state.password == '') {
            this.setState({ passwordError: "Password is required" });
        } else {
            this.validate();
            this.setState({ passwordError: '' });
        }
    }
    countryCodeValidation() {
        if (this.state.countryCode == '') {
            this.setState({ countryCodeError: "Country code is required" });
        } else {
            this.validate();
            this.setState({ countryCodeError: '' });
        }
    }
    phoneValidation() {
        if (!this.state.number.match(/^[0-9]\d{9,20}$/)) {
            this.setState({ numberError: "Number is required" })
            this.validate();
        } else {
            this.validate();
            this.setState({ numberError: '' });
        }
    }
    addressValidation() {
        if (this.state.address == '') {
            this.setState({ addressError: "Address is required" })
            this.validate();
        } else {
            this.validate();
            this.setState({ addressError: '' });
        }
    }

    validate() {
        if (this.state.name === '' ||
            this.state.email === '' ||
            this.state.password === '' ||
            this.state.countryCode === '' ||
            this.state.number === '' ||
            this.state.address === ''
        ) {
            this.setState({ disabledBtn: false })
        } else {
            this.setState({ disabledBtn: true })
        }
    }

    submitFormValue() {
        let fmDetails = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            countryCode: this.state.countryCode,
            number: this.state.number,
            address: this.state.address
        }
        localStorage.setItem('contact_Details', JSON.stringify(fmDetails));
        this.setState({ redirectDetails: true });
    }

    render() {
        if (this.state.redirectDetails === true) {
            return <Redirect to='/ContactDetails' />
        }
        return (
            <FormView
                formValue={this.receiveFormValue.bind(this)}
                disabledBtn={this.state.disabledBtn}
                submitFormValue={this.submitFormValue.bind(this)}
                error={this.state.error}
                nameError={this.state.nameError}
                emailError={this.state.emailError}
                passwordError={this.state.passwordError}
                countryCodeError={this.state.countryCodeError}
                numberError={this.state.numberError}
                addressError={this.state.addressError}
                nameValidation={this.nameValidation.bind(this)}
                emailValidation={this.emailValidation.bind(this)}
                passwordValidation={this.passwordValidation.bind(this)}
                countryCodeValidation={this.countryCodeValidation.bind(this)}
                phoneValidation={this.phoneValidation.bind(this)}
                addressValidation={this.addressValidation.bind(this)}
            />
        )
    }
}

export default FormComponent;