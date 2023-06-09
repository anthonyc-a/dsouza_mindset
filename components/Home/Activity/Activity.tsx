import React from "react";
import styles from "./Activity.module.css";
import Button from "../../Common/Buttons/Button";
import Preview from "./Preview/Preview";

const Activity = ({ data }: any) => {
  return (
    <div className={styles.activity}>
      <div className={styles.activityRow}>
        <div className={styles.activityInner}>
          <h3>Currently Watching:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img src={data[0]!.fields.image.fields.file.url} alt="" />
            </div>
            <div className={styles.itemInfo}>
              <h4>{data[0]!.fields.name}</h4>
              <span>{data[0]!.fields.type}</span>
              <Preview content={data[0]!.fields.description} />
              <a
                href={data[0]!.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[0]!.fields.platform}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.activityInner}>
          <h3>Currently Reading:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img src={data[1]!.fields.image.fields.file.url} alt="" />
            </div>
            <div className={styles.itemInfo}>
              <h4>{data[1]!.fields.name}</h4>
              <span>{data[1]!.fields.type}</span>
              <Preview content={data[1]!.fields.description} />
              <a
                href={data[1]!.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[1]!.fields.platform}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activityRow}>
        <div className={styles.activityInner}>
          <h3>Currently Listening:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img src={data[2]!.fields.image.fields.file.url} alt="" />
            </div>
            <div className={styles.itemInfo}>
              <h4>{data[2]!.fields.name}</h4>
              <span>{data[2]!.fields.type}</span>
              <Preview content={data[2]!.fields.description} />
              <a
                href={data[2]!.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[2]!.fields.platform}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.activityInner}>
          <h3></h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img src={data[3]!.fields.image.fields.file.url} alt="" />
            </div>
            <div className={styles.itemInfo}>
              <h4>{data[3]!.fields.name}</h4>
              <span>{data[3]!.fields.type}</span>
              <Preview content={data[3]!.fields.description} />
              <a
                href={data[3]!.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[3]!.fields.platform}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
