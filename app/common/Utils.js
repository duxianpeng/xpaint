/**
 * Created by User on 2014/12/28.
 */
Ext.define('XPaint.common.Utils', {
    singleton  : true,
    alternateClassName: ['Utils'],
    windowToCanvas : function(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (canvas.width  / bbox.width),
            y: y - bbox.top  * (canvas.height / bbox.height)
        };
    },
    /**
     * Detect whether two value are almost same
     * @param value
     * @param anotherValue
     * @param deviation
     * @returns {boolean}
     */
    detectSame : function(value, anotherValue, deviation){
        return Math.abs(value-anotherValue) < Math.abs(deviation);
    },

    /**
     * Detect whether two points are almost same position.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param deviation
     */
    detectSamePoint : function(x1, y1, x2, y2, deviation){
        return this.detectSame(x1, x2, deviation) && this.detectSame(y1, y2, deviation);
    },

    /**
     * Detect how much two values diff.
     * @param value1
     * @param value2
     * @returns {number}
     */
    detectDiffVal : function(value1, value2){
        return (value2 - value1);
    },

    /**
     * Detect whether value is in the scope between start and end.
     * @param value
     * @param start
     * @param end
     * @returns {boolean}
     */
    detectInScope : function(value, start, end){
        return value > start && value < end;
    },

    /**
     * Detect whether point falls on two parallel lines.
     * @param x
     * @param y
     * @param left
     * @param top
     * @param leftAddWidth
     * @param topAddHeight
     * @param deviation
     * @returns {boolean|*}
     */
    detectOnLines : function(x, y, left, top, leftAddWidth, topAddHeight, deviation){
        return (Utils.detectSame(x, left, deviation) || Utils.detectSame(x, leftAddWidth, deviation))
        && this.detectInScope(y, top, topAddHeight);
    },

    /**
     * Detect whether point falls on four points of rect.
     * @param x
     * @param y
     * @param left
     * @param top
     * @param width
     * @param height
     * @param deviation
     * @returns {*}
     */
    detectOnPoints : function(x, y, left, top, width, height, deviation){
        var point1X = left;
        var point1Y = top;

        var point2X = left + width;
        var point2Y = top;

        var point3X = left + width;
        var point3Y = top + height;

        var point4X = left;
        var point4Y = top + height;

        return this.detectSamePoint(x, y, point1X, point1Y, deviation)
        ||this.detectSamePoint(x, y, point2X, point2Y, deviation)
        ||this.detectSamePoint(x, y, point3X, point3Y, deviation)
        ||this.detectSamePoint(x, y, point4X, point4Y, deviation);
    }

});

