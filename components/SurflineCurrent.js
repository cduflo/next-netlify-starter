import styles from "./Footer.module.css";

export default function SurflineCurrent({ id }) {
  const containerStyle = {
    // overflow: "hidden",
    // maxWidth: "736px",
    height: "800px",
  };
  //crystal-pier/5842041f4e65fad6a7708a73
  const iframeStyle = {
    // marginLeft: "-185px",
    height: "800px",
    // marginTop: "-500px",
    // width: "500px",
  };

  return (
    <>
      <div style={containerStyle}>
        <iframe
          scrolling="no"
          src={`https://www.surfline.com/surf-report/${id}`}
          style={iframeStyle}
        ></iframe>
      </div>
    </>
  );
}
