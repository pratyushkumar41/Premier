Ext.onReady(function() {

    var states = Ext.create('Ext.data.Store', {
        fields: ['code', 'name'],
        data: [{
            "code": "AP",
            "name": "Andhra Pradesh"
        }, {
            "code": "AR",
            "name": "Arunachal Pradesh"
        }, {
            "code": "AS",
            "name": "Assam"
        }, {
            "code": "BR",
            "name": "Bihar"
        }, {
            "code": "CG",
            "name": "Chhattisgarh"
        }, {
            "code": "Chandigarh",
            "name": "Chandigarh"
        }, {
            "code": "DN",
            "name": "Dadra and Nagar Haveli"
        }, {
            "code": "DD",
            "name": "Daman and Diu"
        }, {
            "code": "DL",
            "name": "Delhi"
        }, {
            "code": "GA",
            "name": "Goa"
        }, {
            "code": "GJ",
            "name": "Gujarat"
        }, {
            "code": "HR",
            "name": "Haryana"
        }, {
            "code": "HP",
            "name": "Himachal Pradesh"
        }, {
            "code": "JK",
            "name": "Jammu and Kashmir"
        }, {
            "code": "JH",
            "name": "Jharkhand"
        }, {
            "code": "KA",
            "name": "Karnataka"
        }, {
            "code": "KL",
            "name": "Kerala"
        }, {
            "code": "MP",
            "name": "Madhya Pradesh"
        }, {
            "code": "MH",
            "name": "Maharashtra"
        }, {
            "code": "MN",
            "name": "Manipur"
        }, {
            "code": "ML",
            "name": "Meghalaya"
        }, {
            "code": "MZ",
            "name": "Mizoram"
        }, {
            "code": "NL",
            "name": "Nagaland"
        }, {
            "code": "OR",
            "name": "Orissa"
        }, {
            "code": "PB",
            "name": "Punjab"
        }, {
            "code": "PY",
            "name": "Pondicherry"
        }, {
            "code": "RJ",
            "name": "Rajasthan"
        }, {
            "code": "SK",
            "name": "Sikkim"
        }, {
            "code": "TN",
            "name": "Tamil Nadu"
        }, {
            "code": "TR",
            "name": "Tripura"
        }, {
            "code": "UP",
            "name": "Uttar Pradesh"
        }, {
            "code": "UK",
            "name": "Uttarakhand"
        }, {
            "code": "WB",
            "name": "West Bengal"
        }]
    });

    var login = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        buttonAlign: 'center',
        align: 'center',
        textfield: 'center',
        width: 520,
        margin: "150%, 100, 100, 400 ",
        title: 'LOGIN/REGISTER',
        bodyPadding: 10,

        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: 'User ID<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
            name: 'user',
            emptyText: 'user id',
            id : 'loginUserId',
            msgTarget: 'under'
        }, {
            allowBlank: false,
            fieldLabel: 'Password<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
            name: 'pass',
            id : 'loginPassId',
            emptyText: 'password',
            inputType: 'password'
        }],

        buttons: [{
                text: 'Register',
                handler: function() {
                    var register_win = Ext.create('Ext.window.Window', {
                        title: 'Register',
                        bodyPadding: 10,
                        scrollable: true,
                        width: 400,
                        height: '80%',
                        buttonAlign: 'center',
                        fieldDefaults: {
                            labelAlign: "right",
                            labelWidth: 115,
                            msgTarget: 'side'
                        },

                        items: [{
                            xtype: 'fieldset',
                            title: 'User Info',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },

                            items: [{
                                    allowBlank: false,
                                    fieldLabel: 'User ID<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                    name: 'user',
                                    id : 'userid',
                                    emptyText: 'user id'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: 'Password<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                    name: 'pass',
                                    id : 'passid',
                                    emptyText: 'password',
                                    inputType: 'password'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: 'Verify<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                    name: 'pass',
                                    id : 'verifyid',
                                    emptyText: 'password',
                                    inputType: 'password'
                                }
                            ]
                        }, {
                            xtype: 'fieldset',
                            title: 'Contact Information',

                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },

                            items: [{
                                fieldLabel: 'First Name<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                emptyText: 'First Name',
                                allowBlank: false,
                                id : 'firstid',
                                name: 'first'
                            }, {
                                fieldLabel: 'Last Name',
                                emptyText: 'Last Name',
                                id : 'lastid',
                                name: 'last'
                            }, {
                                fieldLabel: 'Company<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                allowBlank: false,
                                id : 'companyid',
                                name: 'company'
                            }, {
                                fieldLabel: 'Email<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                name: 'email',
                                id : 'emailid',
                                allowBlank: false,
                                vtype: 'email'
                            }, {
                                xtype: 'combobox',
                                allowBlank: false,
                                fieldLabel: 'State<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                name: 'state',
                                id : 'stateid',
                                store: states,
                                valueField: 'code',
                                displayField: 'name',
                                typeAhead: true,
                                queryMode: 'local',
                                emptyText: 'Select a state...'
                            }, {
                                xtype: 'datefield',
                                fieldLabel: 'Date of Birth<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                                name: 'dob',
                                id : 'dobid',
                                allowBlank: false,
                                maxValue: new Date()
                            }]
                        }],

                        buttons: [{
                            text: 'Register',
                            formBind: true,
                            handler: function(){
             				   
             					if(Ext.getCmp('userid').getValue()=='') alert("!! User cannot be empty")
             			   		else if(Ext.getCmp('passid').getValue()=='') alert("!! Password cannot be empty")
             			   		else if(Ext.getCmp('verifyid').getValue()=='') alert("!! Verify Password cannot be empty")
             					else if(Ext.getCmp('firstid').getValue()=='') alert("!! First Name cannot be empty")
             					else if(Ext.getCmp('companyid').getValue()=='') alert("!! Company cannot be empty")
             					else if(Ext.getCmp('emailid').getValue()=='') alert("!! Email cannot be empty")
             					else if(Ext.getCmp('stateid').getValue()=='') alert("!! State cannot be empty")
             					else if(Ext.getCmp('dobid').getValue()=='') alert("!! DOB cannot be empty")
             					else if(Ext.getCmp('passid').getValue() != Ext.getCmp('verifyid').getValue())alert("!! Password doesn't match")
             			   		else{
		             				   
		             			   Ext.Ajax.request({
		                                 url: 'register',
		                                 method: 'GET',
		                                 params: {
		                                	 user : Ext.getCmp('userid').getValue(),
		                                	 pass : Ext.getCmp('passid').getValue(),
		                                	 verify : Ext.getCmp('verifyid').getValue(),
		                                	 first : Ext.getCmp('firstid').getValue(),
		                                	 company : Ext.getCmp('companyid').getValue(),
		                                	 email : Ext.getCmp('emailid').getValue(),
		                                	 state : Ext.getCmp('stateid').getValue(),
		                                	 dob : Ext.getCmp('dobid').getValue()
		                                 	},
		                             });
		             			   		register_win.close();
		             					Ext.toast({
		             					     html: 'Data Saved',
		             					     title: 'Registered',
		             					     width: 200,
		             					     align: 't'
		             					 });
             			   		}
             				}
                        }]
                    }).show();
                }
            },
            {
                text: 'Login',
                handler: function(){
  				   
 					if(Ext.getCmp('loginUserId').getValue()=='') alert("!! User cannot be empty")
 			   		else if(Ext.getCmp('loginPassId').getValue()=='') alert("!! Password cannot be empty")
 			   		else{	   
         			   Ext.Ajax.request({
                             url: 'login',
                             method: 'GET',
                             params: {
                            	 loginUser : Ext.getCmp('loginUserId').getValue(),
                            	 loginPass : Ext.getCmp('loginPassId').getValue()
                             	},
                             	success : function(){
                             		Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
                             	       if (btn == 'ok'){
                             	                          var redirect = 'premierMain.jsp'; 
                             	                          window.location = redirect;
                             	       }
                             		});
                             	},
                             	failure:function(form, action){ 
                                    alert('Login Failed!');
                                   } 
                         });
                         
 			   		}
 				}
            }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    });


    Ext.create('Ext.container.Viewport', {
        items: [login],
        renderTo: 'Hello'
    });

});