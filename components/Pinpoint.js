import styles from "./Footer.module.css";

export default function Pinpoint() {
  const containerStyle = {
    // overflow: "hidden",
    // maxWidth: "736px",
    // height: "160px",
  };

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
          src={`https://pinpointsurf.com/-77.791/34.201/12/ilm/Wrightsville-Beach,NC`}
          style={iframeStyle}
        ></iframe>
      </div>
    </>
  );
}
