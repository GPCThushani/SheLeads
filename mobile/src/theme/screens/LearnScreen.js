import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Search } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const LearnScreen = ({ navigation }) => {
  const learningPaths = [
    {
      id: 1,
      title: "UI Design Fundamentals",
      completedLessons: 8,
      totalLessons: 12,
      progress: 68,
      status: 'Continue'
    },
    {
      id: 2,
      title: "React for Beginners",
      completedLessons: 3,
      totalLessons: 15,
      progress: 20,
      status: 'Continue'
    },
    {
      id: 3,
      title: "Digital Marketing Basics",
      completedLessons: 0,
      totalLessons: 10,
      progress: 0,
      status: 'Start Learning'
    }
  ];

  const recommendations = [
    { title: "Advanced Figma Prototyping", duration: "4h", level: "Intermediate" },
    { title: "UX Research Methods", duration: "3h", level: "Beginner" }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>Learn</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search color="#9CA3AF" size={20} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search courses..."
            placeholderTextColor="#6B7280"
          />
        </View>

        <Text style={styles.sectionTitle}>Your Learning Path</Text>

        {/* Learning Path Cards */}
        {learningPaths.map((path) => (
          <View key={path.id} style={styles.pathCard}>
            <Text style={styles.pathTitle}>{path.title}</Text>
            <Text style={styles.pathLessons}>{path.completedLessons} of {path.totalLessons} lessons completed</Text>
            
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercent}>{path.progress}%</Text>
            </View>
            
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${path.progress}%` }]} />
            </View>

            <TouchableOpacity 
              style={[
                styles.actionButton, 
                path.status === 'Start Learning' ? styles.outlineButton : styles.goldButton
              ]}
            >
              <Text style={[
                styles.actionButtonText,
                path.status === 'Start Learning' ? styles.outlineText : styles.goldText
              ]}>
                {path.status}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Recommended Next Steps</Text>

        {/* Recommendation Cards */}
        {recommendations.map((item, index) => (
          <View key={index} style={styles.recommendCard}>
            <View style={styles.recommendInfo}>
              <Text style={styles.recommendTitle}>{item.title}</Text>
              <Text style={styles.recommendSub}>{item.duration} • {item.level}</Text>
            </View>
            <TouchableOpacity style={styles.smallStartBtn}>
              <Text style={styles.smallStartText}>Start</Text>
            </TouchableOpacity>
          </View>
        ))}
        
        {/* Extra padding for bottom scroll */}
        <View style={{ height: 30 }} />
      </ScrollView>

      <MainFooter activeTab="Learn" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginVertical: 15 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: '#FFFFFF' },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  pathCard: {
    backgroundColor: '#0F172A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  pathTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: 'bold' },
  pathLessons: { color: '#9CA3AF', fontSize: 13, marginTop: 5 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  progressLabel: { color: '#9CA3AF', fontSize: 12 },
  progressPercent: { color: '#EAB308', fontSize: 12, fontWeight: 'bold' },
  progressBarBg: { height: 6, backgroundColor: '#334155', borderRadius: 3, marginTop: 8, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#EAB308', borderRadius: 3 },
  actionButton: { height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  goldButton: { backgroundColor: '#EAB308' },
  outlineButton: { borderWidth: 1, borderColor: '#1E293B' },
  actionButtonText: { fontWeight: 'bold', fontSize: 15 },
  goldText: { color: '#0F172A' },
  outlineText: { color: '#FFFFFF' },
  recommendCard: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B'
  },
  recommendInfo: { flex: 1 },
  recommendTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  recommendSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  smallStartBtn: { backgroundColor: '#EAB308', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
  smallStartText: { color: '#0F172A', fontWeight: 'bold', fontSize: 14 }
});

export default LearnScreen;