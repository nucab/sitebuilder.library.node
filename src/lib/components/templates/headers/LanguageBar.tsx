import * as React from "react";

interface IProps {}

const LanguageBar: React.SFC<IProps> = props => {
  return (
    <div className="d-flex align-items-center">
      <ul className="d-flex m-0">
        <li className="list-inline-item">
          <img
            src="https://res.cloudinary.com/dmhahyfum/image/upload/v1544579841/translate1.png"
            alt=""
          />
        </li>
        <li className="list-inline-item">
          <img
            src="https://res.cloudinary.com/dmhahyfum/image/upload/v1544579841/translate2.png"
            alt=""
          />
        </li>
        <li className="list-inline-item">
          <img
            src="https://res.cloudinary.com/dmhahyfum/image/upload/v1544579841/translate3.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default LanguageBar;
