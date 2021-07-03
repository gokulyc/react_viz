import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Viz from "./layouts/Viz";
import ReactQueryLayout from './layouts/ReactQueryDemo'

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Switch>
                <Route exact path="/" component={Viz} />
                <Route path="/rquery" component={ReactQueryLayout} />
                {/* <Route path="/service" component={Service} /> */}
            </Switch>
        </Router>
        {/* <App /> */}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
