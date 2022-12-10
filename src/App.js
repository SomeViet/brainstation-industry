import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/index";
import {
    Home,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
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
                    <Route path="/6" exact>
                        <Page6 />
                    </Route>
                    <Route path="/7" exact>
                        <Page7 />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
