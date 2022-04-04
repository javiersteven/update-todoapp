import { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import './ShowModalBtn.css'

const ShowModal = () => {
    const { active, setActive } = useContext(AppContext)

    return (
        <div className="wrapper">
            <button onClick={() => setActive(!active)}>
                {(active && "Hide") || "Show"} Modal
            </button>
        </div>
    )
}

export { ShowModal }