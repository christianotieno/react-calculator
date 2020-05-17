import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    wide,
    color,
    onClick,
    fontSize,
    borderColor,
    bottomLeftRadius,
    bottomRightRadius,
  } = props;

  const styles = {
    fontSize,
    borderColor,
    backgroundColor: color,
    flexBasis: wide ? '50%' : '25%',
    borderBottomLeftRadius: bottomLeftRadius ? 30 : 0,
    borderBottomRightRadius: bottomRightRadius ? 30 : 0,
  };

  const handleClick = () => {
    onClick(name);
  };

  return (
    // eslint-disable-next-line
    <div 
      className="btn"
      style={styles}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

Button.propTypes = {
  wide: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  borderColor: PropTypes.string,
  bottomLeftRadius: PropTypes.bool,
  bottomRightRadius: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  fontSize: 50,
  color: '#e0e0e0',
  borderColor: '#858693',
  bottomLeftRadius: false,
  bottomRightRadius: false,
};

export default Button;
