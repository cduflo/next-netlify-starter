import styles from "./Footer.module.css";

export default function SurfchexVideo({ id }) {
  const containerStyle = {
    // overflow: "hidden",
    // maxWidth: "736px",
    // height: "160px",
  };

  const iframeStyle = {
    // marginLeft: "-185px",
    height: "160px",
    // marginTop: "-500px",
    // width: "500px",
  };

  return (
    <>
      <div style={containerStyle}>
        <div>{id}</div>
        <iframe
          scrolling="no"
          src={`https://www.surfchex.com/cams/${id}#content-flowplayer`}
          style={iframeStyle}
        ></iframe>
      </div>
    </>
  );
}
