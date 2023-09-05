import React, { useState } from 'react';
import classes from './DropdownSearch.module.css'; // 导入CSS模块

function DropdownSearch(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options[1]); // 设置默认选择

 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropdownSearch}>
      <button onClick={toggleDropdown} className={classes.btn}>
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <ul className={`${classes.ul} ${isOpen ? classes.show : ''}`}>
          {props.options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)} className={classes.li}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownSearch;
