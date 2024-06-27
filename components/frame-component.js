import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({
  className = "",
  firstBenefitIcon,
  careerAdvancement,
  positionYourselfForCareer,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={[styles.globalDetailsParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.globalDetails}>
        <img
          className={styles.firstBenefitIcon}
          loading="lazy"
          alt=""
          src={firstBenefitIcon}
        />
      </div>
      <div className={styles.globalDescriptionParent}>
        <div className={styles.globalDescription}>
          <div className={styles.careerAdvancement}>{careerAdvancement}</div>
        </div>
        <div className={styles.positionYourselfFor}>
          {positionYourselfForCareer}
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  firstBenefitIcon: PropTypes.string,
  careerAdvancement: PropTypes.string,
  positionYourselfForCareer: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
