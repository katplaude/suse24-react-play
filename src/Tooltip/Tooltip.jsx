import PropTypes from "prop-types";
import './Tooltip.css'

function Tooltip({label, children}){
    return <span className={'tooltip'}>
        <span>{label}</span>
        <p>{children}</p>
    </span>
}

Tooltip.propTypes = {
    label: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.string
    ]),
}

export default Tooltip;
