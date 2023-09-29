import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [fanStatus, setFanStatus] = useState('off');
  const [alarmStatus, setAlarmStatus] = useState('reset');
  const [motorStatus, setMotorStatus] = useState('off');
  const [doorLockStatus, setDoorLockStatus] = useState('unlock');

  // Function to send control commands to ESP32
  const sendCommand = (device, status) => {
    // Send an HTTP request to the ESP32 to control the specified device
    // You'll need to implement this part to communicate with your ESP32 server
    // You can use libraries like axios for making HTTP requests
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Automation</Text>

      <View style={styles.deviceContainer}>
        <Text>Fan Control</Text>
        <Button
          title={`Turn ${fanStatus === 'off' ? 'On' : 'Off'}`}
          onPress={() => {
            const newStatus = fanStatus === 'off' ? 'on' : 'off';
            setFanStatus(newStatus);
            sendCommand('fan', newStatus);
          }}
        />
      </View>

      <View style={styles.deviceContainer}>
        <Text>Security Alarm</Text>
        <Button
          title={`Trigger Alarm`}
          onPress={() => {
            setAlarmStatus('trigger');
            sendCommand('alarm', 'trigger');
          }}
        />
        <Button
          title={`Reset Alarm`}
          onPress={() => {
            setAlarmStatus('reset');
            sendCommand('alarm', 'reset');
          }}
        />
      </View>

      <View style={styles.deviceContainer}>
        <Text>Motor Control</Text>
        <Button
          title={`Turn ${motorStatus === 'off' ? 'On' : 'Off'}`}
          onPress={() => {
            const newStatus = motorStatus === 'off' ? 'on' : 'off';
            setMotorStatus(newStatus);
            sendCommand('motor', newStatus);
          }}
        />
      </View>

      <View style={styles.deviceContainer}>
        <Text>Door Lock</Text>
        <Button
          title={`Lock`}
          onPress={() => {
            setDoorLockStatus('lock');
            sendCommand('doorlock', 'lock');
          }}
        />
        <Button
          title={`Unlock`}
          onPress={() => {
            setDoorLockStatus('unlock');
            sendCommand('doorlock', 'unlock');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  deviceContainer: {
    marginVertical: 10,
  },
});

export default App;
