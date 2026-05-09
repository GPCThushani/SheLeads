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
import { Clock, Users, Calendar, CheckSquare, Square, Upload } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const SprintScreen = ({ navigation }) => {
  const currentSprint = {
    title: "Build a Portfolio Website",
    participants: 24,
    daysLeft: 4,
    progress: 60,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  };

  const tasks = [
    { id: 1, title: "Design wireframes", completed: true },
    { id: 2, title: "Create homepage layout", completed: true },
    { id: 3, title: "Add portfolio section", completed: false },
    { id: 4, title: "Implement contact form", completed: false },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerTitleSection}>
          <Text style={styles.screenTitle}>SprintLab</Text>
          <Text style={styles.screenSubtitle}>Collaborate and learn by doing</Text>
        </View>

        {/* Active Sprint Card */}
        <View style={styles.activeSprintCard}>
          <View style={styles.statusRow}>
            <View style={styles.activeBadge}>
              <View style={styles.greenDot} />
              <Text style={styles.activeText}>Active</Text>
            </View>
            <Calendar color="#EAB308" size={20} />
          </View>

          <Text style={styles.sprintTitle}>{currentSprint.title}</Text>
          
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Users color="#9CA3AF" size={16} />
              <Text style={styles.metaText}>{currentSprint.participants} participants</Text>
            </View>
            <View style={styles.metaItem}>
              <Clock color="#9CA3AF" size={16} />
              <Text style={styles.metaText}>{currentSprint.daysLeft} days left</Text>
            </View>
          </View>

          <View style={styles.tagContainer}>
            {currentSprint.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Sprint Progress</Text>
              <Text style={styles.progressPercent}>{currentSprint.progress}%</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${currentSprint.progress}%` }]} />
            </View>
          </View>
        </View>

        {/* Task Breakdown Section */}
        <Text style={styles.sectionTitle}>Task Breakdown</Text>
        <View style={styles.taskCard}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskRow}>
              {task.completed ? (
                <CheckSquare color="#EAB308" size={20} />
              ) : (
                <Square color="#4B5563" size={20} />
              )}
              <Text style={[styles.taskText, task.completed && styles.taskCompleted]}>
                {task.title}
              </Text>
            </View>
          ))}
        </View>

        {/* Submit Section */}
        <Text style={styles.sectionTitle}>Submit Your Work</Text>
        <View style={styles.submitCard}>
          <Text style={styles.inputLabel}>Project Link or File</Text>
          <TextInput 
            style={styles.input} 
            placeholder="https://your-project.com" 
            placeholderTextColor="#6B7280"
          />
          
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Describe your submission..." 
            placeholderTextColor="#6B7280"
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.submitBtn}>
            <Upload color="#0F172A" size={18} />
            <Text style={styles.submitBtnText}>Submit Project</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Sprints */}
        <Text style={styles.sectionTitle}>Upcoming Sprints</Text>
        <View style={styles.upcomingCard}>
           <View style={styles.upcomingInfo}>
              <Text style={styles.upcomingTitle}>Mobile App UI Challenge</Text>
              <Text style={styles.upcomingSub}>Starts May 12 • 18 participants</Text>
           </View>
           <TouchableOpacity style={styles.joinBtn}><Text style={styles.joinText}>Join</Text></TouchableOpacity>
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
  headerTitleSection: { marginVertical: 15 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  activeSprintCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 20, borderWidth: 1, borderColor: '#EAB308', marginBottom: 25 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  activeBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(34, 197, 94, 0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#22C55E', marginRight: 6 },
  activeText: { color: '#22C55E', fontSize: 12, fontWeight: 'bold' },
  sprintTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  metaRow: { flexDirection: 'row', marginBottom: 15 },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  metaText: { color: '#9CA3AF', fontSize: 12, marginLeft: 6 },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  tag: { backgroundColor: '#1E293B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginRight: 8, marginBottom: 8 },
  tagText: { color: '#9CA3AF', fontSize: 11 },
  progressSection: { marginTop: 10 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { color: '#9CA3AF', fontSize: 12 },
  progressPercent: { color: '#EAB308', fontSize: 12, fontWeight: 'bold' },
  progressBarBg: { height: 6, backgroundColor: '#334155', borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#EAB308', borderRadius: 3 },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  taskCard: { backgroundColor: '#0F172A', borderRadius: 12, padding: 20, marginBottom: 25 },
  taskRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  taskText: { color: '#FFFFFF', marginLeft: 12, fontSize: 14 },
  taskCompleted: { color: '#9CA3AF', textDecorationLine: 'line-through' },
  submitCard: { backgroundColor: '#0F172A', borderRadius: 12, padding: 20, marginBottom: 25 },
  inputLabel: { color: '#FFFFFF', fontSize: 14, marginBottom: 8 },
  input: { backgroundColor: '#1E293B', borderRadius: 8, height: 45, paddingHorizontal: 15, color: '#FFFFFF', marginBottom: 15 },
  textArea: { height: 80, textAlignVertical: 'top', paddingTop: 10 },
  submitBtn: { backgroundColor: '#EAB308', height: 48, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  submitBtnText: { color: '#0F172A', fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
  upcomingCard: { flexDirection: 'row', backgroundColor: '#0F172A', borderRadius: 12, padding: 15, alignItems: 'center', marginBottom: 12 },
  upcomingInfo: { flex: 1 },
  upcomingTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  upcomingSub: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  joinBtn: { borderWidth: 1, borderColor: '#1E293B', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 8 },
  joinText: { color: '#FFFFFF', fontSize: 13 }
});

export default SprintScreen;