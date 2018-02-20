Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="app/gallery/gallery/galleryImage.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactVr=require("react-vr");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




GalleryImage=function(_React$Component){_inherits(GalleryImage,_React$Component);
function GalleryImage(props){_classCallCheck(this,GalleryImage);var _this=_possibleConstructorReturn(this,(GalleryImage.__proto__||Object.getPrototypeOf(GalleryImage)).call(this,
props));
_this.state={
opacity:new _reactVr.Animated.Value(props.isSelected?1:.5)};return _this;

}_createClass(GalleryImage,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(
next){
if(this.props.isSelected!=next.isSelected){
var animation=_reactVr.Animated.timing(this.state.opacity,{
toValue:next.isSelected?1:.5,
duration:300});

animation.start();
}
}},{key:"render",value:function render()
{var _props=
this.props,imageStyle=_props.imageStyle,src=_props.src;
console.log(this.state.opacity);
return(
_react2.default.createElement(_reactVr.Animated.View,{style:{
opacity:this.state.opacity},__source:{fileName:_jsxFileName,lineNumber:27}},

_react2.default.createElement(_reactVr.Image,{
style:[imageStyle,{
flex:1,
margin:5,
flexDirection:"column",
backgroundColor:'black'}],

source:src,__source:{fileName:_jsxFileName,lineNumber:30}})));



}}]);return GalleryImage;}(_react2.default.Component);exports.default=GalleryImage;