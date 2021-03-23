import { node } from "prop-types";
import { useConsoleSize } from "../../../hooks";
import { Aside } from './styles';

export const ActivitySideBar = ({children}) => {
    const { width } = useConsoleSize();

    return <Aside consoleWidth={`${width}px`}>{children}</Aside>
};

ActivitySideBar.propTypes = {
    children: node.isRequired
}