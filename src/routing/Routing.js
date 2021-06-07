import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "../screens/Landing";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";
import { TransactionList }  from '../screens/TransactionsList';
 
class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <SignUp {...this.props} />} />
          <Route exact path="/SignIn" render={()=> <SignIn{...this.props}/> }/>
          <Route exact path="/SignUp" render={()=> <SignUp{...this.props}/>} />
          <Route exact path="/TransactionList" render={()=> <TransactionList {...this.props} />}/>
          <Route exact path="/Landing" render={()=><Landing{...this.props}/>}/>
            {/* <PrivateRoute
              exact
              path="/mainpage"
              render={() => <MainPage {...this.props} />}
            /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routing;
