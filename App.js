import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function App() {

  const questions = [
    {
      question: "Example Question",
      answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctIndex: 2
    },
    {
      question: "Everything is react is a ",
      answers: ["Module", "Component", "Hooks", "Template"],
      correctIndex: 1
    },
    {
      question: "’1’ + 1 ",
      answers: ["11", "1", "0", "2"],
      correctIndex: 0
    },
    {
      question: "'5.0' = = = 5 ",
      answers: ["True", "False"],
      correctIndex: 1
    },
    {
      question: "Is JavaScript case sensitive language",
      answers: ["Yes", "No"],
      correctIndex: 0
    },
    {
      question: "(['First','Second','Third'].join(' - ')",
      answers: ["First Second Third", "First,Second,Third", "First-Second-Third"],
      correctIndex: 2
    },
    {
      question: "How many values are available for flexDirection?",
      answers: ["2", "4", "5"],
      correctIndex: 1
    },
    {
      question: "How many built-in hooks are available in react-native?",
      answers: ["2", "4", "5", "3"],
      correctIndex: 2
    },
    {
      question: "Which command is used to make a directory git enabled?",
      answers: ["git commit", "git init", "git push", "git pull"],
      correctIndex: 1
    },
    {
      question: "What is useEffect used for?",
      answers: ["Perform Side Effects", "Nothing", "Update UI", "Manage State"],
      correctIndex: 0
    },
    {
      question: "",
      answers: [""],
      correctIndex: 0,
    },
  ]

  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(true);
  const [qs, setqs] = useState(0);

  function check(i) {
    if (qs >= 9) {
      setModal(false);
    }
    if (i == questions[qs].correctIndex) {
      setScore(score + 1);
    }
    setqs(qs + 1);
  }
  function visibility(j) {
    if (questions[qs].answers[j] != null)
      return true;
    else
      return false;
  }
  return (
    <>
      <Modal visible={modal}>
        <View style={styles.container}>
          <View style={styles.quizscreen}>
            <Text style={{ color: 'red', marginLeft: 10 }}>{qs}/10</Text>
            <Text style={{ fontSize: 20, marginVertical: 10, marginLeft: 10 }}>{questions[qs].question}</Text>
            <View style={styles.buttonview}>
              <Pressable style={visibility(0) ? styles.button : styles.nobutton} onPress={() => check(0)}>{questions[qs].answers[0]}</Pressable>
              <Pressable style={visibility(1) ? styles.button : styles.nobutton} onPress={() => check(1)}>{questions[qs].answers[1]}</Pressable>
              <Pressable style={visibility(2) ? styles.button : styles.nobutton} onPress={() => check(2)}>{questions[qs].answers[2]}</Pressable>
              <Pressable style={visibility(3) ? styles.button : styles.nobutton} onPress={() => check(3)}>{questions[qs].answers[3]}</Pressable>
            </View>
          </View>
        </View >
      </Modal>

      <Modal visible={!modal}>
        <View style={styles.container}>
          <View style={styles.quizscreen}>
            <Text style={{ marginLeft: 5 }}>Total Score: {score}</Text>
            <Text style={{ marginTop: 100, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 30 }}>Top Users</Text>
            <Text style={{ marginTop: 60, alignSelf: 'center', justifyContent: 'center' }}>Yo: {score} out of 10</Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizscreen: {
    width: 400,
    height: 300,
    backgroundColor: 'lightgrey',
  },
  buttonview: {
    alignItems: 'center',
  },
  button: {
    width: 130,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
    textAlign: 'center',
    paddingVertical: 5,
  },
  nobutton: {
    visibility: false,
  },
});