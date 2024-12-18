export default {
    docsRepositoryBase: 'https://github.com/your-repo/docs/',
    logo: <span>BotForge Docs</span>,
    project: {
        link: 'https://github.com/your-repo',
    },
    sidebar: {
        defaultMenuCollapsed: false,
        items: [
            {
                title: 'Getting Started',
                href: '/getting-started', // Path to the corresponding page
            },
            {
                title: 'Features',
                items: [
                    {
                        title: 'Feature A',
                        href: '/features/feature-a',
                    },

                ],
            },


        ],
    },
};
