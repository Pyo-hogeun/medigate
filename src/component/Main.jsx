import HeaderInner from './HeaderInner';
import Lnb from './Lnb';
import FullScreenDialog from './FullScreenDialog';
import Header from './Header';
import './main.scss';
const Main = () => {
    return(<>
        <div class="main">
            <Header>
                <HeaderInner>
                    <h1><span class="logo">MEDI:GATE</span></h1>
                    <div class="header-controls">
                    <button type="button" class="btn-icon btn-srch"><i class="medi medi-search"></i></button>
                    <button type="button" class="btn-icon btn-menu"><i class="medi medi-fullmenu"></i></button>
                    </div>
                </HeaderInner>
                <Lnb />
            </Header>
        </div>
        <FullScreenDialog />
    </>)
}
export default Main