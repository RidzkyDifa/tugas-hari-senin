import { help } from "../../Asset/Images/list";

const HelpOption = () => {
  return (
    <div>
      <div className="help-option">
        {help.map((option, index) => (
          <div key={index} className="help-item">
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpOption;
