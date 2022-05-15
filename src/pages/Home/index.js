import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.profilWrapper}>
        <Text style={styles.title}>Money Tracker </Text>
        <Text style={styles.title2}>Track your money </Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          }}
          style={styles.image}
        />
      </View>
      <Gap height={24} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.title3}>Your Balance </Text>
        <Text style={styles.textMoney}>Rp. 10.000.000 </Text>
        <Gap height={18} />
        <View style={styles.border} />
        <Gap height={20} />
        <Text style={styles.hand}>Cash on Hand              Rp.4.000.000 </Text>
        <Gap height={11} />
        <Text style={styles.bank}>Cash on Bank               Rp.6.000.000 </Text>
      </View>
      <Gap height={24} />
      <View style={styles.addTransactionWrapper}>
        <Text style={styles.title4}>Add Transaction </Text>
        <Gap height={5} />
        <Button
          title={'Cash on Hand'}
          onPress={() => navigation.replace('CashonHand')}
        />
        <Gap height={18.08} />
        <Button
          title={'Cash on Bank'}
          onPress={() => navigation.replace('CashonBank')}
        />
      </View>
      <Gap height={25} />
      <Header
        buttomtap1={() => navigation.navigate('Home')}
        buttomtap2={() => navigation.navigate('')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profilWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 38,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  title2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    top: 30,
    right: 169,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    top: 9,
    left: 13.5,
  },
  balanceWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  title3: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 16,
  },
  textMoney: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  border: {
    borderBottomWidth: 1,
    width: 326,
    left: 26,
  },
  hand: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    
  },
  bank: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  addTransactionWrapper: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 15,
    flex: 1,
  },
  title4: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 16,
  },
});
