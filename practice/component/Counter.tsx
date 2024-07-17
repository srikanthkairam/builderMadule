
import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement }:any) => {
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={decrement} />
        </View>
    );
};

const mapStateToProps = (state: { count: any; }) => ({
    count: state.count
});

const mapDispatchToProps = {
    increment: () => ({ type: 'INCREMENT' }),
    decrement: () => ({ type: 'DECREMENT' })
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
