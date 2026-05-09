import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, BookOpen, Rocket, Briefcase, Wallet } from 'lucide-react-native';

const MainFooter = ({ activeTab, navigation }) => {
  const tabs = [
    { name: 'Home', icon: Home, route: 'Home' },
    { name: 'Learn', icon: BookOpen, route: 'Learn' },
    { name: 'Sprint', icon: Rocket, route: 'Sprint' },
    { name: 'Jobs', icon: Briefcase, route: 'Jobs' },
    { name: 'Wallet', icon: Wallet, route: 'Wallet' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity 
            key={tab.name} 
            style={styles.tabItem}
            onPress={() => navigation.navigate(tab.route)}
          >
            <Icon color={isActive ? '#EAB308' : '#9CA3AF'} size={22} />
            <Text style={[styles.tabText, { color: isActive ? '#EAB308' : '#9CA3AF' }]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
  },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabText: { fontSize: 10, marginTop: 4, fontWeight: '500' }
});

export default MainFooter;