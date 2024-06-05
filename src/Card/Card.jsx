import './Card.css'
import PropTypes from 'prop-types';


function Card({children, headline, onUserAction}){

    function handleClick() {
        onUserAction();
    }

    return <article>
        <h3 onClick={handleClick}>{headline}</h3>
        {children}
    </article>
}

Card.propTypes  = {
    children: PropTypes.node,
    headline: PropTypes.string,
    onUserAction: PropTypes.func,
}

export default Card;

