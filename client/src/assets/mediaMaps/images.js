import { AvatarBlue, AvatarGreen, AvatarGrey, AvatarOrange, AvatarPurple, AvatarRed, AvatarYellow, d12, d20, d4, d6, d8, DarkBG, DarkLogo, LightBG, LightLogo, TeernaBG, TeernaLogo } from '../mediaAssets';

export default {
    backgrounds: {
        DarkBG,     // Dark Mode
        LightBG,    // Light Mode
        TeernaBG    // Teerna Logo
    },
    logos: {
        teerna: TeernaLogo,
        dark: DarkLogo,
        light: LightLogo
    },
    avatars: {
        blue: AvatarBlue,
        green: AvatarGreen,
        grey: AvatarGrey,
        orange: AvatarOrange,
        purple: AvatarPurple,
        red: AvatarRed,
        yellow: AvatarYellow,
    },
    dice: { d4, d6, d8, d12, d20 }
}