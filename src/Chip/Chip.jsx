import PropTypes from "prop-types";

const chipStyle = {
    textDecoration : 'underline'
}

function Chip({children, color = 'auto', big=false}){
    let fontSize = 'inherit';
    if (big){
        fontSize = '72pt';
    }

    return <em style={{color, fontSize, ...chipStyle}}>
        {children.toUpperCase()}
    </em>
}

Chip.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    big: PropTypes.bool,
}

export default Chip;
