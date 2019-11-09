import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactDetails.css'
class ContactDetails extends React.Component {
    render() {
        let parseContactDetals = JSON.parse(localStorage.getItem('contact_Details'));
        return (
            <div>
                <Link to="/" style={{ margin: '10px' }}>Home</Link>
                <h5 className="contactDetails">Contact Details</h5>
                <table className="contactDetails">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{parseContactDetals.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{parseContactDetals.email}</td>
                        </tr>
                        <tr>
                            <td> Country Code</td>
                            <td>{parseContactDetals.countryCode}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{parseContactDetals.number}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{parseContactDetals.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
export default ContactDetails