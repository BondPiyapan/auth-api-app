import React from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../components/context';
import { UserContext } from '../components/usercontext';
import {
  Avatar,
} from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

  const { signOut, toggleTheme } = React.useContext(AuthContext);
  const state = React.useContext(UserContext);

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View>
        <Avatar.Image
          source={{
            uri: state.userName.avatar
          }}
          size={200}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ color: colors.text, fontSize: 25 }}>Hi </Text>
        <Text style={{ color: colors.text, fontSize: 25, fontWeight: 'bold' }}>{state.userName.fname} {state.userName.lname}</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
