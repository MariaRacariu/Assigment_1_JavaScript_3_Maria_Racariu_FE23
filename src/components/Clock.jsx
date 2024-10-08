function Clock({ time }) {
    return (
        <>
            <div className="clockContainer">
                <h1 className="timeTitle">Current Time</h1>
                <p className="time">{time}</p>
            </div>
        </>
    );
}
export default Clock;