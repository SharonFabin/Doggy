import * as React from "react";
import {StyleSheet, TextInput} from "react-native";


const blue = '#1a73e8';

class NiceInput extends React.Component {
    state = {
        isFocused: false
    };

    handleFocus = event => {
        this.setState({isFocused: true});
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlur = event => {
        this.setState({isFocused: false});
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render() {
        const {isFocused} = this.state;
        const {onFocus, onBlur, ...otherProps} = this.props;
        let inlineStyle = [];
        inlineStyle = inlineStyle.concat(styles.defaultStyle);
        if (this.props.customStyle) {
            inlineStyle = inlineStyle.concat(this.props.customStyle)
        }
        return (
            <TextInput
                selectionColor={blue}
                underlineColorAndroid={
                    isFocused ? blue : 'white'
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={inlineStyle}
                ref={this.props.refer}
                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        width: 300,
        height: 50,
        fontSize: 20,
        paddingLeft: 6,
        color: 'white'
    }
});

export default NiceInput;