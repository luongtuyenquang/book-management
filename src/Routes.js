import { Switch, Route } from "react-router";
import AddBookModal from "./components/AddBookModal";
// import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import UpdateBookModal from "./components/UpdateBookModal";

export default function Routes() {
    return (
        <Switch>
            {/* <Route exact path='/'>
                <Home />
            </Route> */}
            <Route exact path='/book'>
                <Book />
            </Route>
            <Route exact path='/book/add'>
                <Book />
                <AddBookModal />
            </Route>
            <Route exact path='/book/edit/:id'>
                <Book />
                <UpdateBookModal />
            </Route>
        </Switch>
    )
}