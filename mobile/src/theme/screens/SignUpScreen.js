import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { User, CreditCard, Phone, Mail, Lock, Chrome } from 'lucide-react-native';

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    nic: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleRegister = () => {
    // Backend integration: POST to /api/auth/register
    console.log("Registering:", formData);
    navigation.navigate('ProfileSetup'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Start your learning journey today</Text>
          </View>

          {/* Form Card */}
          <View style={styles.formCard}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <User color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="Your full name"
                placeholderTextColor="#6B7280"
                onChangeText={(val) => setFormData({...formData, fullName: val})}
              />
            </View>

            <Text style={styles.label}>NIC Number</Text>
            <View style={styles.inputContainer}>
              <CreditCard color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="123456789V"
                placeholderTextColor="#6B7280"
                onChangeText={(val) => setFormData({...formData, nic: val})}
              />
            </View>

            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <Phone color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="+94 71 234 5678"
                placeholderTextColor="#6B7280"
                keyboardType="phone-pad"
                onChangeText={(val) => setFormData({...formData, mobile: val})}
              />
            </View>

            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Mail color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="your@email.com"
                placeholderTextColor="#6B7280"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(val) => setFormData({...formData, email: val})}
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Lock color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="........"
                placeholderTextColor="#6B7280"
                secureTextEntry
                onChangeText={(val) => setFormData({...formData, password: val})}
              />
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Complete Registration</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>Or continue with</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <Chrome color="#FFFFFF" size={20} style={styles.icon} />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 30 },
  header: { alignItems: 'center', marginBottom: 25 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 14, color: '#9CA3AF', marginTop: 5 },
  formCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 15, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#1E293B' 
  },
  label: { color: '#FFFFFF', fontSize: 13, marginBottom: 8, fontWeight: '500' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    height: 50,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, color: '#FFFFFF', fontSize: 14 },
  registerButton: {
    backgroundColor: '#EAB308',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 12
  },
  registerButtonText: { color: '#0F172A', fontWeight: 'bold', fontSize: 16 },
  cancelButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#0F172A',
    marginBottom: 20
  },
  cancelButtonText: { color: '#FFFFFF', fontWeight: '600' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  line: { flex: 1, height: 1, backgroundColor: '#334155' },
  dividerText: { color: '#64748B', paddingHorizontal: 10, fontSize: 11 },
  googleButton: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  googleText: { color: '#FFFFFF', fontWeight: '600', marginLeft: 8 },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { color: '#9CA3AF', fontSize: 13 },
  signInLink: { color: '#EAB308', fontWeight: 'bold', fontSize: 13 }
});

export default SignUpScreen;