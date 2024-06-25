import { useState } from 'react';
import {useParams} from "wouter";

function Example(){
    const {startAt} = useParams()
    const[count, setCount] = useState(parseInt(startAt) || 0);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default Example;