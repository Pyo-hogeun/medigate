import { useState } from "react";
import Header from "./Header";
import HeaderInner from "./HeaderInner";
const FullScreenDialog = () => {
    const [toggleDialog, setToggleDialog] = useState(true);
    
    return(
        <>
        <div className={
            toggleDialog?
            "dialog-wrap active":
            "dialog-wrap"}>
                <Header>
                    <HeaderInner>
                        <div class="prefix">
                            aaas
                            <h2>aasdfasdf</h2>
                        </div>
                        
                    </HeaderInner>
                </Header>
                
        </div>
        </>
    )
}
export default FullScreenDialog