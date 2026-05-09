import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { ChevronRight, LogOut, Trash2 } from 'lucide-react-native';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainHeader navigation={navigation} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Settings</Text>
          <Text style={styles.screenSubtitle}>Manage your account and preferences</Text>
        </View>

        {/* Account Section */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          <SettingsItem 
            title="Edit Profile" 
            subtitle="Update your personal information" 
            onPress={() => navigation.navigate('Profile')} 
          />
          <View style={styles.divider} />
          <SettingsItem 
            title="Privacy & Security" 
            subtitle="Manage your account security" 
          />
        </View>

        {/* Preferences Section */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.card}>
          <SettingsItem 
            title="Notifications" 
            subtitle="Manage notification settings" 
            onPress={() => navigation.navigate('Notifications')}
          />
          <View style={styles.divider} />
          <SettingsItem 
            title="Language" 
            subtitle="English (US)" 
          />
        </View>

        {/* Support Section */}
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.card}>
          <SettingsItem 
            title="Help Center" 
            subtitle="Get help and support" 
          />
          <View style={styles.divider} />
          <SettingsItem 
            title="About" 
            subtitle="Version 1.0.0" 
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutCard}
          onPress={() => navigation.replace('Login')}
        >
          <View style={styles.logoutIconContainer}>
            <LogOut color="#EF4444" size={20} />
          </View>
          <View>
            <Text style={styles.logoutText}>Logout</Text>
            <Text style={styles.logoutSubtext}>Sign out of your account</Text>
          </View>
        </TouchableOpacity>

        {/* Danger Zone */}
        <View style={styles.dangerCard}>
          <Text style={styles.dangerText}>
            Permanently delete your account and all associated data.
          </Text>
          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <MainFooter activeTab="Settings" navigation={navigation} />
    </SafeAreaView>
  );
};

const SettingsItem = ({ title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.itemRow} onPress={onPress}>
    <View style={styles.itemContent}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>
    <ChevronRight color="#4B5563" size={20} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  content: { flex: 1, paddingHorizontal: 20 },
  headerSection: { marginVertical: 20 },
  screenTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  screenSubtitle: { color: '#9CA3AF', fontSize: 14, marginTop: 4 },
  sectionTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginBottom: 15, marginTop: 10 },
  card: { backgroundColor: '#0F172A', borderRadius: 12, paddingHorizontal: 15, marginBottom: 25 },
  itemRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  itemContent: { flex: 1 },
  itemTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  itemSubtitle: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
  divider: { height: 1, backgroundColor: '#1E293B' },
  logoutCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', borderRadius: 12, padding: 15, marginBottom: 25 },
  logoutIconContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(239, 68, 68, 0.1)', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  logoutText: { color: '#EF4444', fontSize: 15, fontWeight: 'bold' },
  logoutSubtext: { color: '#6B7280', fontSize: 12, marginTop: 2 },
  dangerCard: { backgroundColor: 'rgba(127, 29, 29, 0.2)', borderRadius: 12, padding: 20, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(127, 29, 29, 0.5)' },
  dangerText: { color: '#9CA3AF', fontSize: 13, textAlign: 'center', marginBottom: 15 },
  deleteBtn: { height: 45, borderRadius: 8, borderWidth: 1, borderColor: '#EF4444', justifyContent: 'center', alignItems: 'center' },
  deleteBtnText: { color: '#EF4444', fontWeight: 'bold' }
});

export default SettingsScreen;