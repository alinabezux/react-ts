import {FC} from "react";
import {Outlet} from "react-router-dom";

interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export
{
    MainLayout
}