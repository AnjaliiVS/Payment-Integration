import React from 'react';

import {Image, StyleSheet, Text, View, Button, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

function App() {
  const handlePayment = () => {
    var options = {
      name: 'Inmakes',
      description: 'for test payment',
      currency: 'INR',
      amount: 50000,
      key: 'rzp_test_E7a2NI5g1Vas6u',
      prefill: {
        email: 'av@gmail.com',
        contact: '9191919191',
        name: 'Vinay',
      },
      theme: {color: '#f37251'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('data', data);
        Alert.alert('Success');
      })
      .catch(error => {
        Alert.alert('Error: ${error.code} | $(error.description}');
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/home2.jpg')} />
      <Text style={styles.text}>Inmakes</Text>
      <Text style={styles.text}>Rs 500</Text>
      <View style={styles.button}>
        <Button title="Buy" onPress={() => handlePayment()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 25,
  },
  button: {
    height: 200,
    width: 200,
  },
});

export default App;
