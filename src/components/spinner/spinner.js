const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block"}} width="211px" height="211px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="23" strokeWidth="5" stroke="#9f0013" strokeDasharray="36.12831551628262 36.12831551628262" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.639344262295082s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
        </circle></svg>
    )
}


export default Spinner;