import { useMemo, useState, ReactElement } from "react";
import { Select } from 'antd';
import './useSelect.scss';

const { Option } = Select;

interface ISelectDefine {
	key: string | number;
	label: string;
}

export function useSelect(isVisible: boolean, data: Array<ISelectDefine>): { currentSelected: string | number, selectDom: ReactElement } {
	const [currentSelected, setCurrentSelected] = useState<string | number>(data[0].key.toString());
	const handleSelect = (value: string) => {
		setCurrentSelected(value);
	}
	const selectDom = useMemo(() => {
		return (
			<Select
				defaultValue={data[0].key.toString()}
				onChange={handleSelect}
				disabled={!isVisible}
			>
				{data.map((item, index) =>
					<Option key={index} value={item.key} >{item.label}</Option>
				)}
			</Select>
		);
	}, [currentSelected, data]);

	return { currentSelected, selectDom };
}