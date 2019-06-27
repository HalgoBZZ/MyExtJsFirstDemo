
Ext.define('MyApp.view.users.users', {
    extend: 'Ext.panel.Panel',
    xtype: 'users',
    layout: 'card',
    defaultListenerScope: true,
    bbar: ['->',
        {
            itemId: 'btn-prev',
            text: 'Previous',
            handler: 'showPrevious',
            disabled: true
        },
        {
            itemId: 'btn-next',
            text: 'Next',
            handler: 'showNext'
        }
    ],

    requires: [
        'MyApp.view.users.usersController',
        'MyApp.view.users.usersModel'
    ],

    controller: 'users-users',
    viewModel: {
        type: 'users-users'
    },
    // html: 'Hello, Users!!',
    items: [
        {
            index: 0,
            title: 'Item 1',
            items: [
                Ext.create('Ext.Button', {
                    text: 'My Button',
                    renderTo: Ext.getBody(),
                    handler: function () {
                        alert('click');
                    }
                }),
                Ext.create('Ext.Button', {
                    renderTo: Ext.getBody(),
                    text: 'Link Button',
                    href: 'http://www.sencha.com/'
                }),
                Ext.create('Ext.Button', {
                    text: 'My Button',
                    renderTo: Ext.getBody(),
                    menu: [{
                        text: 'Item 1'
                    }, {
                        text: 'Item 2'
                    }, {
                        text: 'Item 3'
                    }]
                })
            ]
        },
        {
            index: 1,
            title: 'Item 2'
        }
    ]

});
