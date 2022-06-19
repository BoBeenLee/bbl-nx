// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export type ModeType = "dark" | "light";

    export interface DefaultTheme {
        mode: ModeType;
        size: "large";
    }
}
