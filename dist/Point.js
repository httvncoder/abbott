'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var defaultDimensions={x:'x',y:'y',z:'z'};var computeDimension=function computeDimension(obj,name){return typeof obj.dimensionFns[name]==='string'?obj.meta.payload[obj.dimensionFns[name]]:obj.dimensionFns[name](obj.meta.payload);};var Point=function(){function Point(id,payload,dimensions){var _ref=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var _ref$merge=_ref.merge;var merge=_ref$merge===undefined?true:_ref$merge;var _ref$formatters=_ref.formatters;var formatters=_ref$formatters===undefined?{}:_ref$formatters;_classCallCheck(this,Point);this.prepareDimensions(dimensions,merge);this.meta={id:id,payload:payload};this.formatters=formatters;this.computedDimensions={};}_createClass(Point,[{key:'prepareDimensions',value:function prepareDimensions(dimensions,merge){var _this=this;this.dimensionFns=merge?Object.assign({},defaultDimensions,dimensions):dimensions;Object.keys(this.dimensionFns).forEach(function(key){Object.defineProperty(_this,key,{get:function get(){if(!(key in _this.dimensionFns)){throw new Error('No getter for '+key+'.');}if(typeof _this.computedDimensions[key]==='undefined'){_this.computedDimensions[key]=computeDimension(_this,key);}return _this.computedDimensions[key];}});});}},{key:'id',get:function get(){return this.meta.id;}},{key:'payload',get:function get(){return Object.assign({},this.meta.payload);}}]);return Point;}();exports.default=Point;