import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    drawer: {
        width: 300,
        flexShrink: 0,
        // display: { xs: 'none', md: 'block' },//sadece mobilde görünür.
        '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: "rgba(37,37,37)",
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        '& .MuiTypography-root': {
            fontSize: '0.9rem',
            color: "white"
        }
    },
    mainContent:{
            flex: '1 1 auto',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',        
    },
    typography: {
        fontSize: "0.9rem"
    },
    userContainer: {
        height: 100,
        flexShrink: 0
    },
    userInfo: {
        display: "flex",
        marginTop: 1
    },
    avatar: {
        width: 40,
        height: 40,
        bgcolor: 'grey.300',
        marginLeft: 1,
        marginRight: 1
    },
    searchContainer: {
        height: 50,
        textAlign: "center"
    },
    textField: {
        width: 230,
        '& .MuiInputBase-input': { // Input metni için
            color: 'white'
        },
        '& .MuiInputLabel-root': { // Label için
            color: 'white'
        },
        '& .MuiInput-underline:before': { // Alt çizgi normal durumu
            borderBottomColor: 'rgba(255, 255, 255, 0.42)'
        },

    },
    list: {
        flex: '1 1 auto',
        overflowY: 'auto'
    },
    listItemButton: {
        "&:hover": {
            backgroundColor: "rgba(30,30,30)",
        },
    },
    listItemIcon: {
        minWidth: '36px'
    },
    bottomContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexShrink: 0
    },
    newListButton:{
        backgroundColor: "rgba(37,37,37)",
        '&:hover': {
            backgroundColor: "rgba(30,30,30)",
        },
        textTransform: 'none',
        justifyContent: 'flex-start',
        paddingLeft: '16px'
    },
    groupButton:{
        width: "10px",
        color:"white",
        '&:hover': {
            backgroundColor: "rgba(30,30,30)",
        },
    }
}

