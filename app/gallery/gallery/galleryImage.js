import React from "react";
import {
    Image,
    Animated
} from "react-vr";

export default class GalleryImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: new Animated.Value(props.isSelected ? 1 : .5)
        }
    }
    componentWillReceiveProps(next){
        if(this.props.isSelected != next.isSelected){
            const animation = Animated.timing(this.state.opacity, {
                toValue: next.isSelected ? 1 : .5,   
                duration: 300
            });
            animation.start(); 
        }
    }
    render(){
        const { imageStyle, src } = this.props;
        console.log(this.state.opacity)
        return (
            <Animated.View style={{
                opacity: this.state.opacity
            }}>
                <Image
                    style={[imageStyle, {
                        flex:1,
                        margin:5,
                        flexDirection:"column",
                        backgroundColor: 'black',
                    }]}
                    source={src}
                />   
            </Animated.View>
        )
    }
}