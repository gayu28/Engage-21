import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Illustration from '../../assets/illustration.png';
import styles from './onboardingStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';

export function Onboarding() {
  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationWrapper}>
        <Image source={Illustration} style={styles.illustrationContent} />
      </View>
      <Text style={styles.largeText}>COLLAB</Text>
      <Text style={styles.smallText}>
      Assemble your organization on Flock {'\n'}and start crushing your goals
      </Text>
      <TouchableOpacity
        style={styles.loginBtnWrapper}
        onPress={() => handleNavigation('Login')}>
        <Text style={styles.loginBtnText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpBtnWrapper}
        onPress={() => handleNavigation('SignUp')}>
        <Text style={styles.signUpBtnText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
