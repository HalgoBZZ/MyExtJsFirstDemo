
Ext.define('MyApp.view.calculator.calculator', {
    extend: 'Ext.panel.Panel',
    xtype: 'calculator',

    requires: [
        'MyApp.view.calculator.calculatorController',
        'MyApp.view.calculator.calculatorModel'
    ],

    controller: 'calculator-calculator',
    viewModel: {
        type: 'calculator-calculator'
    },

    // html: 'Hello, Calculator!!'

    items: [
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            scrollable: true,
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [{
                    xtype: 'form',
                    bodyPadding: 20,
                    maxWidth: 700,
                    flex: 1,
                    title: 'Custom Feedback',
                    items: [{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        fieldLabel: 'Name',
                        defaultType: 'textfield',
                        defaults: {
                            allowBlank: false,
                            flex: 1
                        },
                        items: [{
                            name: 'firstName',
                            emptyText: 'First Name'
                        }, {
                            name: 'lastName',
                            margin: '0 0 0 5',
                            emptyText: 'Last Name'
                        }
                        ]
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'dob',
                        maxValue: new Date() /* Prevent entering the future date.
       */
                    }, {
                        fieldLabel: 'Email Address',
                        name: 'email', vtype: 'email',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Phone Number',
                        labelWidth: 100,
                        name: 'phone',
                        width: 200, emptyText: 'xxx-xxx-xxxx',
                        maskRe: /[\d\-]/,
                        regex: /^\d{3}-\d{3}-\d{4}$/,
                        regexText: 'The format must be xxx-xxx-xxxx'
                    },
                    //…code truncated
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'How satisfied with our service?',
                        vertical: true, columns: 1,
                        items: [{
                            boxLabel: 'Very satisfied',
                            name: 'rb',
                            inputValue: '1'
                        }, {
                            boxLabel: 'Satisfied',
                            name: 'rb', inputValue: '2'
                        },
                            //…code truncated
                        ]
                    }, {
                        xtype: 'checkboxgroup',
                        fieldLabel: 'Which of these words would you use to describe our products? Select all that apply',
                        vertical: true,
                        columns: 1,
                        items: [{
                            boxLabel: 'Reliable',
                            name: 'ch',
                            inputValue: '1'
                        },
                            //…code truncated
                        ]

                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'How likely is it that you would recommendthis company to a friend or colleague?',
                        vertical: false,
                        defaults: { padding: 20 },
                        items: [{
                            boxLabel: '1',
                            name: 'recommend',
                            inputValue: '1'
                        },
                            //…code truncated
                        ],
                        buttons: [{
                            text: 'Submit',
                            handler: function () {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        url: 'cutomer/feedback',
                                        success: function () { },
                                        failure: function () { }
                                    });
                                } else {
                                    Ext.Msg.alert('Error', 'Fix the errors in the form')
                                }
                            }
                        }]
                    }]
                }]
            }]
        })
    ]
});
