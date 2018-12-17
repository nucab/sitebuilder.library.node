import * as React from "react";
import cx from "classnames";
import styled from "styled-components";

interface IProps {
  center?: boolean;
  separator?: boolean;
  theme?: "light" | "dark";
}

const Description: React.SFC<IProps> = props => {
  return (
    <Wrapper
      separator={props.separator}
      theme={props.theme}
      className={cx(
        "py-3",
        { "text-center": props.center },
        `text-${props.theme}`
      )}
    >
      电竞王最具有公信力的博彩公司，更有高品质的游戏平台及多国真人厅赌城供客户选择、打造线上博彩第一品牌。公司不仅拥有市场上最多样化的游戏投注平台，同时为客户提供即时、刺激、高信誉的服务保证、高品质的游戏平台，也是公司的首要宗旨。
    </Wrapper>
  );
};

Description.defaultProps = {
  center: false,
  separator: false,
  theme: "dark"
};

const Wrapper = styled.div<{ separator?: boolean; theme?: "light" | "dark" }>`
  border-bottom: 1px solid
    ${props => (props.separator ? `var(--${props.theme})` : "inherit")};
`;

export default Description;
