
Ext.define('MyApp.view.groups.groups', {
    extend: 'Ext.panel.Panel',
    xtype: 'groups',

    requires: [
        'MyApp.view.groups.groupsController',
        'MyApp.view.groups.groupsModel',
        'Ext.container.Viewport'
    ],

    controller: 'groups-groups',
    viewModel: {
        type: 'groups-groups'
    },
    items: [
        Ext.create('Ext.form.Panel', {
            // Ext.create('Ext.container.Viewport', {
            scrollable: true,
            layout: 'fit',
            items: [{
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'form',
                        bodyPadding: 20,
                        maxWidth: 700,
                        flex: 1,
                        title: 'Custom Feedback',
                        items: [
                            Ext.create('Ext.form.FieldContainer', {
                                fieldLabel: 'Name',
                                layout: 'hbox',
                                combineErrors: true,
                                dafaultType: 'textfield',
                                defaults: {
                                    allowBlank: false,
                                    hideLabel: 'true',
                                    // flex: 1
                                },
                                items: [{
                                    name: 'firstName',
                                    fieldLabel: 'First Name',
                                    emptyText: 'First Name',
                                    flex: 2,
                                    allowBlank: false
                                }, {
                                    name: 'lastName',
                                    fieldLabel: 'Last Name',
                                    emptyText: 'Last Name',
                                    margin: '0 0 0 6',
                                    flex: 3,
                                    allowBlank: false
                                }]
                            }),
                            Ext.create('Ext.form.FieldContainer', {
                                fieldLabel: 'Name',
                                layout: 'hbox',
                                combineErrors: true,
                                defaultType: 'textfield',
                                defaults: {
                                    hideLabel: 'true'
                                },
                                items: [{
                                    name: 'firstName',
                                    fieldLabel: 'First Name',
                                    flex: 2,
                                    emptyText: 'First',
                                    allowBlank: false
                                }, {
                                    name: 'lastName',
                                    fieldLabel: 'Last Name',
                                    flex: 3,
                                    margin: '0 0 0 6',
                                    emptyText: 'Last',
                                    allowBlank: false
                                }]
                            }),
                            Ext.create('Ext.form.field.Date', {
                                name: 'birth',
                                fieldLabel: 'Date of Birth',
                                allowBlank: false
                            }),
                            Ext.create('Ext.form.field.Text', {
                                name: 'email',
                                fieldLabel: 'Email',
                                vtype: 'email',
                                allowBlank: false
                            }),
                            Ext.create('Ext.form.field.Number', {
                                name: 'tel',
                                fieldLabel: 'Phone Number',
                                //vtype: 'number',
                                allowBlank: false,
                                hideTrigger: true,
                                keyEnabled: true,
                                min: 20000000,
                                max: 9999999,
                                mouseWheelEnabled: false,
                                emptyText: 'xxx-xxx-xxx'
                            }),
                            Ext.create('Ext.form.field.Number', {
                                name: 'purchase_count',
                                fieldLabel: 'How many times have you purchased our product?',
                                allowBlank: false,
                                value: 0,
                            }),
                            Ext.create('Ext.form.RadioGroup', {
                                fieldLabel: 'How satisfied by our service?',
                                vertical: true,
                                columns: 3,
                                items: [
                                    { inputValue: '4', boxLabel: 'Very stisfied', name: 'rb', selected: true },
                                    { inputValue: '3', boxLabel: 'Satisfied', name: 'rb' },
                                    { inputValue: '2', boxLabel: 'Didnt care', name: 'rb' },
                                    { inputValue: '1', boxLabel: 'Dissatisfied', name: 'rb' },
                                    { inputValue: '0', boxLabel: 'Very Dissatisfied', name: 'rb' }
                                ]
                            }),

                            Ext.create('Ext.form.CheckboxGroup', {
                                fieldLabel: 'Which of these words would you use to discribe our products? Select all the apply',
                                vertical: true,
                                columns: 3,
                                items: [
                                    { boxLabel: 'Reliable', name: 'quality', inputValue: '4' },
                                    { boxLabel: 'High quality', name: 'quality', inputValue: '3' },
                                    { boxLabel: 'Good value for money', name: 'quality', inputValue: '2' },
                                    { boxLabel: 'Overpriced', name: 'quality', inputValue: '1' },
                                    { boxLabel: 'Poor quality', name: 'quality', inputValue: '0' }
                                ]
                            }),

                            Ext.create('Ext.form.RadioGroup', {
                                vertical: false,
                                fieldLabel: 'How likely is it that you would recommand this company to a freind or colleague?',
                                items: [
                                    { boxLabel: '1', name: 'note', inputValue: '1' },
                                    { boxLabel: '2', name: 'note', inputValue: '2' },
                                    { boxLabel: '3', name: 'note', inputValue: '3' },
                                    { boxLabel: '4', name: 'note', inputValue: '4' },
                                    { boxLabel: '5', name: 'note', inputValue: '5' }
                                ]
                            }),
                            Ext.create('Ext.form.TextArea', {
                                filedLabel: 'Comments:',
                                allowBlank: false,
                                anchor: '100%'

                            })
                        ],
                        buttons: [{
                            text: 'Submit',
                            handler: function () {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        url: 'customer/feedback',
                                        success: function () {
                                            Ext.Msg.alert('Success!', 'success..............!');
                                        },
                                        failure: function () {
                                            Ext.Msg.alert('Failure!', 'failure.............!');
                                        }
                                    });
                                } else {
                                    Ext.Msg.alert('Error', 'Fix the errors before submitting');
                                }
                            }
                        }]
                    }]
            }]
        })
    ]
});
