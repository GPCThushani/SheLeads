import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader />
      
      <ScrollView style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Hi, Thush 👋</Text>
          <Text style={styles.subGreeting}>Ready to learn something new today?</Text>
        </View>

        {/* Level 3 Learner Card */}
        <View style={[styles.card, styles.greenBorder]}>
           <Text style={styles.cardTitle}>Level 3 Learner</Text>
           {/* Add your progress bar and trophy icon here to match image_ae49fa.png */}
        </View>

        {/* Earning Potential Card */}
        <View style={styles.card}>
           <Text style={styles.cardTitle}>Earning Potential</Text>
           <Text style={styles.salaryText}>LKR 80,000 - 100,000</Text>
           <Text style={styles.salarySub}>Average salary for your path</Text>
        </View>
        
        {/* Add the rest of your sections from image_ae49fa.png */}
      </ScrollView>

      <MainFooter activeTab="Home" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, padding: 20 },
  welcomeContainer: { marginBottom: 25 },
  greeting: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  subGreeting: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  card: { backgroundColor: '#0F172A', padding: 20, borderRadius: 15, marginBottom: 15, borderWidth: 1, borderColor: '#1E293B' },
  greenBorder: { borderColor: '#22C55E' },
  cardTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  salaryText: { color: '#EAB308', fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  salarySub: { color: '#9CA3AF', fontSize: 12, marginTop: 5 }
});

export default HomeScreen;