import React from 'react';
import PropTypes from 'prop-types';

const ButtonsContainer = (props) => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  const { handleClick } = props;

  return (
    <div>
      <div className="buttons-container">
        {buttons.map((button) => (
          <button type="button" key={button} onClick={handleClick}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

ButtonsContainer.propTypes = { handleClick: PropTypes.func.isRequired };

export default ButtonsContainer;
