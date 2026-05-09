import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Users, UserCheck, Star, MessageSquare, Calendar } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const CommunityScreen = ({ navigation }) => {
  const stats = [
    { label: "All Contributors", value: "1.2k", icon: Users, color: '#EAB308' },
    { label: "Active Participants", value: "342", icon: UserCheck, color: '#22C55E' },
    { label: "Top Mentors", value: "28", icon: Star, color: '#EAB308' },
    { label: "Discussions", value: "156", icon: MessageSquare, color: '#EAB308' },
  ];

  const events = [
    { title: "UI/UX Design Webinar", date: "May 8, 2026", participants: 42 },
    { title: "React Workshop", date: "May 12, 2026", participants: 28 },
  ];

  const discussions = [
    { title: "Best practices for responsive design?", author: "Alex K.", replies: 12 },
    { title: "How to prepare for UI interviews", author: "Jessica M.", replies: 8 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Community</Text>
          <Text style={styles.screenSubtitle}>Connect, learn, and grow together</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <View key={index} style={styles.statCard}>
                <Icon color={stat.color} size={24} style={{ marginBottom: 8 }} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            );
          })}
        </View>

        {/* Upcoming Events */}
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        {events.map((event, index) => (
          <TouchableOpacity key={index} style={styles.eventCard}>
            <Calendar color="#EAB308" size={20} style={styles.eventIcon} />
            <View>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <View style={styles.participantRow}>
                <Users color="#9CA3AF" size={14} />
                <Text style={styles.participantText}>{event.participants} participants</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Discussions Section */}
        <Text style={styles.sectionTitle}>Discussions</Text>
        {discussions.map((chat, index) => (
          <TouchableOpacity key={index} style={styles.discussionCard}>
            <Text style={styles.discussionTitle}>{chat.title}</Text>
            <Text style={styles.discussionMeta}>{chat.author} • {chat.replies} replies</Text>
          </TouchableOpacity>
        ))}
        
        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="Community" navigation={navigation} />
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
  
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  eventCard: { 
    flexDirection: 'row', 
    backgroundColor: '#0F172A', 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 15, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  eventIcon: { marginRight: 15 },
  eventTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  eventDate: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  participantRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  participantText: { color: '#9CA3AF', fontSize: 12, marginLeft: 6 },
  
  discussionCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  discussionTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '600' },
  discussionMeta: { color: '#9CA3AF', fontSize: 12, marginTop: 8 },
});

export default CommunityScreen;