import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./content-cell.module.css";

const ContentCell = ({ className = "", propPadding }) => {
  const contentCellStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.contentCell, className].join(" ")}
      style={contentCellStyle}
    >
      <div className={styles.contentCellInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.gridiconsstoryParent}>
            <input className={styles.gridiconsstory} type="checkbox" />
            <div className={styles.buisnessConsultingWrapper}>
              <div className={styles.buisnessConsulting}>
                Buisness consulting
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <b className={styles.theFutureOf}>
              The Future of AI Writing: What do you want to know
            </b>
          </div>
        </div>
      </div>
      <div className={styles.contentCell1}>
        <div className={styles.contentCellChild} />
        <div className={styles.gridItem1}>
          <input className={styles.gridiconsstory1} type="checkbox" />
          <div className={styles.buisnessConsultingContainer}>
            <div className={styles.buisnessConsulting1}>
              Buisness consulting
            </div>
          </div>
        </div>
        <div className={styles.gridItem2}>
          <b className={styles.theFutureOf1}>
            The Future of AI Writing: What do you want to know
          </b>
        </div>
      </div>
    </div>
  );
};

ContentCell.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ContentCell;
