import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from './utils/constants'
import Top from './components/Top'
import Bottom from './components/Bottom'

const App = () => {
	return (
		<>

			<SafeAreaView style={{
				flex: 1,
				backgroundColor: COLORS.primary,
			}}>
				<View style={styles.container}>
					<Top />
					<Bottom />
				</View>
			</SafeAreaView>
			<SafeAreaView style={{
				flex: 0,
				backgroundColor: COLORS.secondary,
			}}></SafeAreaView>
		</>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.primary,
		width: '100%',
		paddingTop: 10,
		gap: 50,
	}
})
