import { useCallback, useEffect, useState } from "react";
import { Input } from "antd";
import debounce from "lodash.debounce";
import PropTypes from "prop-types";
import { SearchOutlined } from "@ant-design/icons";

const EMPTY_STRING = "";
const MAX_SEARCH_FILTER_DEBOUNCE_INTERVAL = 1000;

const SearchFilter = ({ value, onChange, placeholder, dataAutomationId }) => {
  const [internalValue, setInternalValue] = useState(value);
  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  const handleDebouncedChange = useCallback(debounce(onChange, MAX_SEARCH_FILTER_DEBOUNCE_INTERVAL), [onChange]);
  const handleInternalValueChange = useCallback(
    (event) => {
      setInternalValue(event.target.value);
      handleDebouncedChange(event.target.value);
    },
    [setInternalValue, handleDebouncedChange],
  );

  return (
    <Input
      allowClear
      size="large"
      data-automation-id={dataAutomationId}
      onChange={handleInternalValueChange}
      placeholder={placeholder}
      value={internalValue}
      prefix={<SearchOutlined />}
    />
  );
};

SearchFilter.defaultProps = {
  dataAutomationId: "search-filter",
  value: EMPTY_STRING,
};

SearchFilter.propTypes = {
  dataAutomationId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchFilter;
