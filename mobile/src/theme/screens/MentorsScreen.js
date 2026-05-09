import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { ChevronDown, Star, Video, MessageSquare } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const MentorsScreen = ({ navigation }) => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      specialty: "UI/UX Design",
      rating: 4.9,
      sessions: 158,
      bio: "10+ years in product design at top-tech companies.",
      isAiSuggested: true,
      verified: true,
    },
    {
      id: 2,
      name: "Mike Johnson",
      specialty: "Frontend Development",
      rating: 4.8,
      sessions: 122,
      bio: "Senior React developer and tech lead.",
      isAiSuggested: false,
      verified: true,
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Mentors</Text>
          <Text style={styles.screenSubtitle}>Learn from industry experts</Text>
        </View>

        {/* Session History Dropdown */}
        <TouchableOpacity style={styles.dropdownCard}>
          <View style={styles.dropdownLeft}>
            <Text style={styles.dropdownText}>Session History</Text>
            <View style={styles.countBadge}><Text style={styles.countText}>3</Text></View>
          </View>
          <ChevronDown color="#9CA3AF" size={20} />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Available Mentors</Text>

        {/* Mentor Cards */}
        {mentors.map((mentor) => (
          <View 
            key={mentor.id} 
            style={[
              styles.mentorCard, 
              mentor.isAiSuggested && styles.suggestedBorder
            ]}
          >
            <View style={styles.cardTop}>
              <View style={styles.avatarCircle} />
              <View style={styles.mentorInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.mentorName}>{mentor.name}</Text>
                  {mentor.verified && (
                    <View style={styles.verifiedBadge}>
                      <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.specialtyText}>{mentor.specialty}</Text>
                <View style={styles.ratingRow}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} color="#EAB308" size={14} fill="#EAB308" style={{ marginRight: 2 }} />
                  ))}
                  <Text style={styles.ratingText}>{mentor.rating} • {mentor.sessions} sessions</Text>
                </View>
              </View>
            </View>

            <Text style={styles.bioText}>{mentor.bio}</Text>

            {mentor.isAiSuggested && (
              <Text style={styles.aiSuggestionLabel}>AI Suggested for you</Text>
            )}

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.bookBtn}>
                <Video color="#1F2937" size={18} />
                <Text style={styles.bookText}>Book Session</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chatBtn}>
                <MessageSquare color="#FFFFFF" size={18} />
                <Text style={styles.chatText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="Mentors" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { marginVertical: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  
  dropdownCard: { 
    flexDirection: 'row', 
    backgroundColor: '#0F172A', 
    borderRadius: 12, 
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  dropdownLeft: { flexDirection: 'row', alignItems: 'center' },
  dropdownText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  countBadge: { backgroundColor: '#334155', width: 22, height: 22, borderRadius: 11, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  countText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  mentorCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, marginBottom: 20, borderWidth: 1, borderColor: '#1E293B' },
  suggestedBorder: { borderColor: '#EAB308' },
  
  cardTop: { flexDirection: 'row', marginBottom: 15 },
  avatarCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#EAB308', marginRight: 15 },
  mentorInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  mentorName: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  verifiedBadge: { backgroundColor: 'rgba(34, 197, 94, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  verifiedText: { color: '#22C55E', fontSize: 10, fontWeight: 'bold' },
  specialtyText: { color: '#EAB308', fontSize: 13, marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  ratingText: { color: '#9CA3AF', fontSize: 12, marginLeft: 8 },
  
  bioText: { color: '#9CA3AF', fontSize: 13, lineHeight: 18, marginBottom: 15 },
  aiSuggestionLabel: { color: '#EAB308', fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  
  actionRow: { flexDirection: 'row', justifyContent: 'space-between' },
  bookBtn: { flex: 0.55, backgroundColor: '#EAB308', height: 45, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  bookText: { color: '#1F2937', fontWeight: 'bold', fontSize: 14, marginLeft: 8 },
  chatBtn: { flex: 0.4, borderWidth: 1, borderColor: '#334155', height: 45, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  chatText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14, marginLeft: 8 },
});

export default MentorsScreen;