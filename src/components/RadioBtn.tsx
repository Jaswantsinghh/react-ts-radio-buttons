import React, {useRef} from 'react';
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

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, option: string) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                handleChange(option);
                break;
            case ' ':
                e.preventDefault();
                handleChange(option);
                break;
            case 'ArrowUp':{
                e.preventDefault();
                const index = options.findIndex((item) => {return item.value === option});
                if (index > 0) {
                    handleChange(options[index - 1].value);
                } else {
                    handleChange(options[options.length - 1].value);
                }
                break;}
            case 'ArrowDown':{
                e.preventDefault();
                const index2 = options.findIndex((item) => {return item.value === option});
                if (index2 < options.length - 1) {
                    handleChange(options[index2 + 1].value);
                } else {
                    handleChange(options[0].value);
                }
                break;}
            default:
                break;
        }
    };

    return (
    <div className="radio-btn">
        {options.map((option) => {return (
            <div 
                role="tab" 
                className='radio-btn__option' 
                key={option.id}
                ref={ref}
                onClick={() => {return handleChange(option.value)}} 
                onKeyDown={(e) => {return handleKeyDown(e, option.value)}} 
                tabIndex={0}
                aria-selected={value === option.value}
                >

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