import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
