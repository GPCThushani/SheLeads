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
import { Search, Star, ShieldCheck, MapPin, Briefcase, ChevronDown, Flag } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const JobsScreen = ({ navigation }) => {
  const jobs = [
    {
      id: 1,
      role: "Junior UI Designer",
      company: "TechStart Inc.",
      salary: "LKR 80,000 - 120,000",
      location: "Remote",
      type: "Full-time",
      match: "92%",
      safety: "4.8/5",
      reviews: "24",
      tags: ["Figma", "UI Design", "Prototyping"],
      labels: ["Verified", "Safe", "Female-friendly"]
    },
    {
      id: 2,
      role: "UX Designer",
      company: "Creative Studio",
      salary: "LKR 90,000 - 130,000",
      location: "Remote",
      type: "Full-time",
      match: "91%",
      safety: "4.6/5",
      reviews: "18",
      tags: ["Figma", "User Research", "Wireframing"],
      labels: ["Verified", "Safe", "Female-friendly"]
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>HireLoop</Text>

        {/* Search & Filters */}
        <View style={styles.searchContainer}>
          <Search color="#9CA3AF" size={20} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search jobs..."
            placeholderTextColor="#6B7280"
          />
        </View>

        <View style={styles.filterRow}>
          {['All', 'Remote', 'Part-time', 'Full-time'].map((filter, i) => (
            <TouchableOpacity key={i} style={[styles.filterBtn, i === 0 && styles.activeFilter]}>
              <Text style={[styles.filterText, i === 0 && styles.activeFilterText]}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Matches</Text>
          <Text style={styles.matchHighlight}>90%+ match</Text>
        </View>

        {/* Job Cards */}
        {jobs.map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.cardTop}>
              <View>
                <View style={styles.titleRow}>
                  <Text style={styles.roleText}>{job.role}</Text>
                  <Star color="#EAB308" size={16} fill="#EAB308" style={{marginLeft: 8}} />
                </View>
                <Text style={styles.companyText}>{job.company}</Text>
              </View>
              <View style={styles.matchBadge}>
                <Text style={styles.matchText}>{job.match} match</Text>
              </View>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoItem}><Text style={styles.infoValue}>$  {job.salary}</Text></View>
              <View style={styles.infoItem}>
                <MapPin color="#9CA3AF" size={14} />
                <Text style={styles.infoLabel}>{job.location}</Text>
              </View>
              <View style={styles.infoItem}>
                <Briefcase color="#9CA3AF" size={14} />
                <Text style={styles.infoLabel}>{job.type}</Text>
              </View>
            </View>

            {/* Safety Score Section */}
            <View style={styles.safetyRow}>
              <ShieldCheck color="#22C55E" size={18} />
              <Text style={styles.safetyLabel}>Safety Score:</Text>
              <View style={styles.stars}>
                {[1,2,3,4].map(s => <Star key={s} color="#22C55E" size={12} fill="#22C55E" />)}
                <Star color="#22C55E" size={12} />
              </View>
              <Text style={styles.safetyValue}>{job.safety}</Text>
              <Text style={styles.reviewText}>({job.reviews} reviews)</Text>
            </View>

            <View style={styles.labelRow}>
              {job.labels.map((l, i) => (
                <View key={i} style={[styles.label, l === 'Verified' ? styles.vLabel : l === 'Safe' ? styles.sLabel : styles.fLabel]}>
                  <Text style={styles.labelText}>{l}</Text>
                </View>
              ))}
            </View>

            <View style={styles.tagRow}>
              {job.tags.map((t, i) => (
                <View key={i} style={styles.tag}><Text style={styles.tagText}>{t}</Text></View>
              ))}
            </View>

            <TouchableOpacity style={styles.accordion}>
              <Text style={styles.accordionText}>Why this match?</Text>
              <ChevronDown color="#EAB308" size={18} />
            </TouchableOpacity>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.applyNowBtn}><Text style={styles.applyBtnText}>Apply Now</Text></TouchableOpacity>
              <TouchableOpacity style={styles.proofBtn}><Text style={styles.proofText}>Apply with ProofSkill</Text></TouchableOpacity>
              <TouchableOpacity style={styles.flagBtn}><Flag color="#EF4444" size={18} /></TouchableOpacity>
            </View>
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
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginVertical: 15 },
  searchContainer: { flexDirection: 'row', backgroundColor: '#1E293B', borderRadius: 10, paddingHorizontal: 15, height: 45, marginBottom: 15, alignItems: 'center' },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: '#FFFFFF' },
  filterRow: { flexDirection: 'row', marginBottom: 25 },
  filterBtn: { backgroundColor: '#1E293B', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 15, marginRight: 8 },
  activeFilter: { backgroundColor: '#334155', borderWidth: 1, borderColor: '#EAB308' },
  filterText: { color: '#9CA3AF', fontSize: 12 },
  activeFilterText: { color: '#EAB308' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  matchHighlight: { color: '#EAB308', fontSize: 12 },
  jobCard: { backgroundColor: '#0F172A', borderRadius: 15, padding: 15, marginBottom: 20, borderWidth: 1, borderColor: '#1E293B' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  roleText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  companyText: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  matchBadge: { backgroundColor: 'rgba(234, 179, 8, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, height: 25 },
  matchText: { color: '#EAB308', fontSize: 10, fontWeight: 'bold' },
  infoGrid: { marginBottom: 15 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  infoValue: { color: '#D1D5DB', fontSize: 14 },
  infoLabel: { color: '#9CA3AF', fontSize: 14, marginLeft: 8 },
  safetyRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  safetyLabel: { color: '#FFFFFF', fontSize: 12, marginLeft: 8 },
  stars: { flexDirection: 'row', marginHorizontal: 5 },
  safetyValue: { color: '#22C55E', fontSize: 12, fontWeight: 'bold' },
  reviewText: { color: '#6B7280', fontSize: 12, marginLeft: 4 },
  labelRow: { flexDirection: 'row', marginBottom: 15 },
  label: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 8 },
  vLabel: { backgroundColor: 'rgba(34, 197, 94, 0.1)' },
  sLabel: { backgroundColor: 'rgba(234, 179, 8, 0.1)' },
  fLabel: { backgroundColor: 'rgba(34, 197, 94, 0.1)' },
  labelText: { fontSize: 10, fontWeight: '600', color: '#22C55E' }, // Simplified color for all labels for now
  tagRow: { flexDirection: 'row', marginBottom: 20 },
  tag: { backgroundColor: '#1E293B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginRight: 8 },
  tagText: { color: '#9CA3AF', fontSize: 11 },
  accordion: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  accordionText: { color: '#EAB308', fontSize: 14, fontWeight: '500' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  applyNowBtn: { backgroundColor: '#EAB308', flex: 1, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  applyBtnText: { color: '#1F2937', fontWeight: 'bold' },
  proofBtn: { borderWidth: 1, borderColor: '#EAB308', flex: 1, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  proofText: { color: '#EAB308', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  flagBtn: { width: 45, height: 45, borderRadius: 10, borderWidth: 1, borderColor: '#374151', justifyContent: 'center', alignItems: 'center' }
});

export default JobsScreen;