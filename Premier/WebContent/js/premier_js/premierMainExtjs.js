Ext.onReady(function() {
	
	var itemsPerPage = 20;

	Ext.define('User', {
      extend: 'Ext.data.Model',
        fields: ['si_number',
        		 'sale_date',
        		 'in_product', 
        		 'sale_product', 
        		 'van_in_quantity', 
        		 'staff_attendance',
        	     'additional_spend',
        	  	 'sack_sale'],
  	});
	
	 var store = Ext.create('Ext.data.Store', {
	      model: 'User',
	      pageSize: itemsPerPage,
		  remoteSort: true,
	      proxy: {
	          type: 'ajax',
	          url : 'saleData',
	          reader:{
	            type: 'json',
	            rootProperty: 'data',
				totalProperty: 'total'
	            },
				autoLoad: {start: 0,
		        			limit: itemsPerPage},
	      },
	  });
		store.load({
		    params: {
		        start: 0,
		        limit: itemsPerPage,
				foo : 'bar'
		    }
		});
	console.log(store);
	
	var add = Ext.create('Ext.button.Button', {
        text: 'Add',
        handler: function() {
            var wind_add = Ext.create('Ext.window.Window', {
                title: 'Add Sale Details',
                height: '88%',
                width: '50%',
                border: true,
                buttonAlign: 'center',
                items: [{
                    xtype: 'combobox',
                    labelWidth: '20%',
                    width: '95%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Day Manager<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'day_manager_id',
                    allowBlank: false,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [{
                            'abbr': 'USP',
                            'name': 'USP'
                        }, {
                            'abbr': 'SKP',
                            'name': 'SKP'
                        }, {
                            'abbr': 'SCP',
                            'name': 'SCP'
                        }, {
                            'abbr': 'RP',
                            'name': 'RP'
                        }]
                    }),
                    valueField: 'abbr',
                    displayField: 'name'
                }, {
                    xtype: 'datefield',
                    labelWidth: '20%',
                    width: '95%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Sale Date<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'sale_date_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Purchase Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'purchase_quantity_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Sale Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'sale_quantity_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Van In Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'van_in_quantity_id'
                }, {
                    xtype: 'fieldcontainer',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    fieldLabel: 'Staff Attendance<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'staff_attendance_id',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [{
                        boxLabel: 'Present',
                        inputValue: 1,
                        id: 'radio1'
                    }, {
                        boxLabel: 'Absent',
                        inputValue: 0,
                        margin: '0px 0 0px 60px',
                        id: 'radio2'
                    }]
                },{
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    fieldLabel: 'Additional Spend<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'additional_spend_id',
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    fieldLabel: 'Sack Sale<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'Sack_sale_id',
                }],

                buttons: [{
                    xtype: 'button',
                    align: 'center',
                    text: 'Save',
                    handler: function() {
                        Ext.Ajax.request({
                            url: 'premierAddForm',
                            method: 'GET',
                            params: {
                            	day_manager_id: Ext.getCmp('day_manager_id').getValue(),
                            	sale_date_id: Ext.getCmp('sale_date_id').getValue(),
                            	purchase_quantity_id: Ext.getCmp('purchase_quantity_id').getValue(),
                            	sale_quantity_id: Ext.getCmp('sale_quantity_id').getValue(),
                            	van_in_quantity_id: Ext.getCmp('van_in_quantity_id').getValue(),
                            	staff_attendance_id: Ext.getCmp('radio1').getValue(),
                                additional_spend_id: Ext.getCmp('additional_spend_id').getValue(),
                                Sack_sale_id: Ext.getCmp('Sack_sale_id').getValue(),
                                add: 'add'
                            },
                        });
                        grid.getView().refresh();
                        store.reload();
                        wind_add.hide();
                    }
                }, {
                    xtype: 'button',
                    align: 'center',
                    text: 'Cancel',
                    handler: function() {
                        wind_add.close();
                    }
                }]
            }).show();
        }
    });
	
	var edit = Ext.create('Ext.button.Button', {
        text: 'Edit',
        handler: function() {
        	var premiergridvalue = Ext.getCmp('premiergrid').getSelectionModel().getSelection();
            var wind_edit = Ext.create('Ext.window.Window', {
                title: 'Add Sale Details',
                height: '88%',
                width: '50%',
                border: true,
                buttonAlign: 'center',
                items: [{
                    xtype: 'combobox',
                    labelWidth: '20%',
                    width: '95%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Day Manager<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'day_manager_id',
                    value: 'USP',
                    allowBlank: false,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [{
                            'abbr': 'USP',
                            'name': 'USP'
                        }, {
                            'abbr': 'SKP',
                            'name': 'SKP'
                        }, {
                            'abbr': 'SCP',
                            'name': 'SCP'
                        }, {
                            'abbr': 'RP',
                            'name': 'RP'
                        }]
                    }),
                    valueField: 'abbr',
                    displayField: 'name'
                }, {
                    xtype: 'datefield',
                    labelWidth: '20%',
                    value: premiergridvalue[0].data.sale_date,
                    width: '95%',
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Sale Date<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'sale_date_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    value: premiergridvalue[0].data.in_product,
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Purchase Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'purchase_quantity_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    value: premiergridvalue[0].data.sale_product,
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Sale Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'sale_quantity_id'
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    value: premiergridvalue[0].data.van_in_quantity,
                    margin: '10px 0 0px 10px',
                    allowBlank: false,
                    fieldLabel: 'Van In Quantity<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'van_in_quantity_id'
                }, {
                    xtype: 'fieldcontainer',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    value: premiergridvalue[0].data.staff_attendance,
                    fieldLabel: 'Staff Attendance<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'staff_attendance_id',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [{
                        boxLabel: 'Present',
                        inputValue: 1,
                        id: 'radio1'
                    }, {
                        boxLabel: 'Absent',
                        inputValue: 0,
                        margin: '0px 0 0px 60px',
                        id: 'radio2'
                    }]
                },{
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    value: premiergridvalue[0].data.additional_spend,
                    fieldLabel: 'Additional Spend<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'additional_spend_id',
                }, {
                    xtype: 'numberfield',
                    width: '95%',
                    labelWidth: '20%',
                    margin: '10px 0 0px 10px',
                    value: premiergridvalue[0].data.sack_sale,
                    fieldLabel: 'Sack Sale<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
                    id: 'sack_sale_id',
                }],

                buttons: [{
                    xtype: 'button',
                    align: 'center',
                    text: 'Save',
                    handler: function() {
                        Ext.Ajax.request({
                            url: 'premierEditForm',
                            method: 'GET',
                            params: {
                            	si_number_id : premiergridvalue[0].data.si_number,
                            	day_manager_id: Ext.getCmp('day_manager_id').getValue(),
                            	sale_date_id: Ext.getCmp('sale_date_id').getValue(),
                            	purchase_quantity_id: Ext.getCmp('purchase_quantity_id').getValue(),
                            	sale_quantity_id: Ext.getCmp('sale_quantity_id').getValue(),
                            	van_in_quantity_id: Ext.getCmp('van_in_quantity_id').getValue(),
                            	staff_attendance_id: Ext.getCmp('radio1').getValue(),
                                additional_spend_id: Ext.getCmp('additional_spend_id').getValue(),
                                sack_sale_id: Ext.getCmp('sack_sale_id').getValue(),
                                edit: 'edit'
                            },
                        });
                        grid.getView().refresh();
                        store.reload();
                        wind_edit.hide();
                    }
                }, {
                    xtype: 'button',
                    align: 'center',
                    text: 'Cancel',
                    handler: function() {
                        wind_add.close();
                    }
                }]
            }).show();
        }
    });
	
	
	 var grid= Ext.create('Ext.grid.Panel', {
		store: store,
 	    dockedItems:[{
 				bbar: Ext.create('Ext.PagingToolbar', {
 			    store: store,
 	            displayInfo: true,
 				dock: 'top',
 	            displayMsg: '{0} - {1} of {2}',
 	            emptyMsg: "No topics to display",
 	           items:[add,edit]
         	}),
 		}],
 		id :'premiergrid',
 		selModel: {
 	        checkOnly: false,
 	        mode: 'SIMPLE'
 	    },
 	    selType: 'checkboxmodel',
 	    columns: [
 	        { text: 'SI.NO.', dataIndex: 'si_number',height: 40},
 			{ text: 'DATE', dataIndex: 'sale_date',height: 40},
 	        { text: 'PURCHASE QUANTITY', dataIndex: 'in_product',height: 40},
 	        { text: 'SALE QUANTITY', dataIndex: 'sale_product',height: 40},
 	        { text: 'VAN IN QUANTITY', dataIndex: 'van_in_quantity',height: 40},
 	        { text: 'STAFF ATTENDANCE', dataIndex: 'staff_attendance',height: 40},
 	        { text: 'ADDITIONAL SPEND', dataIndex: 'additional_spend',height: 40},
 	        { text: 'SACK SALE', dataIndex: 'sack_sale',height: 40},
 	    ]
 	});
	 

	var main = Ext.create('Ext.panel.Panel', {
	    xtype: 'layout-border',
	    requires: [
	        'Ext.layout.container.Border'
	    ],
	    profiles: {
	        classic: {
	            itemHeight: 100
	        },
	        neptune: {
	            itemHeight: 100
	        },
	        graphite: {
	            itemHeight: 120
	        },
	        'classic-material': {
	            itemHeight: 120
	        }
	    },
	    layout: 'border',
	    width: '100%',
	    height: 740,
	    cls: Ext.baseCSSPrefix + 'shadow',

	    bodyBorder: false,

	    defaults: {
	        collapsible: true,
	        split: true,
	        bodyPadding: 10
	    },

	    items: [
	        {
	            title: 'Footer',
	            region: 'south',
	            height: 100,
	            minHeight: 75,
	            maxHeight: 150,
	        	width : '150',
	            html: '<p>Footer content</p>'
	        },
	        {
	            title: 'Navigation',
	            region: 'west',
	            floatable: false,
	            margin: '5 0 0 0',
	            width: 125,
	            minWidth: 500,
	            maxWidth: 500,
	        	launch : function(){
	        	}
	        },
	        {
	            title: 'Main Content',
	            collapsible: false,
	            region: 'center',
	            margin: '5 0 0 0',
	            items : [grid],
	        }
	    ]
	});
    Ext.create('Ext.container.Viewport', {
        items: [main],
        renderTo: 'Main'
    });

});