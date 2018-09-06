/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('XPaint.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    requires : [
        'XPaint.model.Canvas',
        'XPaint.model.graph.Rect'
    ],
    alias: 'viewmodel.xpaint.main',

    data: {
        system : {
            name : XPAINTI18N.SYSTEM.NAME,
            version : XPAINTI18N.SYSTEM.VERSION
        },

        glyphs : {
            graphtool : '95@linea-software-10'
        },

        rectProperty : {
            borderWidth : 2
        }
    },

    links : {
        canvas : {
            type : 'XPaint.model.Canvas',
            create: true
        },
        rect : {
            type : 'XPaint.model.graph.Rect',
            create : true
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});