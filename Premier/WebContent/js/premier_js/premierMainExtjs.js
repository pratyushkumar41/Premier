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

	 var grid= Ext.create('Ext.grid.Panel', {
		store: store,
 	    dockedItems:[{
 				bbar: Ext.create('Ext.PagingToolbar', {
 			    store: store,
 	            displayInfo: true,
 				dock: 'top',
 	            displayMsg: '{0} - {1} of {2}',
 	            emptyMsg: "No topics to display",
         	}),
 		}],
 		id :'invoicegrid',
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