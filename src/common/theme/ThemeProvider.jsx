import { 
    palette 
} from "@/common/theme/palette";

import { 
    typography 
} from "@/common/theme/typography";

import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles';

import { CssBaseline } from "@mui/material";

function ThemeProvider({
    children,
    theme
}){
    const darkTheme = createTheme({
        palette: palette(theme),
        typography: typography()
    })

    return(
        <MuiThemeProvider
          theme={darkTheme}
        >
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider;