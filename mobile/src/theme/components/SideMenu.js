import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { 
  X, Bell, User, Cpu, Building2, Settings, 
  Users, MessageSquare, ShieldAlert, LogOut 
} from 'lucide-react-native';

const SideMenu = ({ visible, onClose, navigation }) => {
  const menuItems = [
    { name: 'Notifications', icon: Bell, route: 'Notifications' },
    { name: 'Profile', icon: User, route: 'Profile' },
    { name: 'AI Companion', icon: Cpu, route: 'AICompanion' },
    { name: 'Employer View', icon: Building2, route: 'EmployerView' },
    { name: 'Settings', icon: Settings, route: 'Settings' },
    { name: 'Mentors', icon: Users, route: 'Mentors' },
    { name: 'Community', icon: MessageSquare, route: 'Community' },
    { name: 'User Management', icon: ShieldAlert, route: 'UserManagement' },
  ];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Transparent part to close when clicking outside */}
        <TouchableOpacity style={styles.transparentClose} onPress={onClose} />
        
        <View style={styles.menuContainer}>
          <SafeAreaView style={styles.safeArea}>
            {/* Menu Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Menu</Text>
              <TouchableOpacity onPress={onClose}>
                <X color="#FFFFFF" size={24} />
              </TouchableOpacity>
            </View>

            {/* User Profile Summary */}
            <View style={styles.profileSection}>
              <View style={styles.avatarCircle} />
              <View>
                <Text style={styles.userName}>Thush</Text>
                <Text style={styles.userRole}>Learner</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Navigation List */}
            <ScrollView style={styles.itemList}>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.menuItem}
                    onPress={() => {
                        onClose();
                        navigation.navigate(item.route);
                    }}
                  >
                    <Icon color="#FFFFFF" size={22} style={styles.menuIcon} />
                    <Text style={styles.menuItemText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Logout Section */}
            <View style={styles.footer}>
              <View style={styles.divider} />
              <TouchableOpacity 
                style={styles.logoutButton}
                onPress={() => {
                    onClose();
                    navigation.replace('Login');
                }}
              >
                <LogOut color="#EF4444" size={22} />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
  },
  transparentClose: {
    flex: 1,
  },
  menuContainer: {
    width: '75%', // Covers 75% of the screen width
    backgroundColor: '#0F172A',
    height: '100%',
    paddingHorizontal: 20,
  },
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D1D5DB',
    marginRight: 15,
  },
  userName: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  userRole: { color: '#9CA3AF', fontSize: 13 },
  divider: { height: 1, backgroundColor: '#1E293B', width: '100%' },
  itemList: { marginTop: 10 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: { marginRight: 15 },
  menuItemText: { color: '#FFFFFF', fontSize: 15 },
  footer: { paddingBottom: 20 },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoutText: { color: '#EF4444', fontSize: 15, marginLeft: 15, fontWeight: 'bold' }
});

export default SideMenu;