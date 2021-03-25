import {
	AvatarBlue,
	AvatarGreen,
	AvatarGrey,
	AvatarOrange,
	AvatarPurple,
	AvatarRed,
	AvatarYellow,
	d12,
	d20,
	d4,
	d6,
	d8,
	DarkBG,
	DarkLogo,
	LightBG,
	LightLogo,
	TeernaBG,
	TeernaLogo,
    TestMap1,
    TestMap2,
    TestMap3,
    DoorClosed,
    DoorOpen,
    LCorner,
    Pillar,
    TCorner,
    Wall,
    XCorner
} from '../mediaAssets';

export default {
	backgrounds: {
		DarkBG, // Dark Mode
		LightBG, // Light Mode
		TeernaBG, // Teerna Logo
	},
	logos: {
		teerna: TeernaLogo,
		dark: DarkLogo,
		light: LightLogo,
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
	map: {
        TestMap1,
        TestMap2,
        TestMap3,
        DoorOpen,
        DoorClosed,
        LCorner,
        TCorner,
        XCorner,
        Pillar,
        Wall
    },
	dice: { d4, d6, d8, d12, d20 },
};
