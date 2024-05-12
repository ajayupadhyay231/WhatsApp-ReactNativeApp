import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';


const FullScreenModal = ({ showModal, setShowModal, children }) => {

//   const [modalVisible, setModalVisible] = useState(false);

  return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setShowModal(!showModal);
        // }}
        >
          {/* <TouchableOpacity onPress={()=>{setShowModal(!showModal)}}>  */}
           {children}
          {/* </TouchableOpacity> */}
      </Modal>
  );
};

const styles = StyleSheet.create({
 
});

export default FullScreenModal;