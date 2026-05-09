import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { ShieldCheck, Trophy, Verified, Lock } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const WalletScreen = ({ navigation }) => {
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);

  const verifiedSkills = [
    { name: "UI Design", date: "Apr 2026" },
    { name: "Marketing", date: "Mar 2026" },
    { name: "Figma", date: "Apr 2026" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>ProofSkill Wallet</Text>

        {/* Blockchain Badge - Clickable */}
        <TouchableOpacity 
          style={styles.blockchainBadge} 
          onPress={() => setShowSecurityInfo(!showSecurityInfo)}
        >
          <ShieldCheck color="#22C55E" size={16} />
          <Text style={styles.blockchainText}>Blockchain Secured</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Your verified skill record</Text>

        {/* Blockchain Security Info Card (Toggles on click) */}
        {showSecurityInfo && (
          <View style={styles.securityCard}>
            <View style={styles.securityHeader}>
              <ShieldCheck color="#EAB308" size={20} />
              <Text style={styles.securityTitle}>Blockchain Security</Text>
            </View>
            <Text style={styles.securityDescription}>
              Your ProofSkill Wallet records are secured on the blockchain, making them tamper-proof and permanently verifiable. Employers can instantly verify your skills without contacting previous institutions.
            </Text>
            <View style={styles.verificationIdBox}>
              <Text style={styles.idLabel}>Verification ID</Text>
              <Text style={styles.idValue} numberOfLines={1}>
                0x7f9a4b2c8d1e5f3a6b9c2d8e1f4a7b5c9d2e0f1a
              </Text>
            </View>
          </View>
        )}

        {/* Employer Trust Rating Card */}
        <View style={styles.trustCard}>
          <Trophy color="#EAB308" size={32} style={{ marginBottom: 15 }} />
          <Text style={styles.trustTitle}>Employer Trust Rating</Text>
          <Text style={styles.trustScore}>88</Text>
          <Text style={styles.trustMax}>out of 100</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Skills Verified</Text>
            </View>
            <View style={[styles.statItem, { borderLeftWidth: 1, borderColor: '#1E293B' }]}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Projects Done</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Verified Skills</Text>

        {/* Verified Skill Cards */}
        {verifiedSkills.map((skill, index) => (
          <View key={index} style={styles.skillCard}>
            <View style={styles.skillTop}>
              <View>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillDate}>{skill.date}</Text>
              </View>
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.certificateBtn}>
              <Text style={styles.certificateText}>View Certificate</Text>
            </TouchableOpacity>
          </View>
        ))}
        
        <View style={{ height: 30 }} />
      </ScrollView>

      <MainFooter activeTab="Wallet" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginTop: 15 },
  blockchainBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(34, 197, 94, 0.1)', 
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#22C55E'
  },
  blockchainText: { color: '#22C55E', fontSize: 12, fontWeight: 'bold', marginLeft: 8 },
  subtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 15, marginBottom: 20 },
  
  // Security Card Styles
  securityCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 15, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#EAB308', 
    marginBottom: 20 
  },
  securityHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  securityTitle: { color: '#EAB308', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  securityDescription: { color: '#9CA3AF', fontSize: 13, lineHeight: 18, marginBottom: 15 },
  verificationIdBox: { backgroundColor: '#1E293B', padding: 12, borderRadius: 8 },
  idLabel: { color: '#6B7280', fontSize: 10, textTransform: 'uppercase', marginBottom: 4 },
  idValue: { color: '#9CA3AF', fontSize: 11, fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace' },

  trustCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 15, 
    padding: 25, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#1E293B',
    marginBottom: 25 
  },
  trustTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  trustScore: { color: '#EAB308', fontSize: 64, fontWeight: 'bold', marginVertical: 5 },
  trustMax: { color: '#9CA3AF', fontSize: 14 },
  statsRow: { flexDirection: 'row', marginTop: 25, width: '100%' },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { color: '#EAB308', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  skillCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#1E293B' },
  skillTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  skillName: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  skillDate: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  verifiedBadge: { backgroundColor: 'rgba(34, 197, 94, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  verifiedText: { color: '#22C55E', fontSize: 10, fontWeight: 'bold' },
  certificateBtn: { height: 45, borderRadius: 10, borderWidth: 1, borderColor: '#1E293B', justifyContent: 'center', alignItems: 'center' },
  certificateText: { color: '#FFFFFF', fontSize: 14, fontWeight: '500' }
});

export default WalletScreen;