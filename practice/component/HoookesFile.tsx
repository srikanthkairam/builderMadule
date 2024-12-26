import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const Sri = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  // Memoized callback that recalculates when "multiplier" changes
  const multiply = useCallback(() => {
    return count * multiplier;
  }, [count, multiplier]); // Dependencies: count and multiplier

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Count: {count}</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Multiplier: {multiplier}
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Result: {multiply()}
      </Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Change Multiplier" onPress={() => setMultiplier(multiplier + 1)} />
    </View>
  );
};

export default Sri;
