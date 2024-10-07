import {useEffect, useState} from "react";
import DisplayTime from "./components/DisplayTime";

// Component that updates time
function App(){
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const newTime = setInterval(() =>{
            setTime(new Date());    
        }, 1000);

        return () => clearInterval(newTime);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return <DisplayTime time={formattedTime}/>
}

export default App;