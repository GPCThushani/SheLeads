import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { BookOpen, Award, Rocket, Clock, Trophy } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const UserManagementScreen = ({ navigation }) => {
  const stats = [
    { label: "Courses Enrolled", value: "8", icon: BookOpen, color: '#EAB308' },
    { label: "Skills Verified", value: "8", icon: Award, color: '#22C55E' },
    { label: "Sprints Joined", value: "12", icon: Rocket, color: '#EAB308' },
    { label: "Total Hours", value: "47h", icon: Clock, color: '#EAB308' },
  ];

  const activity = [
    { month: "Jan", hours: "16h", progress: 0.4 },
    { month: "Feb", hours: "12h", progress: 0.6 },
    { month: "Mar", hours: "18h", progress: 0.5 },
    { month: "Apr", hours: "17h", progress: 0.8 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>User Management</Text>
          <Text style={styles.screenSubtitle}>Track your learning journey</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <View key={index} style={styles.statCard}>
                <Icon color={stat.color} size={20} style={{ marginBottom: 8 }} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            );
          })}
        </View>

        {/* Learning Activity Chart */}
        <View style={styles.activityCard}>
          <Text style={styles.cardTitle}>Learning Activity</Text>
          {activity.map((item, index) => (
            <View key={index} style={styles.activityRow}>
              <Text style={styles.monthLabel}>{item.month}</Text>
              <View style={styles.barContainer}>
                <View style={[styles.barFill, { width: `${item.progress * 100}%` }]} />
              </View>
              <Text style={styles.hourLabel}>{item.hours}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {/* Recent Activity Items */}
        <View style={styles.recentItem}>
          <Text style={styles.itemTitle}>Completed Sprint</Text>
          <Text style={styles.itemSub}>Build a Portfolio Website</Text>
          <Text style={styles.itemDate}>Apr 28, 2026</Text>
        </View>

        <View style={styles.recentItem}>
          <Text style={styles.itemTitle}>Skill Verified</Text>
          <Text style={styles.itemSub}>UI Design</Text>
          <Text style={styles.itemDate}>Apr 25, 2026</Text>
        </View>

        {/* Motivational Card */}
        <View style={styles.motivationalCard}>
          <Trophy color="#EAB308" size={24} style={styles.trophyIcon} />
          <View style={styles.motivationalTextContainer}>
            <Text style={styles.motivationalTitle}>Keep Going!</Text>
            <Text style={styles.motivationalSub}>
              You're in the top 10% of learners this month. Complete 2 more sprints to reach expert level.
            </Text>
          </View>
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="UserManagement" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { marginVertical: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 25 },
  statCard: { 
    width: '48%', 
    backgroundColor: '#0F172A', 
    padding: 15, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  statValue: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#9CA3AF', fontSize: 11, marginTop: 4, textAlign: 'center' },
  
  activityCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
  cardTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 20 },
  activityRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  monthLabel: { color: '#9CA3AF', width: 40, fontSize: 12 },
  barContainer: { flex: 1, height: 8, backgroundColor: '#1E293B', borderRadius: 4, marginHorizontal: 10, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#EAB308' },
  hourLabel: { color: '#EAB308', width: 40, fontSize: 12, textAlign: 'right', fontWeight: 'bold' },
  
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  recentItem: { backgroundColor: '#0F172A', borderRadius: 12, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#1E293B' },
  itemTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  itemSub: { color: '#9CA3AF', fontSize: 13, marginTop: 4 },
  itemDate: { color: '#6B7280', fontSize: 11, marginTop: 8 },
  
  motivationalCard: { 
    flexDirection: 'row', 
    backgroundColor: 'rgba(234, 179, 8, 0.05)', 
    borderRadius: 12, 
    padding: 20, 
    alignItems: 'flex-start', 
    borderWidth: 1, 
    borderColor: 'rgba(234, 179, 8, 0.3)',
    marginBottom: 20 
  },
  trophyIcon: { marginRight: 15, marginTop: 2 },
  motivationalTextContainer: { flex: 1 },
  motivationalTitle: { color: '#EAB308', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  motivationalSub: { color: '#9CA3AF', fontSize: 13, lineHeight: 18 },
});

export default UserManagementScreen;