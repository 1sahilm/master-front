import React from 'react'
import Countdown from "react-countdown";

export default function Timer() {
    return (
        <div className="timercont">

            {/* Timer is set by milesecond */}
            <Countdown date={Date.now() + 86400000} />
        </div>
    )
}
