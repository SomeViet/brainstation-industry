import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    Signup,
    Signupactive,
    Home,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page5active,
    Page6,
    Page7,
    Page7active,
    Page8,
    Page9,
    Page10,
    Page11,
} from "./pages/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/1" exact>
                        <Page1 />
                    </Route>
                    <Route path="/2" exact>
                        <Page2 />
                    </Route>
                    <Route path="/3" exact>
                        <Page3 />
                    </Route>
                    <Route path="/4" exact>
                        <Page4 />
                    </Route>
                    <Route path="/5" exact>
                        <Page5 />
                    </Route>
                    <Route path="/5active" exact>
                        <Page5active />
                    </Route>
                    <Route path="/6" exact>
                        <Page6 />
                    </Route>
                    <Route path="/7" exact>
                        <Page7 />
                    </Route>
                    <Route path="/7active" exact>
                        <Page7active />
                    </Route>
                    <Route path="/8" exact>
                        <Page8 />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/signupactive" exact>
                        <Signupactive />
                    </Route>
                    <Route path="/9" exact>
                        <Page9 />
                    </Route>
                    <Route path="/10" exact>
                        <Page10 />
                    </Route>
                    <Route path="/11" exact>
                        <Page11 />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
