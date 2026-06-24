import { useEffect } from "react";
import stackItems from "../Data/stackData";

function CursorIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" viewBox="1.5 2 21 21">
            <path d="m20.42,6.73L12.42,2.11c-.26-.15-.57-.15-.83,0L3.58,6.73c-.22.12-.35.36-.35.61v9.32c0,.25.13.48.35.61l8.01,4.62c.26.15.57.15.83,0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61h0Zm-.5.98h0s-7.73,13.39-7.73,13.39c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43l-7.59-4.38c-.09-.05-.05-.19.05-.19h15.46c.22,0,.36.24.25.43Z" />
        </svg>
    );
}

function Stack() {
    useEffect(() => {
        const boxes = document.querySelectorAll(".icon-box");

        const handleClick = (e) => e.currentTarget.setAttribute("data-clicked", "true");
        const handleLeave = (e) => e.currentTarget.removeAttribute("data-clicked");
        const resetTooltips = () => boxes.forEach((box) => box.removeAttribute("data-clicked"));

        boxes.forEach((box) => {
            box.addEventListener("click", handleClick);
            box.addEventListener("mouseleave", handleLeave);
        });

        window.addEventListener("pageshow", resetTooltips);
        window.addEventListener("pagehide", resetTooltips);

        return () => {
            boxes.forEach((box) => {
                box.removeEventListener("click", handleClick);
                box.removeEventListener("mouseleave", handleLeave);
            });
            window.removeEventListener("pageshow", resetTooltips);
            window.removeEventListener("pagehide", resetTooltips);
        };
    }, []);

    return (
        <section>
            <div className="stack">
                <div className="s-head">
                    <h1>TECH STACK</h1>
                </div>
                <div className="stack-i">
                    {stackItems.map(({ title, icon: Icon }) => (
                        <div className="icon-box" data-title={title} key={title}>
                            {Icon === "cursor" ? (
                                <CursorIcon className="stack-icon" />
                            ) : (
                                <Icon className="stack-icon" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stack;