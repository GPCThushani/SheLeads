import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { 
  Edit3, Share2, Download, Trophy, 
  Zap, Users as UsersIcon, Rocket, 
  FileText 
} from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const ProfileScreen = ({ navigation }) => {
  const topSkills = [
    { name: "UI Design", score: 85 },
    { name: "Figma", score: 90 },
    { name: "React", score: 60 },
    { name: "Marketing", score: 45 },
  ];

  const achievements = [
    { title: "Sprint Master", date: "Apr 2026", icon: Trophy },
    { title: "Fast Learner", date: "Mar 2026", icon: Zap },
    { title: "Team Player", date: "Feb 2026", icon: UsersIcon },
    { title: "First Project", date: "Jan 2026", icon: Rocket },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarCircle} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Thush</Text>
              <Text style={styles.userRole}>Learner • UI/UX Designer</Text>
              <Text style={styles.userUni}>Sabaragamuwa University of Sri Lanka</Text>
              <View style={styles.badgeRow}>
                <View style={styles.verifiedBadge}><Text style={styles.verifiedText}>Verified</Text></View>
                <View style={styles.levelBadge}><Text style={styles.levelText}>Level 3</Text></View>
              </View>
            </View>
          </View>
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.editBtn}>
              <Edit3 color="#FFFFFF" size={16} />
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <Share2 color="#FFFFFF" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ProofSkill Wallet Summary Card */}
        <View style={styles.walletSummaryCard}>
          <Text style={styles.walletTitle}>ProofSkill Wallet</Text>
          <Text style={styles.trustLabel}>Employer Trust Rating</Text>
          <Text style={styles.trustScore}>88</Text>
          <Text style={styles.trustMax}>out of 100</Text>

          <View style={styles.statList}>
            <View style={styles.statRow}>
              <Text style={styles.statName}>Skills Verified</Text>
              <View style={[styles.statBadge, {backgroundColor: '#22C55E'}]}><Text style={styles.statCount}>8</Text></View>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statName}>Projects Completed</Text>
              <View style={[styles.statBadge, {backgroundColor: '#3B82F6'}]}><Text style={styles.statCount}>12</Text></View>
            </View>
          </View>

          <View style={styles.walletActionRow}>
            <TouchableOpacity 
              style={styles.viewWalletBtn}
              onPress={() => navigation.navigate('Wallet')}
            >
              <Text style={styles.viewWalletText}>View Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.downloadBtn}>
              <Download color="#FFFFFF" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Achievements Section */}
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.grid}>
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <View key={index} style={styles.gridItem}>
                <Icon color="#EAB308" size={24} style={{marginBottom: 8}} />
                <Text style={styles.achievementTitle}>{item.title}</Text>
                <Text style={styles.achievementDate}>{item.date}</Text>
              </View>
            );
          })}
        </View>

        {/* Top Skills Section */}
        <Text style={styles.sectionTitle}>Top Skills</Text>
        <View style={styles.skillsCard}>
          {topSkills.map((skill, index) => (
            <View key={index} style={styles.skillRow}>
              <View style={styles.skillInfo}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillScore}>{skill.score}%</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${skill.score}%` }]} />
              </View>
            </View>
          ))}
        </View>

        {/* Footer Actions */}
        <View style={styles.footerActions}>
          <TouchableOpacity style={styles.footerBtn}>
            <Share2 color="#FFFFFF" size={18} />
            <Text style={styles.footerBtnText}>Share Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn}>
            <FileText color="#FFFFFF" size={18} />
            <Text style={styles.footerBtnText}>Export PDF</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  profileCard: { backgroundColor: '#1E293B', borderRadius: 15, padding: 20, marginTop: 20, marginBottom: 20 },
  profileHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#EAB308', marginRight: 15 },
  userInfo: { flex: 1 },
  userName: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  userRole: { color: '#9CA3AF', fontSize: 13, marginTop: 4 },
  userUni: { color: '#6B7280', fontSize: 11, marginTop: 4 },
  badgeRow: { flexDirection: 'row', marginTop: 10 },
  verifiedBadge: { backgroundColor: 'rgba(34, 197, 94, 0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, marginRight: 8 },
  verifiedText: { color: '#22C55E', fontSize: 10, fontWeight: 'bold' },
  levelBadge: { backgroundColor: '#334155', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5 },
  levelText: { color: '#FFFFFF', fontSize: 10 },
  profileActions: { flexDirection: 'row', alignItems: 'center' },
  editBtn: { backgroundColor: '#0F172A', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, marginRight: 10, borderWidth: 1, borderColor: '#334155' },
  editBtnText: { color: '#FFFFFF', marginLeft: 8, fontSize: 12 },
  shareBtn: { backgroundColor: '#0F172A', padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#334155' },
  
  walletSummaryCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, borderWidth: 1, borderColor: '#EAB308', marginBottom: 25 },
  walletTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  trustLabel: { color: '#9CA3AF', fontSize: 12, marginBottom: 15 },
  trustScore: { color: '#EAB308', fontSize: 48, fontWeight: 'bold', textAlign: 'center' },
  trustMax: { color: '#9CA3AF', fontSize: 12, textAlign: 'center', marginBottom: 20 },
  statList: { marginBottom: 20 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  statName: { color: '#9CA3AF', fontSize: 13 },
  statBadge: { width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  statCount: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  walletActionRow: { flexDirection: 'row' },
  viewWalletBtn: { backgroundColor: '#EAB308', flex: 1, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  viewWalletText: { color: '#0F172A', fontWeight: 'bold' },
  downloadBtn: { width: 45, height: 45, borderRadius: 10, borderWidth: 1, borderColor: '#334155', justifyContent: 'center', alignItems: 'center' },

  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 25 },
  gridItem: { width: '48%', backgroundColor: '#0F172A', padding: 15, borderRadius: 12, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: '#1E293B' },
  achievementTitle: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' },
  achievementDate: { color: '#9CA3AF', fontSize: 10, marginTop: 4 },

  skillsCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, marginBottom: 30, borderWidth: 1, borderColor: '#1E293B' },
  skillRow: { marginBottom: 15 },
  skillInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  skillName: { color: '#FFFFFF', fontSize: 14 },
  skillScore: { color: '#EAB308', fontSize: 14, fontWeight: 'bold' },
  progressBarBg: { height: 6, backgroundColor: '#334155', borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#EAB308' },

  footerActions: { flexDirection: 'row', justifyContent: 'space-between' },
  footerBtn: { flex: 0.48, flexDirection: 'row', backgroundColor: '#000000', borderWidth: 1, borderColor: '#334155', height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  footerBtnText: { color: '#FFFFFF', marginLeft: 10, fontSize: 13 }
});

export default ProfileScreen;