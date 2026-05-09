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
import { Send, AlertTriangle, CheckCircle2, Circle, Lock } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const AICompanionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>AI Career Companion</Text>
          <Text style={styles.screenSubtitle}>Your personal guide to career success</Text>
        </View>

        {/* Chat Interface Section */}
        <View style={styles.chatCard}>
          <Text style={styles.chatHeader}>Ask AI Career Guide</Text>
          <Text style={styles.chatSub}>Get personalized career advice and guidance</Text>
          
          <View style={styles.chatBox}>
            <View style={styles.aiMessage}>
              <Text style={styles.aiMessageText}>Hi Thush! 👋 How can I help you with your career today?</Text>
            </View>
            <View style={styles.userMessage}>
              <Text style={styles.userMessageText}>What skills do I need to become a Frontend Developer?</Text>
            </View>
            <View style={styles.aiMessage}>
              <Text style={styles.aiMessageText}>
                Based on your current progress, you need to learn React and JavaScript fundamentals. 
                I recommend starting with our "React for Beginners" course. You already have strong UI/UX skills which is great!
              </Text>
            </View>
          </View>

          <View style={styles.inputRow}>
            <TextInput 
              style={styles.chatInput} 
              placeholder="Ask me anything about your career..." 
              placeholderTextColor="#6B7280"
            />
            <TouchableOpacity style={styles.sendBtn}>
              <Send color="#1F2937" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Skill Gap Analysis */}
        <Text style={styles.sectionTitle}>Skill Gap Analysis</Text>
        <View style={styles.analysisCard}>
          <View style={styles.gapItem}>
            <View>
              <Text style={styles.gapName}>React Basics</Text>
              <Text style={styles.gapStatus}>Needed</Text>
            </View>
            <View style={[styles.badge, {backgroundColor: 'rgba(34, 197, 94, 0.1)'}]}>
              <Text style={[styles.badgeText, {color: '#22C55E'}]}>High Priority</Text>
            </View>
          </View>
          <View style={styles.gapItem}>
            <View>
              <Text style={styles.gapName}>Advanced Figma</Text>
              <Text style={styles.gapStatus}>Recommended</Text>
            </View>
            <View style={[styles.badge, {backgroundColor: 'rgba(234, 179, 8, 0.1)'}]}>
              <Text style={[styles.badgeText, {color: '#EAB308'}]}>Recommended</Text>
            </View>
          </View>
        </View>

        {/* Smart Suggestions */}
        <Text style={styles.sectionTitle}>Smart Suggestions</Text>
        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionText}>Complete 2 more sprints to unlock 5 new job opportunities</Text>
        </View>
        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionText}>Your UI Design skill is 92% — you qualify for Intermediate roles</Text>
        </View>

        {/* Safety Alerts */}
        <Text style={styles.sectionTitle}>Safety Alerts</Text>
        <View style={styles.alertCard}>
          <AlertTriangle color="#EF4444" size={20} />
          <Text style={styles.alertText}>Marketing Intern at XYZ Corp has low safety rating (2.1/5)</Text>
        </View>

        {/* Career Roadmap */}
        <Text style={styles.sectionTitle}>Your Career Roadmap</Text>
        <View style={styles.roadmapCard}>
          <RoadmapStep 
            step="1" title="Complete UI Design Fundamentals" 
            status="Completed" level="Beginner" isDone 
          />
          <RoadmapStep 
            step="2" title="Finish 3 Sprint Projects" 
            status="In Progress" level="Intermediate" isCurrent 
          />
          <RoadmapStep 
            step="3" title="Get Figma Certification" 
            status="Locked" level="Intermediate" 
          />
          <RoadmapStep 
            step="4" title="Apply for UI Designer Role" 
            status="Locked" level="Job Ready" 
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="AI" navigation={navigation} />
    </SafeAreaView>
  );
};

const RoadmapStep = ({ step, title, status, level, isDone, isCurrent }) => (
  <View style={styles.stepRow}>
    <View style={styles.stepLeft}>
      <View style={[styles.stepCircle, isDone && styles.doneCircle, isCurrent && styles.currentCircle]}>
        {isDone ? <CheckCircle2 color="#FFFFFF" size={16} /> : <Text style={styles.stepNum}>{step}</Text>}
      </View>
      {step !== "4" && <View style={styles.stepLine} />}
    </View>
    <View style={styles.stepRight}>
      <View style={styles.stepHeader}>
        <Text style={[styles.stepTitle, !isDone && !isCurrent && styles.lockedText]}>{title}</Text>
        <View style={styles.levelBadge}><Text style={styles.levelText}>{level}</Text></View>
      </View>
      <Text style={styles.stepStatus}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { marginVertical: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  chatCard: { backgroundColor: '#1E293B', borderRadius: 15, padding: 20, borderWidth: 1, borderColor: '#EAB308', marginBottom: 25 },
  chatHeader: { color: '#EAB308', fontSize: 16, fontWeight: 'bold' },
  chatSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4, marginBottom: 20 },
  chatBox: { marginBottom: 20 },
  aiMessage: { backgroundColor: '#0F172A', padding: 12, borderRadius: 10, alignSelf: 'flex-start', maxWidth: '85%', marginBottom: 12 },
  aiMessageText: { color: '#FFFFFF', fontSize: 13, lineHeight: 18 },
  userMessage: { backgroundColor: '#EAB308', padding: 12, borderRadius: 10, alignSelf: 'flex-end', maxWidth: '85%', marginBottom: 12 },
  userMessageText: { color: '#1F2937', fontSize: 13, fontWeight: '500' },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  chatInput: { flex: 1, backgroundColor: '#0F172A', height: 45, borderRadius: 8, paddingHorizontal: 15, color: '#FFFFFF', fontSize: 12 },
  sendBtn: { backgroundColor: '#EAB308', width: 45, height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  analysisCard: { backgroundColor: '#0F172A', borderRadius: 12, padding: 15, marginBottom: 25 },
  gapItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#1E293B' },
  gapName: { color: '#FFFFFF', fontSize: 14, fontWeight: '600' },
  gapStatus: { color: '#9CA3AF', fontSize: 12, marginTop: 2 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 10, fontWeight: 'bold' },
  suggestionCard: { backgroundColor: '#0F172A', borderRadius: 12, padding: 15, marginBottom: 10, borderWidth: 1, borderColor: '#1E293B' },
  suggestionText: { color: '#FFFFFF', fontSize: 13 },
  alertCard: { flexDirection: 'row', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: 12, padding: 15, alignItems: 'center', marginBottom: 25, borderWidth: 1, borderColor: '#EF4444' },
  alertText: { color: '#FFFFFF', fontSize: 12, marginLeft: 12, flex: 1 },
  roadmapCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, marginBottom: 20 },
  stepRow: { flexDirection: 'row', marginBottom: 5 },
  stepLeft: { alignItems: 'center', marginRight: 15 },
  stepCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#334155', justifyContent: 'center', alignItems: 'center', zIndex: 1 },
  doneCircle: { backgroundColor: '#22C55E' },
  currentCircle: { backgroundColor: '#EAB308' },
  stepNum: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  stepLine: { width: 2, flex: 1, backgroundColor: '#334155', marginVertical: -5 },
  stepRight: { flex: 1, paddingBottom: 25 },
  stepHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  stepTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  lockedText: { color: '#6B7280' },
  stepStatus: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  levelBadge: { backgroundColor: '#1E293B', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  levelText: { color: '#9CA3AF', fontSize: 10 }
});

export default AICompanionScreen;