import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  // Animation value for the fade-in effect
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // 1. Start the fade-in animation immediately
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // 2. AUTO-DIRECT: Navigate to Onboarding after 3.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3500);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Animated.View style={[styles.mainContent, { opacity: fadeAnim }]}>
        {/* Logo Circle based on image_af9779.png */}
        <View style={styles.logoCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.logoIcon}>SL</Text>
          </View>
        </View>
        
        <Text style={styles.brandName}>SheLeads</Text>
        <Text style={styles.tagline}>Learn. Prove. Get Hired.</Text>

        {/* Decorative Progress Dots */}
        <View style={styles.dotContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // Primary Gold
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Soft outer ring
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  innerCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logoIcon: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#B8860B', // Deep Gold
  },
  brandName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1F2937', // High contrast dark gray
    marginTop: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#374151',
    marginTop: 5,
    fontWeight: '500',
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 60,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1F2937',
    marginHorizontal: 6,
    opacity: 0.2,
  },
  activeDot: {
    opacity: 0.8,
    width: 25, // Longer dot to show "loading"
  }
});

export default SplashScreen;