import React, { useState } from 'react';
import { SafeAreaView, Dimensions, Button, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


const { width, height } = Dimensions.get('window')

export default function App() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [numMonths, setNumMonth] = useState();
  const [loanEmi, setLoanEmi] = useState();
  const [totalInterest, setTotalIntrest] = useState();
  const [totalPayment, setTotalPayment] = useState(null);
  const [text, setText] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [loan, setLoan] = useState(false);
  const [intrest, setIntrest] = useState(false);
  const [backgroundcolor1, setBackgroundcolor1] = useState();
  const [backgroundcolor2, setBackgroundcolor2] = useState();
  const [backgroundcolor3, setBackgroundcolor3] = useState();
  const [principle, setPrinciple] = useState();
  const [color, setColor] = useState();
  const [bordertopWidth, setBorderTopWidth] = useState();

  const calculate = () => {
    let interest = interestRate / 1200;
    let term = numMonths;
    let top = Math.pow((1 + interest), term);
    let bottom = top - 1;
    let ratio = top / bottom;
    const LoanEMI = loanAmount * interest * ratio;
    const EMI = (LoanEMI.toString().split(".")[0]);
    setLoanEmi(EMI);
    const TotalPyment = EMI * numMonths;
    setTotalIntrest(TotalPyment);
    const TotalInterest = TotalPyment - loanAmount;
    setTotalPayment(TotalInterest);
    const TEXT = 'Loan EMI Calculator';
    setText(TEXT);
    const LOANEMI = 'Loan EMI';
    setLoan(LOANEMI);
    const Symbol = '₹'
    setSymbol(Symbol);
    const INTREST = 'Total Interest Payable';
    setIntrest(INTREST);
    const Principle = 'Total Payment(Principle+Intrest';
    setPrinciple(Principle);
    const backgroundColors1 = '#e0dc60';
    setBackgroundcolor1(backgroundColors1);
    const backgroundColors2 = '#aadbe6';
    setBackgroundcolor2(backgroundColors2);
    const backgroundColors3 = '#bbc3c4';
    setBackgroundcolor3(backgroundColors3);
    const colors = 'gray';
    setColor(colors);
    const borderTopWidth = 1;
    setBorderTopWidth(borderTopWidth);
  };





  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" hidden={true} backgroundColor="#000" translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{ backgroundColor: "#fff" }}>
        <View style={styles.mainViewcontainer}>
          <Text style={styles.mainTextView}>Loan EMI Calculator</Text>
        </View>

        <View style={{ marginVertical: 30 }}>
          <View style={styles.viewContainer1}>
            <Text style={styles.loanAmount}>Loan Amount</Text>
            <TextInput placeholder="Enter amount" style={styles.input}
              value={loanAmount}
              onChangeText={(text) => setLoanAmount(text)}
              keyboardType="numeric"
            />
            <Text style={styles.inr}>INR</Text>
          </View>

          <View style={styles.viewContainer2}>
            <Text style={styles.loanTenure}>Loan Tenure</Text>
            <TextInput placeholder="Enter months" style={styles.input}
              value={numMonths}
              onChangeText={(text) => setNumMonth(text)}
              keyboardType="numeric"
            />
            <Text style={styles.months}>Months</Text>
          </View>

          <View style={styles.viewContainer2}>
            <Text style={styles.interestRate}>Interest Rate</Text>
            <TextInput placeholder="NN.NN" style={styles.input}
              value={interestRate}
              onChangeText={(text) => setInterestRate(text)}
              keyboardType="numeric"
            />
            <Text style={styles.percent}>%</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={calculate}
          >
            <Text style={styles.buttonText}>CALCULATE</Text>
          </TouchableOpacity>
        </View>


        <View>
          <View style={{ borderColor: color, borderTopWidth: bordertopWidth }}>
            <Text style={styles.mainTextView}>
              {text}
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
            <View style={{ backgroundColor: backgroundcolor1, paddingVertical: 15, paddingHorizontal: 50, borderRadius: 20, alignItems: "center" }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{loan}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>{symbol}</Text>
                <Text style={{ fontWeight: "bold", marginHorizontal: 2 }}>{loanEmi}</Text>
              </View>
            </View>

            <View style={{ backgroundColor: backgroundcolor2, padding: 15, borderRadius: 20, alignItems: "center" }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{intrest}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: "bold" }}>{symbol}</Text>
                <Text style={{ fontWeight: "bold", marginHorizontal: 2 }}>{totalPayment}</Text>
              </View>
            </View>

          </View>
          <View style={{ backgroundColor: backgroundcolor3, borderRadius: 20, margin: 15, alignContent: 'center', alignItems: "center", padding: 15 }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {principle}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>
                {symbol}
              </Text>
              <Text style={{ fontWeight: "bold", marginHorizontal: 2 }}>
                {totalInterest}
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  mainTextView: {
    color: '#080842',
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    padding: 20
  },
  viewContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: height / 15
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#b8b1b0",
    height: height / 20,
    width: width / 2,
    position: "absolute",
    right: width / 5.5,
    padding: 10,
    margin: 2,
    borderRadius: 5

  },
  viewContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: height / 15
  },
  loanAmount: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    left: width / 12.5,
    fontWeight: "bold"
  },
  inr: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    right: width / 8.5,
    fontWeight: "bold"
  },
  loanTenure: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    left: width / 10.5,
    fontWeight: "bold"
  },
  months: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    right: width / 19.5,
    fontWeight: "bold"
  },
  interestRate: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    left: width / 11,
    fontWeight: "bold"
  },
  percent: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#080842",
    position: "absolute",
    right: width / 6.5,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#080842",
    height: 40,
    width: 150,
    alignSelf: "center",
    borderRadius: 10,
    margin: 30
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#ffffff",
    padding: 8,
    fontWeight: "bold",
    fontSize: 15
  }
});