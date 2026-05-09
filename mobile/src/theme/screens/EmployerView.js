import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Plus, CheckCircle2 } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const EmployerView = ({ navigation }) => {
  const stats = [
    { label: "Active Jobs", value: "3" },
    { label: "Candidates", value: "24" },
    { label: "Profile Views", value: "156" },
    { label: "Hired", value: "8" },
  ];

  const candidates = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "UI Designer",
      appliedFor: "Junior UI Designer",
      score: "88/100",
      skills: ["UI Design", "Figma", "Prototyping"],
      status: "New"
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Frontend Developer",
      appliedFor: "Junior UI Designer",
      score: "85/100",
      skills: ["React", "CSS", "JavaScript"],
      status: "Shortlisted"
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.screenTitle}>Employer Dashboard</Text>
            <Text style={styles.screenSubtitle}>Manage your hiring process</Text>
          </View>
          <TouchableOpacity style={styles.postJobBtn}>
            <Plus color="#1F2937" size={18} strokeWidth={3} />
            <Text style={styles.postJobText}>Post Job</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Candidates</Text>

        {/* Candidate Cards */}
        {candidates.map((candidate) => (
          <View key={candidate.id} style={styles.candidateCard}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarCircle} />
              <View style={styles.candidateInfo}>
                <Text style={styles.candidateName}>{candidate.name}</Text>
                <Text style={styles.candidateRole}>{candidate.role}</Text>
                <Text style={styles.appliedText}>Applied for: {candidate.appliedFor}</Text>
              </View>
              <View style={[styles.statusBadge, candidate.status === 'Shortlisted' && styles.shortlistBadge]}>
                <Text style={[styles.statusText, candidate.status === 'Shortlisted' && styles.shortlistText]}>
                  {candidate.status}
                </Text>
              </View>
            </View>

            <View style={styles.scoreBox}>
              <View style={styles.scoreHeader}>
                <Text style={styles.scoreLabel}>ProofSkill Wallet Score</Text>
                <Text style={styles.scoreValue}>{candidate.score}</Text>
              </View>
              <View style={styles.skillRow}>
                {candidate.skills.map((skill, i) => (
                  <View key={i} style={styles.skillBadge}>
                    <CheckCircle2 color="#22C55E" size={12} />
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity 
              style={styles.viewWalletBtn}
              onPress={() => navigation.navigate('Wallet')} // View the ProofSkill Wallet proof
            >
              <Text style={styles.viewWalletText}>View ProofSkill Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.acceptBtn}>
              <Text style={styles.acceptBtnText}>Accept</Text>
            </TouchableOpacity>
          </View>
        ))}
        
        <View style={{ height: 30 }} />
      </ScrollView>

      <MainFooter activeTab="Jobs" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 20 
  },
  screenTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 13, marginTop: 4 },
  postJobBtn: { 
    backgroundColor: '#EAB308', 
    flexDirection: 'row', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  postJobText: { color: '#1F2937', fontWeight: 'bold', marginLeft: 5, fontSize: 13 },
  
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 25 },
  statCard: { 
    width: '48%', 
    backgroundColor: '#0F172A', 
    padding: 20, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  statValue: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  statLabel: { color: '#9CA3AF', fontSize: 12, marginTop: 8 },
  
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  candidateCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 15, 
    padding: 15, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#1E293B' 
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  avatarCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#EAB308', marginRight: 15 },
  candidateInfo: { flex: 1 },
  candidateName: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  candidateRole: { color: '#9CA3AF', fontSize: 13, marginTop: 2 },
  appliedText: { color: '#6B7280', fontSize: 11, marginTop: 4 },
  statusBadge: { backgroundColor: '#1E293B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  statusText: { color: '#9CA3AF', fontSize: 10, fontWeight: 'bold' },
  shortlistBadge: { backgroundColor: 'rgba(34, 197, 94, 0.1)' },
  shortlistText: { color: '#22C55E' },
  
  scoreBox: { 
    backgroundColor: '#1E293B', 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EAB308'
  },
  scoreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  scoreLabel: { color: '#9CA3AF', fontSize: 12 },
  scoreValue: { color: '#EAB308', fontSize: 20, fontWeight: 'bold' },
  skillRow: { flexDirection: 'row', flexWrap: 'wrap' },
  skillBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(34, 197, 94, 0.1)', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 8, 
    marginRight: 8,
    marginBottom: 5
  },
  skillText: { color: '#22C55E', fontSize: 10, marginLeft: 5 },
  
  viewWalletBtn: { 
    backgroundColor: '#EAB308', 
    height: 45, 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  viewWalletText: { color: '#0F172A', fontWeight: 'bold', fontSize: 14 },
  acceptBtn: { 
    height: 45, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#334155', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  acceptBtnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }
});

export default EmployerView;