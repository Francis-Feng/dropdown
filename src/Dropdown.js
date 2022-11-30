import React, { useEffect, useRef, useState } from "react";
import { 
    BsFillCaretDownFill as DownIcon,
    BsX as XIcon,
} from "react-icons/bs";

import "./styles/Dropdown.css";

const Dropdown = ({
  defaultText,
  data,
  multipleSelect,
  hasSearch,
  onSelect
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(multipleSelect ? [] : null);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef();
  const dropdownRef = useRef();

  // auto-focus on search when menu is open
  useEffect(() => {
    setSearchText("");
    if (openDropdown && searchRef.current) {
      searchRef.current.focus();
    }
  }, [openDropdown]);

  // close when clicked outside of dropdown menu
  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  
  const handleInputClick = () => {
    setOpenDropdown(!openDropdown);
  };

  // retrieve all items that have been selected to render
  const getSelected = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return defaultText;
    }
    if (multipleSelect) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div key={option.key} className="dropdown-tag-item">
              {option.value}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <XIcon className="x-icon"/>
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue.value;
  };

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.key !== option.key);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onSelect(newValue);
  };

  // Adds new item to selected items
  const onItemClick = (option) => {
    let newValue;
    if (multipleSelect) {
      if (selectedValue.findIndex((o) => o.key === option.key) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onSelect(newValue);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    
    if (multipleSelect) {
      return selectedValue.filter((o) => o.key === option.key).length > 0;
    }

    return selectedValue.key === option.key;
  };

  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const getOptions = () => {
    if (!searchText) {
      return data;
    }

    return data.filter(
      (option) =>
        option.value.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    );
  };

  const selectAll = () => {
    setSelectedValue(data)
    onSelect(data)
  };

  const clearAll = () => {
    setSelectedValue([])
    onSelect([])
  };

  return (
    <div className="dropdown-container">
      <div ref={dropdownRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getSelected()}</div>
        <div>
            <DownIcon className="down-icon"/>
        </div>
      </div>
      {openDropdown && (
        <div className="dropdown-menu">
          {hasSearch && (
            <div className="search">
              <input onChange={onSearch} value={searchText} ref={searchRef} />
            </div>
          )}
          {multipleSelect && <div
            onClick={() => selectAll()}
            className={"dropdown-item"}
          >
            <b>Select All</b>
          </div>}
          {multipleSelect && <div
            onClick={() => clearAll()}
            className={"dropdown-item"}
          >
            <b>Clear All</b>
          </div>}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.key}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
