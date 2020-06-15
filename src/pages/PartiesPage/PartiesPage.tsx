import React, {Component} from "react";
import "./PartiesPage.scss";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";

interface PartiesPageProps {
    
}

interface PartiesPageState {

}

class PartiesPage extends Component<PartiesPageProps, PartiesPageState> {

    render(): React.ReactNode {
        return (
            <div className="parties-page">
                <MenuSidebar />
            </div>
        )
    }
}

export default PartiesPage;
