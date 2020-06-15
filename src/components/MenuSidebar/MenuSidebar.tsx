import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./MenuSidear.scss";

interface MenuSidebarProps {

}

interface MenuSidebarState {

}

class MenuSidebar extends Component<MenuSidebarProps, MenuSidebarState> {

    render(): React.ReactNode {
        return (
            <aside className={"menu-sidebar"}>
                <nav className="menu-sidebar__menu">
                    <Link to={"/"} className="menu-sidebar__link">Main Page</Link>
                    <Link to={"/party"} className="menu-sidebar__link">Parties</Link>
                </nav>
            </aside>
        )
    }
}

export default MenuSidebar;
