
Ext.define('XPaint.common.ActionMaps', {
    singleton  : true,
    alternateClassName: ['ActionMaps'],
    ACTION_LIST : {
        "DRAW_RECT" : {
            className : "XPaint.command.DrawRectCmd",
            propertyPanel : "XPaint.view.main.property.DrawRectPropPanel",
            modelType : 'rect',
            directCmd : false,
            eventName : 'drawGraph'
        },
        "DRAW_ECLIPSE" : {
            className : "XPaint.command.DrawEclipseCmd",
            propertyPanel : "XPaint.view.main.property.DrawEclipsePropPanel",
            modelType : 'eclipse',
            directCmd : false,
            eventName : 'drawGraph'
        },
        "DRAW_POLYGON" : {
            className : "XPaint.command.DrawPolygonCmd",
            propertyPanel : "XPaint.view.main.property.DrawPolygonPropPanel",
            modelType : 'polygon',
            directCmd : false,
            eventName : 'drawGraph'
        },
        "DRAW_LINE" : {
            className : "XPaint.command.DrawLineCmd",
            propertyPanel : "XPaint.view.main.property.DrawLinePropPanel",
            modelType : 'line',
            directCmd : false,
            eventName : 'drawGraph'
        },
        "MOVE_OBJ" : {
            className : "XPaint.command.MoveObjCmd",
            propertyPanel : "XPaint.view.main.property.MoveObjPropPanel",
            eventName : 'moveObj',
            directCmd : false
        },
        "ROTATE_OBJ" : {
            className : "XPaint.command.RotateObjCmd",
            propertyPanel : "XPaint.view.main.property.RotateObjPropPanel",
            eventName : 'rotateObj',
            directCmd : false
        },
        "SCALE_OBJ" : {
            className : "XPaint.command.ScaleObjCmd",
            propertyPanel : "XPaint.view.main.property.ScaleObjPropPanel",
            eventName : 'scaleObj',
            directCmd : false
        },
        "RULER_OBJ" : {
            className : "XPaint.command.ApplyRulerCmd",
            propertyPanel : null,
            directCmd : true,
            eventName : 'ApplyRulerCmd.applyRuler'
        }
    }
});

