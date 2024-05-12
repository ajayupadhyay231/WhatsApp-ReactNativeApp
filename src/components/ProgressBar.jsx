import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colors from '../utils/colors'

const ProgressBar = ({ setShowModal }) => {

  // Step 1: Create a mutable reference to store the Animated.Value
  const progressAnimation = useRef(new Animated.Value(0)).current;

  // Step 2: Define the animation function
  const animatedProgress = () => {
    try {
      // Step 3: Configure the animation using Animated.timing
      Animated.timing(progressAnimation, {
        toValue: 100,             // Target value to animate to (fully opaque)
        duration: 5000,           // Duration of the animation in milliseconds (5 seconds)
        useNativeDriver: false    // Use native driver for performance
      }).start(({ finished }) => { // Step 4: Start the animation
        // Step 5: Handle animation completion
        if (finished) {
          console.log("Animation stopped and progress bar is full");
          setShowModal(false);    // Set show modal state to false when animation completes
        } else {
          // Animation was interrupted or cancelled
          console.log("Animation was interrupted or cancelled");
        }
      });
    } catch (err) {
      console.log("error in animatedProgress  err:", err); // Log any errors during animation
    }
  };

  // Step 6: Call the animation function when the component mounts
  useEffect(() => {
    animatedProgress();
  }, []);

  // Step 7: Render the progress bar using Animated.View and apply interpolation to width
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.progressBg}>
        <Animated.View                  // Step 1: Use Animated.View to create an animated view component
          style={[styles.progress_bar, {   // Step 2: Apply styles to the animated view
            width: progressAnimation.interpolate(   // Step 3: Interpolate the width property using progressAnimation
              {
                inputRange: [0, 100],        // Step 4: Define the input range for interpolation
                outputRange: ["0%", "100%"]  // Step 5: Define the output range for interpolation (0% to 100%)
              }
            )
          }]}
        >
        </Animated.View>
      </View>
    </View>
  )
}

export default ProgressBar

// Step 8: Define styles for the component
const styles = StyleSheet.create({
  mainConatiner: {
    marginTop: 10
  },
  progressBg: {
    width: "100%",
    height: 5,
    backgroundColor: colors.charcoal,
    borderRadius: 10
  },
  progress_bar: {
    width: "100%",
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 10
  }
})
