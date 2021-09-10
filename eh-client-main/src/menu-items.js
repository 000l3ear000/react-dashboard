const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: "#",
                    icon: 'feather icon-home',
                    
                },
                {
                    id: 'layout',
                    title: 'Trust',
                    type: 'collapse',
                    icon: 'feather icon-clipboard',
                    children: [
                        {
                            id: 'trust',
                            title: 'Trust List',
                            type: 'item',
                            url: '/trust/list',
                        },

                        {
                            id: 'trust-kanban',
                            title: 'Trust Kanban',
                            type: 'item',
                            url: '/trust/kanban',
                        }
                    ]
                },
               
            ]
        },

    ]
};

export default menuItems;
