import { colours, gradients } from '../styles';

export default {
    border: {
        gradient: gradients.border,
    },
    teerna: {
        black: colours.grey[300],
        white: colours.white,
        orange: colours.accent.orange[100],
        purple: colours.accent.purple[100],
        pink:  colours.accent.pink,
        mint: colours.accent.mint,
        aqua: colours.accent.aqua[100],
    },
    status: {
        error: colours.status.error,
        info: colours.status.info,
        warning: colours.status.warning,
        success: colours.warning.success,
    },
    state: {
        disabled: colours.status.disabled,
    }
}