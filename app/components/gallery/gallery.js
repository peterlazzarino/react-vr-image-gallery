import SpaceSphere from "../solar-system/spaceSphere";
import React from "react";
import { imageTypes } from "./imageTypes";
import {
    asset,
    Image,
    View,
    VrButton,
    Button,
    StyleSheet,
    Text,
    CylindricalPanel
} from 'react-vr';

class Gallery extends React.Component{
    constructor(){
        super();
        this.imageDimensions = {
            PORTRAIT: {
                width: 300,
                height: 500
            },
            LANDSCAPE: {
                height: 500,
                width: 700
            },
            SQUARE: {
                height:500,
                width:500
            }
        };
        this.imageStyles = StyleSheet.create(this.imageDimensions);
        this.calculateWidth = this.calculateWidth.bind(this);
    }
    calculateWidth(images){
        return images.map(image => this.imageDimensions[image.type].width).reduce((a, c) => a + c);
    }
    render(){
        const { images } = this.props;
        debugger;
        const containerWidth = this.calculateWidth(images);
        return (
            <CylindricalPanel layer={{width: containerWidth, height: 500}} 
                style={{
                    transform: [
                        { translateX: 0 },
                        { translateY: 0 },
                        { translateZ: 0 }
                    ]
                }}>
                <View style={{
                    opacity: 1,
                    flex:1,
                    flexDirection:"row",
                    width: containerWidth,
                    height: 500,
                    backgroundColor:"white",
                    justifyContent: 'flex-start',
                }} >      
                    {this.props.images.map((image) => {
                        const imageStyle = this.imageStyles[image.type];
                        return (
                            <Image
                                style={[imageStyle, {
                                    backgroundColor: 'black',
                                }]}
                                source={image.source}
                            />   
                        )
                    })}                          
                </View>
            </CylindricalPanel>
        )
    }
}

export default Gallery;