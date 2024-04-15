import "./darkmode-switch.css";

const DarkmodeSwitch = ({ handleChange, isChecked }) => {

	return (
		<div className="darkmode-switch">
			<input
				type="checkbox"
				id="check"
				className="toggle" onChange={handleChange}
			/>
			<label htmlFor="check" className="switch"></label>
			</div>
	)
};

export default DarkmodeSwitch;