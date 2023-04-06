import React from 'react';
import PropTypes from 'prop-types';

type AppProps = {
    options: Array<{
        id: string;
        name: string;
        value: string;
    }>,
    value?: string,
    setValue?: React.Dispatch<React.SetStateAction<string>>
};

const RadioButton = ({ options, value, setValue }: AppProps) => {
    const handleChange = (option: string) => {
        if (setValue) setValue(option);
    };
    return(
        <div className="radio-btn">
            {options.map((option) => {return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <label htmlFor={option.id} className='radio-btn__option' key={option.id} onClick={() => {return handleChange(option.value)}} onKeyDown={() => {return handleChange(option.value)}}>
                    <input
                        key={option.id}
                        type="radio"
                        className='radio-button'
                        id={option.id}
                        name={option.name}
                        value={option.value}
                        checked={value === option.value}
                        readOnly />
                        {option.value}
                </label>
            )})}
        </div>
    )
}

export default RadioButton;

RadioButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string,
    setValue: PropTypes.func
};

RadioButton.defaultProps = {
    value: '',
    setValue: () => {}
};

