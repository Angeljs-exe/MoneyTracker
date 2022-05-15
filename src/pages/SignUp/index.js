import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';


const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false)

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 200, 
      maxWidth: 200, 
      includeBase64: true,
    });
    if(result.didCancel){
      setHasPhoto(false);
      showMessage({
        message: "Upload foto dibatalkan",
        type: "default",
        backgroundColor: "#D94435e",
        color: "white",
      })
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity OnPress={getPhoto} activeOpacity={0.7}>
           { !hasPhoto &&  (
           <View style={styles.addPhoto}>
             <Text style={styles.addPhototext}>Add Photo</Text>
           </View>
           )}
           {
             hasPhoto && <Image source={{uri: photo}} style={styles.avatar}/>
           }
            </TouchableOpacity>
          </View>
        </View>

        <TextInput text="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput text="Email Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  addPhototext: {
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    maxWidth: 45,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
