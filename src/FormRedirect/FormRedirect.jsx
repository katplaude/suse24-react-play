import {useLocation} from "wouter";

function GoForm() {
    const [location, setLocation] = useLocation();
    console.log(location)

    return (

        <button onClick={() => setLocation("/form")}>Go to form</button>
    );
};

export default GoForm
