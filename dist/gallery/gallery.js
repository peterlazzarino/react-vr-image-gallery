Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="package/gallery/gallery/gallery.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _imageTypes=require("./imageTypes");
var _gazeButton=require("../button/gazeButton");var _gazeButton2=_interopRequireDefault(_gazeButton);
var _reactVr=require("react-vr");










var _galleryImage=require("./galleryImage");var _galleryImage2=_interopRequireDefault(_galleryImage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Gallery=function(_React$Component){_inherits(Gallery,_React$Component);
function Gallery(props){_classCallCheck(this,Gallery);var _this=_possibleConstructorReturn(this,(Gallery.__proto__||Object.getPrototypeOf(Gallery)).call(this,
props));
_this.imageDimensions={
SQUARE:{
style:{
height:500,
width:500},

vrWidth:38.5}};


_this.imageStyles=_reactVr.StyleSheet.create(_this.imageDimensions[props.type].style);
_this.calculateWidth=_this.calculateWidth.bind(_this);
_this.goToNext=_this.goToNext.bind(_this);
_this.rotateGallery=_this.rotateGallery.bind(_this);
_this.goToPrev=_this.goToPrev.bind(_this);
_this.getPosition=_this.getPosition.bind(_this);
_this.state={
imageNumber:_this.props.initialImage,
containerWidth:_this.calculateWidth(props.images),
galleryRotation:new _reactVr.Animated.Value(_this.getPosition(props.images,props.initialImage))};return _this;

}_createClass(Gallery,[{key:"calculateWidth",value:function calculateWidth(
images){
return this.imageDimensions[this.props.type].style.width*this.props.images.length;
}},{key:"goToNext",value:function goToNext()
{
var nextImageNum=this.state.imageNumber+1;
var nextRotation=this.getPosition(this.props.images,nextImageNum);
this.setState({
imageNumber:nextImageNum});

this.rotateGallery(nextRotation);
}},{key:"goToPrev",value:function goToPrev()
{
var prevImageNum=this.state.imageNumber-1;
var nextRotation=this.getPosition(this.props.images,prevImageNum);
this.setState({
imageNumber:prevImageNum});

this.rotateGallery(nextRotation);
}},{key:"rotateGallery",value:function rotateGallery(
rotation){
var animation=_reactVr.Animated.timing(this.state.galleryRotation,{
toValue:rotation,
duration:150});

animation.start();
}},{key:"getPosition",value:function getPosition(
images,imageNumber){var _props=
this.props,type=_props.type,initialImage=_props.initialImage;
var boxWidth=this.imageDimensions[type].vrWidth;
var boxPosition=imageNumber*boxWidth;
var basePosition=-(boxWidth/2);
return-(basePosition+(images.length/2+-(imageNumber-1))*boxWidth);
}},{key:"render",value:function render()
{var
images=this.props.images;var
imageNumber=this.state.imageNumber;var _state=
this.state,containerWidth=_state.containerWidth,galleryRotation=_state.galleryRotation;
var imageStyle=this.imageDimensions[this.props.type].style;
var canNext=imageNumber<images.length;
var canPrev=imageNumber>1;
return(
_react2.default.createElement(_reactVr.View,{__source:{fileName:_jsxFileName,lineNumber:82}},
_react2.default.createElement(_reactVr.Animated.View,{
style:{
transform:[
{rotateY:galleryRotation}]},__source:{fileName:_jsxFileName,lineNumber:83}},


_react2.default.createElement(_reactVr.CylindricalPanel,{layer:{
width:containerWidth,
height:500},__source:{fileName:_jsxFileName,lineNumber:89}},

_react2.default.createElement(_reactVr.View,{style:{
opacity:1,
flex:1,
flexDirection:"row",
width:containerWidth,
height:500,
justifyContent:'flex-start'},__source:{fileName:_jsxFileName,lineNumber:93}},

this.props.images.map(function(image,idx){
isSelected=idx+1==imageNumber;
return(
_react2.default.createElement(_galleryImage2.default,{
imageStyle:imageStyle,
src:image,
isSelected:isSelected,__source:{fileName:_jsxFileName,lineNumber:104}}));


})))),



_react2.default.createElement(_reactVr.View,{__source:{fileName:_jsxFileName,lineNumber:114}},
_react2.default.createElement(_gazeButton2.default,{disabled:!canPrev,onClick:this.goToPrev,
buttonStyle:{
borderRadius:1,
opacity:.85,
paddingLeft:.06,
borderWidth:.01,
width:.2,
height:.2,
backgroundColor:"#333",
borderColor:"#222"},

containerStyle:{
position:"absolute",
transform:[{
translate:[-1.5,.1,-2]}]},__source:{fileName:_jsxFileName,lineNumber:115}},


_react2.default.createElement(_reactVr.Text,{style:{
color:"white",
bottom:.01,
fontSize:.15,
fontWeight:"bold"},__source:{fileName:_jsxFileName,lineNumber:132}},

"<")),


_react2.default.createElement(_gazeButton2.default,{disabled:!canNext,onClick:this.goToNext,
buttonStyle:{
borderRadius:1,
opacity:.85,
paddingLeft:.06,
borderWidth:.01,
height:.2,
width:.2,
backgroundColor:"#333",
borderColor:"#222"},

containerStyle:{
position:"absolute",
transform:[{
translate:[1.25,.1,-2]}]},__source:{fileName:_jsxFileName,lineNumber:141}},


_react2.default.createElement(_reactVr.Text,{style:{
color:"white",
bottom:.01,
fontSize:.15,
fontWeight:"bold"},__source:{fileName:_jsxFileName,lineNumber:158}},

">")))));





}}]);return Gallery;}(_react2.default.Component);exports.default=


Gallery;