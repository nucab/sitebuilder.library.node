import * as React from "react";

interface IProps {}

const Logo: React.SFC<IProps> = props => {
  return (
    <div className="p-2 mr-auto">
      <img
        src="https://res.cloudinary.com/dmhahyfum/image/upload/v1544579841/logo1.png"
        alt=""
      />
    </div>
  );
};

export default Logo;
