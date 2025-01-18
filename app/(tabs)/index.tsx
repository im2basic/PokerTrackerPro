import React from "react";
import { Text, View, StyleSheet } from "react-native";

// App Entry Point
const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello, World!</Text>
		</View>
	);
};

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	text: {
		fontSize: 24,
		color: "#333",
	},
});

export default App;
