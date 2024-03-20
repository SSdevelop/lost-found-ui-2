export const baseStyle = {
  width: "90%",
  height: "5.5em",
  margin: "auto",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

export const focusedStyle = {
  borderColor: "#2196f3",
};

export const acceptStyle = {
  borderColor: "#00e676",
};

export const rejectStyle = {
  borderColor: "#ff1744",
};

export const thumbsContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  marginLeft: 20,
};
export const thumb: React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

export const thumbInner: React.CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

export const img: React.CSSProperties = {
  display: "block",
  width: "auto",
  height: "auto",
};
