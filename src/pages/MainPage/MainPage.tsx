import React, {Component} from "react";
import "./MainPage.scss";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

interface MainPageProps {

}

interface MainPageState {

}

class MainPage extends Component<MainPageProps, MainPageState> {

    render(): React.ReactNode {
        return (
            <div className={"main-page"}>
                <MenuSidebar/>
            </div>
        )
    }
}

export default MainPage;
