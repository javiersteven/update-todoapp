import { useContext } from "react";
import ReactDOM from "react-dom";

import { Modal } from "../Modal/index.js";
import { AppContext } from "../Context/appContext";
import { Todos } from "../Todos/index.js";
import { Header } from './Header/Header'
import { ShowModal } from './ShowModalBtn/ShowModal'

const AppUI = () => {
    const {
        setActive,
        active,
        submiting,
        setSubmiting,
        todos,
        setTodos
    } = useContext(AppContext);

    return (
        <div className="App">
            <Header />
            <ShowModal/>
            <Modal
                submiting={submiting}
                setSubmiting={setSubmiting}
                state={active}
                setState={setActive}
            />
            {submiting && <h2>Datos Enviados!</h2>}
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    );
};

ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"));
export { AppUI };
