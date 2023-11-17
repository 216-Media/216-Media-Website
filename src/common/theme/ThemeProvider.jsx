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

import { CssBaseline } from "node_modules/@mui/material/index";

function ThemeProvider({
    children
}){
    const [theme, setTheme] = useState(false);

    const darkTheme = createTheme({
        palette: palette(theme),
        typography: typography()
    })

    const handleThemeChange = () => {
        setTheme(
            !theme
        )
    }

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