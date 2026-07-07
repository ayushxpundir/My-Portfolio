import { useState, useEffect } from "react";
import Links from "./Links";

function Footerwork() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            setTime(now);
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section>
                <div className="foot-last">
                    <div className="last-time">
                        <div className="lastext">
                            <p>&copy; {new Date().getFullYear()} AYUSH PUNDIR | {time} IST  </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footerwork