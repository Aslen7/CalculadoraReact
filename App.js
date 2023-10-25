import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleSquareRoot = () => {
    const num = parseFloat(input);
    setResult(Math.sqrt(num).toString());
  };

  const handleNthRoot = (n) => {
    const num = parseFloat(input);
    setResult(Math.pow(num, 1 / n).toString());
  };

  const handlePower = (n) => {
    const num = parseFloat(input);
    setResult(Math.pow(num, n).toString());
  };

  const handleTrigFunction = (func) => {
    const num = parseFloat(input);
    if (func === 'sin') setResult(Math.sin(num).toString());
    if (func === 'cos') setResult(Math.cos(num).toString());
    if (func === 'tan') setResult(Math.tan(num).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        placeholder="Enter expression"
      />
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={handleSquareRoot}
        >
          <Text>√</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handlePower(2)}
        >
          <Text>x²</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handlePower(3)}
        >
          <Text>x³</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick(Math.PI.toString())}
        >
          <Text>π</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('7')}
        >
          <Text>7</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('8')}
        >
          <Text>8</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('9')}
        >
          <Text>9</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={handleClear}
        >
          <Text>C</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('4')}
        >
          <Text>4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('5')}
        >
          <Text>5</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('6')}
        >
          <Text>6</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('/')}
        >
          <Text>/</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('1')}
        >
          <Text>1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('2')}
        >
          <Text>2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('3')}
        >
          <Text>3</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('-')}
        >
          <Text>-</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('0')}
        >
          <Text>0</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('.')}
        >
          <Text>.</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={handleCalculate}
        >
          <Text>=</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('+')}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleTrigFunction('sin')}
        >
          <Text>sin</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleTrigFunction('cos')}
        >
          <Text>cos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleTrigFunction('tan')}
        >
          <Text>tan</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNthRoot(3)}
        >
          <Text>∛</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('**')}
        >
          <Text>xⁿ</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick(Math.E.toString())}
        >
          <Text>e</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('(')}
        >
          <Text>(</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonRow}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('%')}
        >
          <Text>%</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick(')')}
        >
          <Text>)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => handleNumberClick('Math.log(')}
        >
          <Text>ln</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
  },
});
