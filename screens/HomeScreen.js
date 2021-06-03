import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
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

  function renderHeader() {
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25
    }}>

    </View>
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <StatusBar barStyle={"dark-content"} translucent={true} />
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Avatar.Image
          source={{
            uri: state.userName.avatar
          }}
          size={200}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ color: '#fff', fontSize: 25, }}>Hi </Text>
        <Text style={{ color: '#E50914', fontSize: 25, fontWeight: 'bold' }}>{state.userName.fname} {state.userName.lname}</Text>
      </View>

    </SafeAreaView>
    // <View style={styles.container}>
    //   <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
    //   <View>
    //     <Avatar.Image
    //       source={{
    //         uri: state.userName.avatar
    //       }}
    //       size={200}
    //     />
    //   </View>
    //   <View style={{ flexDirection: 'row', marginTop: 50 }}>
    //     <Text style={{ color: colors.text, fontSize: 25 }}>Hi </Text>
    //     <Text style={{ color: colors.text, fontSize: 25, fontWeight: 'bold' }}>{state.userName.fname} {state.userName.lname}</Text>
    //   </View>

    //   <View style={{ marginVertical: 20 }}>
    //   </View>
    // </View>
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
