import { AppBar, Toolbar, Typography, Button } from "@mui/material";

type NavBarProps = {
  currentApp: string;
  setCurrentApp: (value: string) => void
}

export default function NavBar(props: NavBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FFX Tools
        </Typography>
        <Button color="inherit" onClick={() => props.setCurrentApp("mix-list")}>
          Mix List
        </Button>
        <Button color="inherit" onClick={() => props.setCurrentApp("monster-tracker")}>
          Monster Tracker
        </Button>
        <Button color="inherit" onClick={() => props.setCurrentApp("al-bhed-primers")}>
          Al Bhed Primers
        </Button>
      </Toolbar>
    </AppBar>
  );
}
