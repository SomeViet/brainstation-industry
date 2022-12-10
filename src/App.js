import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/index";
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
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/page1" exact>
                        <Page1 />
                    </Route>
                    <Route path="/page2" exact>
                        <Page2 />
                    </Route>
                    <Route path="/page3" exact>
                        <Page3 />
                    </Route>
                    <Route path="/page4" exact>
                        <Page4 />
                    </Route>
                    <Route path="/page5" exact>
                        <Page5 />
                    </Route>
                    <Route path="/page6" exact>
                        <Page6 />
                    </Route>
                    <Route path="/page7" exact>
                        <Page7 />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
