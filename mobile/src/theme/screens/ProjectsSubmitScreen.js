import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { CheckCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const ProjectSubmitScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Success Header */}
        <View style={styles.successHeader}>
          <View style={styles.goldCircle}>
            <CheckCircle color="#1F2937" size={50} strokeWidth={3} />
          </View>
          <Text style={styles.title}>Project Submitted!</Text>
          <Text style={styles.subtitle}>Your work has been evaluated</Text>
        </View>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Your Score</Text>
          <Text style={styles.scoreValue}>85%</Text>
          <View style={styles.excellentBadge}>
            <ShieldCheck color="#22C55E" size={14} />
            <Text style={styles.excellentText}>Excellent Work</Text>
          </View>
        </View>

        {/* Detailed Feedback Section */}
        <View style={styles.feedbackCard}>
          <Text style={styles.cardTitle}>Detailed Feedback</Text>
          
          <View style={styles.feedbackSection}>
            <View style={styles.feedbackHeader}>
              <Check color="#22C55E" size={16} />
              <Text style={[styles.feedbackType, { color: '#22C55E' }]}>Strengths</Text>
            </View>
            <Text style={styles.feedbackItem}>• Good structure and layout</Text>
            <Text style={styles.feedbackItem}>• Clean design system</Text>
            <Text style={styles.feedbackItem}>• Responsive implementation</Text>
          </View>

          <View style={styles.feedbackSection}>
            <View style={styles.feedbackHeader}>
              <ArrowRight color="#EAB308" size={16} />
              <Text style={[styles.feedbackType, { color: '#EAB308' }]}>Areas to Improve</Text>
            </View>
            <Text style={styles.feedbackItem}>• Improve visual hierarchy</Text>
            <Text style={styles.feedbackItem}>• Add more interactive elements</Text>
            <Text style={styles.feedbackItem}>• Enhance color contrast</Text>
          </View>
        </View>

        {/* Wallet Verification Card */}
        <View style={[styles.walletCard, { borderColor: '#22C55E', borderWidth: 1 }]}>
          <Text style={styles.walletTitle}>Skill Verified!</Text>
          <Text style={styles.walletText}>
            This project has been added to your ProofSkill Wallet as a tamper-proof record.
          </Text>
          <TouchableOpacity 
            style={styles.walletBtn}
            onPress={() => navigation.navigate('Wallet')}
          >
            <Text style={styles.walletBtnText}>View ProofSkill Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* Next Steps */}
        <Text style={styles.nextStepsTitle}>Next Steps</Text>
        
        <View style={styles.actionCard}>
          <View style={styles.actionInfo}>
            <Text style={styles.actionTitle}>Explore Job Matches</Text>
            <Text style={styles.actionSub}>Find opportunities that match your skills</Text>
          </View>
          <TouchableOpacity 
            style={styles.smallActionBtn}
            onPress={() => navigation.navigate('Jobs')}
          >
            <Text style={styles.smallActionText}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.actionInfo}>
            <Text style={styles.actionTitle}>Continue Learning</Text>
            <Text style={styles.actionSub}>Build on your success</Text>
          </View>
          <TouchableOpacity 
            style={[styles.smallActionBtn, { backgroundColor: '#1E293B' }]}
            onPress={() => navigation.navigate('Learn')}
          >
            <Text style={[styles.smallActionText, { color: '#FFFFFF' }]}>Start</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      <MainFooter activeTab="Sprint" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  successHeader: { alignItems: 'center', marginTop: 30, marginBottom: 25 },
  goldCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#EAB308', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 5 },
  scoreCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 25, alignItems: 'center', borderWidth: 1, borderColor: '#EAB308', marginBottom: 25 },
  scoreLabel: { color: '#FFFFFF', fontSize: 16, fontWeight: '500' },
  scoreValue: { color: '#EAB308', fontSize: 64, fontWeight: 'bold', marginVertical: 10 },
  excellentBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(34, 197, 94, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  excellentText: { color: '#22C55E', fontSize: 12, fontWeight: 'bold', marginLeft: 6 },
  feedbackCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, marginBottom: 25 },
  cardTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  feedbackSection: { marginBottom: 20 },
  feedbackHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  feedbackType: { fontSize: 14, fontWeight: 'bold', marginLeft: 8 },
  feedbackItem: { color: '#9CA3AF', fontSize: 14, marginLeft: 24, marginBottom: 5 },
  walletCard: { backgroundColor: '#061C14', borderRadius: 15, padding: 20, marginBottom: 25 },
  walletTitle: { color: '#22C55E', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  walletText: { color: '#9CA3AF', fontSize: 13, lineHeight: 18, marginBottom: 15 },
  walletBtn: { backgroundColor: '#EAB308', height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  walletBtnText: { color: '#0F172A', fontWeight: 'bold' },
  nextStepsTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  actionCard: { flexDirection: 'row', backgroundColor: '#0F172A', borderRadius: 12, padding: 15, alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#1E293B' },
  actionInfo: { flex: 1 },
  actionTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  actionSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  smallActionBtn: { backgroundColor: '#EAB308', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
  smallActionText: { color: '#0F172A', fontWeight: 'bold', fontSize: 14 }
});

export default ProjectSubmitScreen;