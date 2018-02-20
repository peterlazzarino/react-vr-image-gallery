Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="package/gallery/button/gazeButton.js";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactVr=require("react-vr");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var






GazeAwareButton=function(_React$Component){_inherits(GazeAwareButton,_React$Component);






function GazeAwareButton(props){_classCallCheck(this,GazeAwareButton);var _this=_possibleConstructorReturn(this,(GazeAwareButton.__proto__||Object.getPrototypeOf(GazeAwareButton)).call(this,
props));
_this.onEnter=_this.onEnter.bind(_this);
_this.onExit=_this.onExit.bind(_this);
_this.finalizeSelection=_this.finalizeSelection.bind(_this);
_this.interval;
_this.animation;
_this.defaultHeight=.2;
_this.defaultWidth=1;
_this.state={
gazeProgressMeter:new _reactVr.Animated.Value(0)};return _this;

}_createClass(GazeAwareButton,[{key:"finalizeSelection",value:function finalizeSelection()
{var
onClick=this.props.onClick;
onClick();
}},{key:"onEnter",value:function onEnter(
e){var _props=
this.props,selectTimeout=_props.selectTimeout,buttonStyle=_props.buttonStyle,disabled=_props.disabled;
if(disabled){
return;
}
var timeout=selectTimeout;
this.interval=setTimeout(this.finalizeSelection,timeout);
}},{key:"onExit",value:function onExit()
{
clearTimeout(this.interval);
}},{key:"render",value:function render()
{var _this2=this;var _props2=
this.props,buttonStyle=_props2.buttonStyle,disabled=_props2.disabled,containerStyle=_props2.containerStyle,progressColor=_props2.progressColor,selectTimeout=_props2.selectTimeout,isSelected=_props2.isSelected;
var buttonWidth=buttonStyle&&buttonStyle.width||this.defaultWidth;
var buttonHeight=buttonStyle&&buttonStyle.height||this.defaultHeight;
var finalButtonStyle=_extends({},buttonStyle,{width:buttonWidth,height:buttonHeight});
return(
_react2.default.createElement(_reactVr.View,{style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_reactVr.VrButton,{onEnter:this.onEnter,onExit:this.onExit,
disabled:disabled,
style:finalButtonStyle,
onClick:function onClick(){
_this2.finalizeSelection();
_this2.onExit();
},__source:{fileName:_jsxFileName,lineNumber:51}},

this.props.children)));



}}]);return GazeAwareButton;}(_react2.default.Component);GazeAwareButton.defaultProps={selectTimeout:1000,progressColor:"#46A032"};exports.default=GazeAwareButton;