import PropTypes from "prop-types";

function MyList({items}){
    return <ul>
        {items.map(item => <li>{item}</li>)}
    </ul>
}

MyList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number),
}

export default MyList;
