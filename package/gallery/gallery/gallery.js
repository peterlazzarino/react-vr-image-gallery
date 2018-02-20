import React from "react";
import { imageTypes } from "./imageTypes";
import GazeButton from "../button/gazeButton";
import {
    asset,
    Image,
    View,
    VrButton,
    Animated,
    Button,
    StyleSheet,
    Text,
    CylindricalPanel
} from 'react-vr';
import GalleryImage from "./galleryImage";

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.imageDimensions = {
            SQUARE: {
                style: {
                    height:500,
                    width:500
                },
                vrWidth: 38.5
            }
        };
        this.imageStyles = StyleSheet.create(this.imageDimensions[props.type].style);
        this.calculateWidth = this.calculateWidth.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.rotateGallery = this.rotateGallery.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.state = {
            imageNumber: this.props.initialImage,
            containerWidth: this.calculateWidth(props.images),
            galleryRotation: new Animated.Value(this.getPosition(props.images, props.initialImage))
        };
    }
    calculateWidth(images){
        return this.imageDimensions[this.props.type].style.width * this.props.images.length;
    }
    goToNext(){
        const nextImageNum = this.state.imageNumber + 1;
        const nextRotation = this.getPosition(this.props.images, nextImageNum);
        this.setState({
            imageNumber: nextImageNum
        });
        this.rotateGallery(nextRotation);
    }
    goToPrev(){
        const prevImageNum = this.state.imageNumber - 1;
        const nextRotation = this.getPosition(this.props.images, prevImageNum);
        this.setState({
            imageNumber: prevImageNum
        });
        this.rotateGallery(nextRotation);
    }
    rotateGallery(rotation){
        const animation = Animated.timing(this.state.galleryRotation, {
            toValue: rotation,   
            duration: 150
        });
        animation.start();
    }
    getPosition(images, imageNumber){
        const { type, initialImage } = this.props;
        const boxWidth = this.imageDimensions[type].vrWidth;
        const boxPosition = imageNumber * boxWidth;
        const basePosition = -(boxWidth / 2);
        return -(basePosition + ((images.length / 2) + -(imageNumber - 1)) * boxWidth);
    }
    render(){
        const { images } = this.props; 
        const { imageNumber } = this.state;    
        const { containerWidth, galleryRotation } = this.state;
        const imageStyle = this.imageDimensions[this.props.type].style;
        const canNext = imageNumber < images.length;
        const canPrev = imageNumber > 1;
        return (
            <View
                style={{position:"absolute"}}
            >
                <Animated.View 
                    style={{
                        transform: [
                            { rotateY: galleryRotation }
                        ]
                    }}>
                    <CylindricalPanel layer={{
                        width: containerWidth, 
                        height: 500,
                    }} >
                        <View style={{
                            opacity: 1,
                            flex:1,
                            flexDirection:"row",
                            width: containerWidth,
                            height: 500,
                            justifyContent: 'flex-start',
                        }} >      
                            {this.props.images.map((image, idx) => {
                                isSelected = (idx + 1) == imageNumber;
                                return (
                                    <GalleryImage
                                        imageStyle={imageStyle}
                                        src={image}
                                        isSelected={isSelected}
                                    />   
                                )
                            })}                          
                        </View>
                    </CylindricalPanel>
                </Animated.View>
                <View>
                    <GazeButton disabled={!canPrev} onClick={this.goToPrev}
                        buttonStyle={{
                            borderRadius:1,
                            opacity:.85,
                            paddingLeft:.06,
                            borderWidth:.01,
                            width:.2,
                            height:.2,
                            backgroundColor:"#333",
                            borderColor:"#222"
                        }}
                        containerStyle={{
                            position:"absolute",
                            transform: [{
                                translate: [-1.5,.1,-2]
                            }]
                        }}>
                            <Text style={{
                                color:"white", 
                                bottom:.01,
                                fontSize: .15,
                                fontWeight: "bold",
                            }}>
                                {"<"}
                            </Text>
                    </GazeButton>
                    <GazeButton disabled={!canNext} onClick={this.goToNext} 
                        buttonStyle={{
                            borderRadius:1,
                            opacity:.85,
                            paddingLeft:.06,
                            borderWidth:.01,
                            height:.2,
                            width:.2,
                            backgroundColor:"#333",
                            borderColor:"#222"
                        }}
                        containerStyle={{
                            position:"absolute",
                            transform: [{
                                translate: [1.25,.1,-2]
                            }]
                        }}>
                            <Text style={{
                                color:"white", 
                                bottom:.01,
                                fontSize: .15,
                                fontWeight: "bold"
                            }}>
                                {">"}
                            </Text>
                    </GazeButton>
                </View>
            </View>
        )
    }
}

export default Gallery;