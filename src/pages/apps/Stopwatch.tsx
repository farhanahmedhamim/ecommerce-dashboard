import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"


const formatTime = (timeInSeconds: number) => {
    const hours = String(Math.floor(timeInSeconds / 3600));
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = String(timeInSeconds % 60);

    const hoursInString = hours.toString().padStart(2, "0");
    const minutesInString = minutes.toString().padStart(2, "0");
    const secondInString = seconds.toString().padStart(2, "0");

    return `${hoursInString}:${minutesInString}:${secondInString}`;

}

const Stopwatch = () => {

    const resetHandler = () => {
        setTime(0);
        setIsRuning(false);
    }


    const [time, setTime] = useState<number>(0);
    const [isRunung, setIsRuning] = useState<boolean>(false);

    useEffect(() => {
        let intervalID: number;

        if (isRunung) {
            intervalID = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalID);
        };

    }, [isRunung])

    return (
        <div className="adminContainer">

            {/* <!-- sidebar --> */}
            <AdminSidebar />

            {/* <!-- main --> */}
            <main className="appContainer">
                <h1>Stopwatch</h1>
                <section>
                    <div className="stopwatch">
                        <h2>{formatTime(time)}</h2>
                        <button onClick={() => setIsRuning((prev) => !prev)}>{isRunung ? "Stop" : "Start"}</button>
                        <button onClick={resetHandler}>Reset</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Stopwatch