import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react"
import DefaultPage from './src/DefaultPage';
import ResumePage from './src/Resume';

export default function App() {
  const [pageNumb, setPageNumb] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  let currentPage;
  if(submitClicked)
  {
    currentPage = <ResumePage firstName={firstName} lastName={lastName} setSubmitClicked={setSubmitClicked} />
  } 
  else
  {
    currentPage = <DefaultPage setFirstName={setFirstName} setLastName={setLastName} pageNumb={pageNumb} setPageNumb={setPageNumb} setSubmitClicked={setSubmitClicked} submitClicked={submitClicked} />
  }
  return (
    <View style={styles.container}>
      {currentPage}
      <br />
   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
