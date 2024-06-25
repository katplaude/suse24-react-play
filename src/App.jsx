import './App.css'
import Card from './Card/Card.jsx'
import Chip from "./Chip/Chip.jsx";
import Tooltip from "./Tooltip/Tooltip.jsx";
import MyList from "./MyList/MyList.jsx";
import Task from "./Task/Task.jsx";
import Board from "./Tictactoe/TicTacToe.jsx"
import Form from "./Form/Form.jsx";
import {Route, Switch} from "wouter";
import { Link } from "wouter"
import Navigation from "./Navigation/Navigation.jsx";
import Account from "./Account/Account.jsx";
import GoForm from "./FormRedirect/FormRedirect.jsx";
import NotFound from "./NotFound/NotFound.jsx";



const myReason = 'whatever';

function App() {
    function NotFound() {
        return <h1>Page Not Found</h1>;
    }
    return <div className={'app'}>

       <Navigation></Navigation>

        <Switch>

            <Route path="/home">
                You are at /home
                <h1>Hello world</h1>

                <GoForm></GoForm>

                <Chip color={'#0f0'}>My chip</Chip>
                <Tooltip label={'Hover me'}>
                    This is the super secret tip.
                </Tooltip> and more
                <Card headline={'My card'} onUserAction={() => console.log('Yeah')}>
                    This is my card text.
                </Card>

                <MyList items={[1, 1, 2, 3, 5, 8, 13]}/>
            </Route>

            <Route path="/counter/:startAt">
                <Task/>
            </Route>

            <Route path="/counter">
                <Task/>
            </Route>

            <Route path="/board">
                <Board/>
            </Route>

            <Route path="/form">
                <Form/>
            </Route>

            <Route path="/account/:name">
                <Account/>
            </Route>

            <Route> <NotFound/> </Route>

        </Switch>

    </div>
}


export default App
