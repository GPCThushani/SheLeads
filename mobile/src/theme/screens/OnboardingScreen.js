import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ImageBackground, 
  StatusBar 
} from 'react-native';
import { ArrowRight } from 'lucide-react-native'; // Ensure lucide-react-native is installed

const OnboardingScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingData = [
    {
      title: "Build Real Skills",
      subtitle: "Learn by creating real projects",
      buttonText: "Next",
      // Replace with require('../assets/onboarding1.png') later
      image: { uri: 'https://via.placeholder.com/800x1200/000000/FFFFFF?text=Build+Skills+Photo' } 
    },
    {
      title: "Verified Skills. Safe Careers.",
      subtitle: "Build trust with employers",
      buttonText: "Get Started",
      // Replace with require('../assets/onboarding2.png') later
      image: { uri: 'https://via.placeholder.com/800x1200/000000/FFFFFF?text=Safe+Careers+Photo' }
    }
  ];

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.replace('Login'); // Move to Login/Sign-up screen
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={onboardingData[currentStep].image} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark overlay to make text pop against any photo */}
        <View style={styles.overlay}>
          <SafeAreaView style={styles.contentContainer}>
            
            <View style={styles.textSection}>
              <Text style={styles.title}>{onboardingData[currentStep].title}</Text>
              <Text style={styles.subtitle}>{onboardingData[currentStep].subtitle}</Text>
            </View>

            <View style={styles.footer}>
              {/* Pagination Dots */}
              <View style={styles.pagination}>
                <View style={[styles.dot, currentStep === 0 ? styles.activeDot : styles.inactiveDot]} />
                <View style={[styles.dot, currentStep === 1 ? styles.activeDot : styles.inactiveDot]} />
              </View>

              {/* Gold Button */}
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>{onboardingData[currentStep].buttonText}</Text>
                <ArrowRight color="#1F2937" size={20} strokeWidth={3} />
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Adjust darkness of photos here
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#E5E7EB',
    textAlign: 'center',
    opacity: 0.9,
  },
  footer: {
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 30,
    backgroundColor: '#FFD700', // Gold
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#4B5563', // Gray
  },
  button: {
    backgroundColor: '#EAB308', // Gold/Yellow
    width: '100%',
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default OnboardingScreen;