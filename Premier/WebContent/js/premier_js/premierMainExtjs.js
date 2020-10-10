Ext.onReady(function() {

	var login = Ext.create('Ext.panel.Panel', {
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
	            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
	        }
	    ]

	});


    Ext.create('Ext.container.Viewport', {
        items: [login],
        renderTo: 'Main'
    });

});