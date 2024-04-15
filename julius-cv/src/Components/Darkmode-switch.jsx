import "./darkmode-switch.css";

const DarkmodeSwitch = ({ handleChange, isChecked }) => {

	return (
		<div className="darkmode-switch">
			<input
				type="checkbox"
				id="check"
				className="toggle" onChange={handleChange}
				checked={isChecked}
			/>
			<label htmlFor="check" className="darkmode-switch"></label>
			</div>
	)
};

export default DarkmodeSwitch;