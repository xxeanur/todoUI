import {SxProps,Theme} from '@mui/material'


export const styles:Record<string, SxProps<Theme>> ={
    container:{
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

      inputField: {
        textAlign: "left",
        marginBottom: 2,
      },

      registerButton:{
        backgroundColor: "rgba(20,20,20)",
        color: "#FEFAE0",
        width: "100%",
        "&:hover": {
            backgroundColor: "rgba(10,10,10)",
          },
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

}