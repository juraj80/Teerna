import { colours, gradients } from '../styles';

export default {
    border: {
        gradient: gradients.border,
    },
    teerna: {
        black: colours.grey[300],
        white: colours.white,
        orange: colours.accent.orange,
        purple: colours.accent.purple,
        pink:  colours.accent.pink,
        mint: colours.accent.mint,
        aqua: colours.accent.aqua,
    },
    status: {
        error: colours.status.error,
        info: colours.status.info,
        warning: colours.status.warning,
        success: colours.status.success,
    },
    state: {
        disabled: colours.status.disabled,
    }
}