import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js', // Optional for custom theme settings
});

export default withNextra();
