import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Selectors from "./components/Selectors";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/s-:service/b-:brand/st-:style"
                    element={<Selectors />}
                ></Route>
                <Route path="" element={<Selectors />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
