import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Course Goal' 
                    style={styles.input} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <Button title = "ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
                    <Button title = "CANCEL" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
    input: { 
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default GoalInput;