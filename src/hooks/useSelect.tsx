import { useMemo, useState, ReactElement } from "react";
import { Select } from 'antd';
import '../asset/hooks/useSelect.scss';

const { Option } = Select;

interface ISelectDefine {
	key: string | number;
	label: string;
}

interface IRestProps {
	data: Array<ISelectDefine>,
	className?: string,
	disabled?: boolean,
	showSearch?: boolean,
	placeholder?: string,
	filterOption?: (value1, value2) => boolean | boolean,
	filterSort?: (value1, value2) => number,
	bordered?: boolean,
	status?: "error" | "warning" | "",
	allowClear?: boolean,
	size?: "large" | "middle" | "small",
	placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight",
	isMulti?: "multiple" | "tags",
	[x: string]: any
}
export function useSelect(props: IRestProps): { currentSelected: string | number, selectDom: ReactElement } {
	const { data, className, disabled, showSearch, placeholder, filterOption, filterSort, bordered, status, allowClear, size, placement, isMulti, ...restProps } = props;
	const [currentSelected, setCurrentSelected] = useState<string | number>(data[0].key.toString());

	const selectDom = useMemo(() => {
		return (
			<Select
				defaultValue={data[0].key.toString()}
				className={className}
				onChange={(value: string) => setCurrentSelected(value)}
				disabled={disabled}
				showSearch={showSearch}
				placeholder={placeholder}
				filterOption={filterOption}
				filterSort={filterSort}
				bordered={bordered}
				status={status}
				allowClear={allowClear}
				size={size}
				placement={placement}
				mode={isMulti}
				{...restProps}
			>
				{data.map((item, index) =>
					<Option key={index} value={item.key} >{item.label}</Option>
				)}
			</Select>
		);
	}, [currentSelected, data]);

	return { currentSelected, selectDom };
}