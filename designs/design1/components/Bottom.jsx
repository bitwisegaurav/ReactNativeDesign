import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'
import Ionicons from '@expo/vector-icons/Ionicons';

const Bottom = () => {
	return (
		<View style={styles.container}>
			<View style={styles.topBarContainer}>
				<Text style={[styles.topBar, styles.activeText]}>Overview</Text>
				<Text style={styles.topBar}>Activity</Text>
			</View>

			<View style={{ gap: 15 }}>
				<Text style={styles.title}>Subtasks</Text>
				<View style={{
					gap: 10,
				}}>
					<View style={[styles.button, styles.createContent, { flexDirection: "row" }]}>
						<View style={styles.iconContainer}>
							<Ionicons name="checkmark" size={20} color="black" />
						</View>
						<Text style={styles.buttonText}>Create a content plan for March</Text>
					</View>
					<View style={styles.button}>
						<Text style={[styles.buttonText, { color: "rgba(255,255,255, 0.8)" }]}>Add a subtask</Text>
					</View>
				</View>
			</View>
			<View style={{ gap: 15 }}>
				<Text style={styles.title}>Attachments</Text>
				<View style={{
					gap: 10,
					flexDirection: 'row',
				}}>
					<View style={[styles.attachmentBox, styles.addButton, { borderStyle: "dashed" }]}>
						<Ionicons name="add" size={24} color={COLORS.primary} />
					</View>
					<View style={styles.attachmentBox}>
						<Image source={{ uri: "https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/64d01e24f55760319cfdaa08/1691360811142/Flow_3x2.png?format=1500w" }} style={{
							width: "100%",
							height: "100%",
							borderRadius: 10,
						}} />
					</View>
					<View style={styles.attachmentBox}>
						<Image source={{ uri: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3" }} style={{
							width: "100%",
							height: "100%",
							borderRadius: 10,
						}} />
					</View>
				</View>
			</View>
		</View>
	)
}

export default Bottom

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		paddingHorizontal: 20,
		gap: 30,
	},
	topBarContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
	topBar: {
		fontSize: 16,
		fontWeight: '500',
		color: "rgba(255,255,255,0.4)",
		flex: 1,
		textAlign: 'center',
		padding: 20,
		borderBottomWidth: 2,
		borderBottomColor: "rgba(255,255,255,0.2)",
		fontWeight: 'thin',
		fontSize: 18,
	},
	activeText: {
		color: COLORS.lightText,
		borderBottomColor: COLORS.primary,
	},
	title: {
		color: COLORS.dullText,
		fontSize: 16,
	},
	button: {
		padding: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: COLORS.primary,
		fldexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	createContent: {
		backgroundColor: COLORS.primary,
	},
	iconContainer: {
		height: 26,
		aspectRatio: 1,
		backgroundColor: "white",
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '500',
	},
	attachmentBox: {
		width: 80,
		aspectRatio: 1,
		borderRadius: 10,
	},
	addButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: COLORS.primary,
		borderStyle: "dashed",
	},
})
