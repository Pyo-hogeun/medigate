import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../component/Main';
const MgRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}
export default MgRouter