import React from "react";
import {
    Text,
    View,
    VrButton,
    Animated
} from 'react-vr';

export default class GazeAwareButton extends React.Component{

	static defaultProps = {
        selectTimeout: 1000,
        progressColor: "#46A032" 
    };
    
    constructor(props){
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.finalizeSelection = this.finalizeSelection.bind(this);
        this.interval;
        this.animation;
        this.defaultHeight = .2;
        this.defaultWidth = 1;
        this.state = {
            gazeProgressMeter : new Animated.Value(0),
        }
    }
    finalizeSelection(){
        const { onClick } = this.props;
        onClick();
    }
    onEnter(e){
        const { selectTimeout, buttonStyle, disabled } = this.props;
        if(disabled){
            return;
        }
        const timeout = selectTimeout;
        this.interval = setTimeout(this.finalizeSelection, timeout);        
    }
    onExit(){
        clearTimeout(this.interval);
    }
    render(){
        const { buttonStyle, disabled, containerStyle, progressColor, selectTimeout, isSelected } = this.props;
        const buttonWidth = (buttonStyle && buttonStyle.width) || this.defaultWidth;
        const buttonHeight = (buttonStyle && buttonStyle.height) || this.defaultHeight;
        const finalButtonStyle = Object.assign({}, buttonStyle, { width: buttonWidth, height: buttonHeight });
        return ( 
            <View style={containerStyle}>
                <VrButton onEnter={this.onEnter} onExit={this.onExit}
                    disabled={disabled}
                    style={finalButtonStyle} 
                    onClick={() => {
                        this.finalizeSelection();
                        this.onExit();
                    }}
                >
                    {this.props.children}
                </VrButton>
            </View>
        )
    }
}