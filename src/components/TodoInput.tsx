import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface TodoInputProps {
  addTask: (task: string) => void
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('')
  const [borderColor, setBorderColor] = useState('transparent')

  function handleAddNewTask() {
    if (!task) {
      return
    }

    addTask(task)
    setTask('')
    Keyboard.dismiss()
  }

  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor
        }
      ]}
    >
      <TextInput
        value={task}
        style={[
          styles.input,
          {
            borderRightColor:
              borderColor === 'transparent' ? '#EBEBEB' : '#8257E5'
          }
        ]}
        returnKeyType="send"
        onChangeText={setTask}
        selectionColor="#666666"
        placeholderTextColor="#B2B2B2"
        onSubmitEditing={handleAddNewTask}
        onBlur={() => setBorderColor('transparent')}
        onFocus={() => setBorderColor('#8257E5')}
        placeholder="Adicionar novo todo..."
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
        testID="add-new-task-button"
      >
        <Icon
          size={24}
          name="chevron-right"
          color={borderColor === 'transparent' ? '#B2B2B2' : '#8257E5'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: -28,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  input: {
    flex: 1,
    height: 56,
    color: '#666666',
    borderRightWidth: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#FFF',
    borderRightColor: '#EBEBEB'
  },
  addButton: {
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderBottomRightRadius: 5
  }
})
