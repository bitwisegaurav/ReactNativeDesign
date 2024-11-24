import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

const Header = () => {
	return (
		<View style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
		}}>
			<Ionicons name="chevron-back-outline" size={24} color="black" />
			<View style={{
				flexDirection: 'row',
				gap: 40,
			}}>
				<Ionicons name="share-social-outline" size={24} color="black" />
				<Feather name="edit-3" size={24} color="black" />
			</View>
		</View>
	)
}

const BottomPart = () => {
	return (
		<View style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			gap: 40,
		}}>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: 10,
				marginTop: 20,
				flex: 1,
			}}>
				<Image source={{ uri: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" }} style={{
					width: 35,
					aspectRatio: 1,
					borderRadius: 100,
				}} />
				<View>
					<Text style={{
						fontSize: 12,
					}}>Associated To</Text>
					<Text style={{
						fontSize: 16,
						fontWeight: "500",
					}}>John Doe</Text>
				</View>
			</View>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: 10,
				marginTop: 20,
				flex: 1,
			}}>
				<View style={{
					width: 35,
					aspectRatio: 1,
					borderWidth: 1,
					borderRadius: 40,
					borderStyle: "dashed",
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<AntDesign name="calendar" size={16} color="black" />
				</View>
				<View>
					<Text style={{
						fontSize: 12,
					}}>Due Date</Text>
					<Text style={{
						fontSize: 16,
						fontWeight: "500",
					}}>16 Feb</Text>
				</View>
			</View>
		</View>
	)
}

const Top = () => {
	return (
		<View style={{
			gap: 20,
			paddingHorizontal: 20,
		}}>
			<Header />
			<Text style={{
				fontSize: 31,
				fontWeight: 'bold',
				marginTop: 20,
				fontStyle: "italic"
			}}>Match Dribble Shot Design. Plan for the month.</Text>
			<BottomPart />
		</View>
	)
}

export default Top

const styles = StyleSheet.create({})
