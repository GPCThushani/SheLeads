import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell, Menu } from 'lucide-react-native';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.avatarCircle} />
        <Text style={styles.brandName}>SheLeads</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Bell color="#EAB308" size={22} />
          <View style={styles.badge} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Menu color="#FFFFFF" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#000000',
  },
  leftSection: { flexDirection: 'row', alignItems: 'center' },
  avatarCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#EAB308', marginRight: 12 },
  brandName: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  rightSection: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { marginLeft: 15, position: 'relative' },
  badge: { position: 'absolute', right: 2, top: 0, width: 8, height: 8, borderRadius: 4, backgroundColor: '#EAB308', borderWidth: 1, borderColor: '#000' }
});

export default MainHeader;