import React from 'react';
import ContactDetails from './components/contactDetails'
import FormComponent from './components/form.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={FormComponent} />
            <Route path="/ContactDetails" component={ContactDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
