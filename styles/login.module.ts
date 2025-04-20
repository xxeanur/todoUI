import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width:"100%",
  },
  wrapper: {
    backgroundColor: "rgba(50,50,50)",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "320px",
    textAlign: "center",
    position: "relative",
  },
  closeButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    right: 0,
  },
  closeButton: {
    backgroundColor: "rgba(20,20,20)",
    color: "#FEFAE0",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(10,10,10)",
    },
  },
  title: {
    marginBottom: 2,
    textAlign: "center",
  },
  inputField: {
    textAlign: "left",
    marginBottom: 2,
  },
  inputLabel: {
    textAlign: "left",
    marginBottom: 1,
    fontSize: "14px",
    fontWeight: 500,
  },
  formActions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 2,
    fontSize: "14px",
  },
  loginButton: {
    backgroundColor: "rgba(20,20,20)",
    color: "#FEFAE0",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(10,10,10)",
    },
  },
  registerText: {
    marginTop: 2,
    textAlign: "center",
    fontSize: "14px",
  },
};
