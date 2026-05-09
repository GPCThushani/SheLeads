import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter'; // Import the common footer

const NotificationsScreen = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      title: "Sprint Completed!",
      message: 'You scored 85% on "Build a Portfolio Website"',
      time: "2 hours ago",
      isNew: true,
    },
    {
      id: 2,
      title: "New Job Match Available",
      message: "3 new jobs match your skills - 92% match for UI Designer role",
      time: "5 hours ago",
      isNew: true,
    },
    {
      id: 3,
      title: "Sprint Deadline Approaching",
      message: "Mobile App UI Challenge ends in 2 days",
      time: "1 day ago",
      isNew: false,
    },
    {
      id: 4,
      title: "Webinar Invitation",
      message: 'Join "Advanced Figma Techniques" on May 8, 2026',
      time: "2 days ago",
      isNew: false,
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <View style={styles.titleRow}>
            <Text style={styles.screenTitle}>Notifications</Text>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>2 new</Text>
            </View>
          </View>
          <Text style={styles.screenSubtitle}>Stay updated on your journey</Text>
        </View>

        {/* Notification List */}
        {notifications.map((item) => (
          <View 
            key={item.id} 
            style={[
              styles.notificationCard, 
              item.isNew ? styles.newCardBorder : styles.oldCardBorder
            ]}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              {item.isNew && <View style={styles.goldDot} />}
            </View>
            <Text style={styles.messageText}>{item.message}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        ))}
        
        {/* Extra space so the last notification isn't hidden by the footer */}
        <View style={{ height: 100 }} /> 
      </ScrollView>

      {/* FOOTER ADDED HERE */}
      <MainFooter activeTab="Notifications" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { marginVertical: 20 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  screenTitle: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold' },
  newBadge: { backgroundColor: 'rgba(34, 197, 94, 0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  newBadgeText: { color: '#22C55E', fontSize: 12, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 5 },
  
  notificationCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 15, 
    padding: 20, 
    marginBottom: 15,
    borderWidth: 1,
  },
  newCardBorder: { borderColor: '#EAB308' },
  oldCardBorder: { borderColor: '#1E293B' },
  
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cardTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  goldDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EAB308' },
  
  messageText: { color: '#9CA3AF', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  timeText: { color: '#6B7280', fontSize: 12 },
});

export default NotificationsScreen;