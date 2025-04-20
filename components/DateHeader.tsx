import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { useSidebar } from "../contexts/SidebarContext"; 

interface DateHeaderProps {
  today: string;
  header: string;
}

const DateHeader: React.FC<DateHeaderProps> = ({ today, header}) => {
  const { handleDrawerToggle, isDesktop } = useSidebar();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: "auto" }}>
      
      {!isDesktop &&  (
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
      )}
      
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 0, opacity: 0.9 }}
        >
          {header}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ marginTop: 1, opacity: 0.7, fontSize: "0.8rem" }}
        >
          {today}
        </Typography>
      </Box>
    </Box>
  );
};

export default DateHeader;
