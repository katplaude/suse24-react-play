import './App.css'
import Card from './Card/Card.jsx'
import Chip from "./Chip/Chip.jsx";
import Tooltip from "./Tooltip/Tooltip.jsx";

const myReason = 'whatever';

function App() {
    return <div className={'app'}>
        <h1>Hello world</h1>
        <Chip color={'#0f0'}>My chip</Chip>
        <Tooltip label={'Hover me'}>
            This is the super secret tip.
        </Tooltip> and more
        <Card
            reason={myReason}
            headline={'My card'}/>
    </div>;
}

export default App
