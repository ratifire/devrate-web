export const styles = {
    container: (theme) => ({
        background: theme.palette.background.gradient,
        paddingY: 58,

    }),
    gridContainer: () => ({
        maxWidth: 1248,
        margin: '0 auto',
    }),
    textBox: () => ({
        maxWidth: 405,
        margin: '0 auto',
    }),
    videoBox: () => ({
        // paddingLeft: 13,
    }),
    title: (theme) => ({
        marginBottom: 20,
        fontSize: 46,
        fontWeight: 500,
        lineHeight: '46px',
        background: theme.typography.aboutTitle.background,
        backgroundClip: 'text',
        color: 'transparent',
        '&-webkit-background-clip': 'text',
        '&-webkit-text-fill-color': 'linear-gradient(90.00deg, rgb(117, 98, 228),rgb(251, 147, 166)',
    }),
    list: () => ({
        listStyle: 'decimal',
        paddingY: 0,
        paddingX: 20,
    }),
    listItem: (theme) => ({
        display: "list-item",
        fontSize: 18,
        color: theme.palette.text.primary,
    }),
    text: (theme) => ({
        marginBottom: 10,
        fontWeight: 500,
        fontSize: 18,
        lineHeight: '30px',
        letterSpacing: '1.62%',
        color: theme.palette.text.primary,
    }),
    card: () => ({
        height: 483,
        width: 611,
        borderRadius: '20px',
        '@media (min-width: 520px)': {
            height: 483,
            width: 611,
        },
    }),
};