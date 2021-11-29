import { MouseEventHandler, useState } from "react";

const useToggle = (defaultValue = false): [boolean, () => void] => {
	const [visible, setVisible] = useState(defaultValue);

	const handleToggle = () => {
		setVisible((prev) => !prev);
	};

	const handleShow = () => {
		setVisible(true);
	};

	const handleHide = () => {
		setVisible(false);
	};

	return [visible, handleToggle];
};

export default useToggle;
