export interface IThemeContext {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

export const defaultState: IThemeContext = {
    isDarkTheme: false,
    toggleTheme: () => {},
};
