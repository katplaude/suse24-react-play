import './Card.css'
import PropTypes from 'prop-types';

function Card({reason, headline}){
    return <article>
        <h3>{headline}</h3>
        JSX is strange becaus {reason}
    </article>
}

Card.propTypes  = {
    reason: PropTypes.string,
    headline: PropTypes.string
}

export default Card;

