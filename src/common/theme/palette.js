import { Colors } from "@/common/constants";

export const palette = (mode) => {
    const themeBackground = mode ? 'dark' : 'light';

    return {
        mode: themeBackground,
        background: {
            default: mode ? Colors.ScaleGrey : Colors.White
        },
        primary: {
            main: Colors.HavelockBlue,
            contrastText: Colors.White,
            dark: Colors.HavelockBlue
        }
    }
}