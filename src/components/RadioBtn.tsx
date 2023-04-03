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

const RadioBtn = ({ options, value, setValue }: AppProps) => {

    const handleChange = (option: string) => {
        if (setValue) setValue(option);
    };
    
    return (
    <div className="radio-btn">
        {options.map((option) => {return (
            <div role="button" className='radio-btn__option' key={option.id} onClick={() => {return handleChange(option.value)}} onKeyDown={() => {return handleChange(option.value)}} tabIndex={0}>
                <div className="radio-btn__outer-ring">
                    <div className={`radio-btn__input ${value === option.value && 'selected'}`} />
                </div>
                <label htmlFor={option.id}>{option.value}</label>
            </div>
        )})}
    </div>
)};

RadioBtn.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })),
    value: PropTypes.string,
    setValue: PropTypes.func,
};

RadioBtn.defaultProps = {
    options: [],
    value: '',
    setValue: () => {},
};

export default RadioBtn;