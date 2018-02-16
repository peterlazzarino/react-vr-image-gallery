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
        this.getImageWidths = this.getImageWidths.bind(this);
        this.getStartPosition = this.getStartPosition.bind(this);
    }
    getImageWidths(images){
        return images.map(image => this.imageDimensions[image.type].width);
    }
    calculateWidth(images){
        return this.getImageWidths(images).reduce((a, c) => a + c);
    }
    getStartPosition(images){
        const boxWidth = 38.5;
        const basePosition = -(boxWidth / 2);
        return -(basePosition + (images.length / 2) * boxWidth);
    }
    render(){
        const { images } = this.props;
        const containerWidth = this.calculateWidth(images);
        const startPosition = this.getStartPosition(images);        
        return (
            <View>
                <CylindricalPanel layer={{width: containerWidth, height: 500}} 
                    style={{
                        transform: [
                            { rotateY: startPosition }
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
                                        flex:1,
                                        flexDirection:"column",
                                        backgroundColor: 'black',
                                    }]}
                                    source={image.source}
                                />   
                            )
                        })}                          
                    </View>
                    <View style={{
                        position:"absolute",
                        height:200,
                        width:200,
                        backgroundColor:"red",
                        transform: [{
                            translate: [5,0,-55]
                        }]
                    }}>
                        <Text style={{color:"white"}}>Hey</Text>
                    </View>
                </CylindricalPanel>
            </View>
        )
    }
}

export default Gallery;