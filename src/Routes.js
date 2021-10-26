import { Switch, Route } from "react-router";
import AddBookModal from "./components/AddBookModal";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/book'>
                <Book />
            </Route>
            <Route exact path='/book/add'>
                <AddBookModal />
            </Route>
            <Route exact path='/book/:id/edit'>
                <AddBookModal />
            </Route>
        </Switch>
    )
}