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

    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const handleChange = (option: string) => {
        if (setValue) setValue(option);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, option: string) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.key === ' ') {
            handleChange(option)
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const index = options.findIndex((item) => {return item.value === option});
            if (index > 0) {
                handleChange(options[index - 1].value);
            }
        }
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const index = options.findIndex((item) => {return item.value === option});
            if (index < options.length - 1) {
                handleChange(options[index + 1].value);
            }
        }
    };

    return (
    <div className="radio-btn">
        {options.map((option) => {return (
            <div 
                role="button" 
                className='radio-btn__option' 
                key={option.id} 
                onClick={() => {return handleChange(option.value)}} 
                onKeyDown={(e) => {return handleKeyDown(e, option.value)}} 
                tabIndex={isFocused ? 0 : -1} 
                onFocus={() => {return setIsFocused(true)}}
                onBlur={() => {return setIsFocused(false)}}>

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