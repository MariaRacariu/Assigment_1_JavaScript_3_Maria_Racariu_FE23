import { useEffect, useState } from "react";
import Clock from "./components/Clock";
import './App.css';

// Component that updates time
function App() {
    // new Date() gives me the whole date including the day/month/year
    const [time, setTime] = useState(new Date());

    // useEffect runs only once when mounted
    useEffect(() => {
        const newTime = setInterval(() => {
            setTime(new Date());
        }, 1000); /* every second */

        // clears the interval 
        return () => clearInterval(newTime);
    }, []);

    // Using Great Britain format
    const formattedTime = time.toLocaleTimeString('en-GB');

    return <Clock time={formattedTime} />
}

export default App;