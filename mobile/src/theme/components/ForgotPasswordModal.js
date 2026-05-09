import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Modal, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Mail } from 'lucide-react-native';

const ForgotPasswordModal = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          {/* Yellow decorative circle from image_af366b.png */}
          <View style={styles.goldCircle} />

          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter your email to reset your password</Text>

          <View style={styles.formCard}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <Mail color="#9CA3AF" size={20} style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="your@email.com"
                placeholderTextColor="#6B7280"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send Reset Link</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={onClose}>
              <Text style={styles.backButtonText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Darken background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: '100%',
    alignItems: 'center',
  },
  goldCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EAB308', // Gold yellow
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 30,
  },
  formCard: {
    width: '100%',
    backgroundColor: '#0F172A', // Dark navy card
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 13,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#EAB308',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  sendButtonText: {
    color: '#0F172A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default ForgotPasswordModal;