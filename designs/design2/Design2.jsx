import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Top = () => {
	return (
		<View style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingHorizontal: 30,
		}}>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: 15
			}}>
				<Text style={{
					fontSize: 40,
					fontWeight: '500',
				}}>24</Text>
				<View>
					<Text style={{
						fontSize: 16,
						fontWeight: '500',
						color: "#A7A7A7"
					}}>Wed</Text>
					<Text style={{
						fontSize: 16,
						fontWeight: '500',
						color: "#A7A7A7"
					}}>Nov 2024</Text>
				</View>
			</View>
			<TouchableOpacity style={{
				backgroundColor: '#E9F4EF',
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: 10,
			}}>
				<Text style={{
					color: "#4DC591",
					fontWeight: '500',
					fontSize: 16,
				}}>Today</Text>
			</TouchableOpacity>
		</View>
	)
}

const Bottom = () => {
	return (
		<View style={{
			flexDirection: 'row',
			height: 60,
		}}>
			<View>
				bottom
			</View>
		</View>
	)
}

const Middle = () => {
	const days = [
		{ day: 'S', date: 21, isActive: false },
		{ day: 'M', date: 22, isActive: false },
		{ day: 'T', date: 23, isActive: false },
		{ day: 'W', date: 24, isActive: true },
		{ day: 'T', date: 25, isActive: false },
		{ day: 'F', date: 26, isActive: false },
		{ day: 'S', date: 27, isActive: false },
	]

	const courses = [
		{
			startTime: "11:30",
			endTime: "12:30",
			course: "Mathematics",
			chapter: "Chapter 1: Introduction",
			room: "Room 6-205",
			teacher: "Brooklyn Williamson",
			isActive: true,
		},
		{
			startTime: "13:30",
			endTime: "14:30",
			course: "Physics",
			chapter: "Chapter 1: Introduction",
			room: "Room 6-205",
			teacher: "Brooklyn Williamson",
			isActive: false,
		},
		{
			startTime: "15:30",
			endTime: "16:30",
			course: "Chemistry",
			chapter: "Chapter 1: Introduction",
			room: "Room 6-205",
			teacher: "Brooklyn Williamson",
			isActive: false,
		},
		{
			startTime: "17:30",
			endTime: "18:30",
			course: "Biology",
			chapter: "Chapter 1: Introduction",
			room: "Room 6-205",
			teacher: "Brooklyn Williamson",
			isActive: false,
		}
	]

	return (
		<View style={{
			flex: 1,
			backgroundColor: 'white',
			borderRadius: 35,
			paddingTop: 20,
		}}>
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingHorizontal: 20,
			}}>
				{days.map(day => (
					<View style={{
						gap: 4,
						paddingVertical: 10,
						paddingHorizontal: 10,
						borderRadius: 10,
						backgroundColor: day.isActive && "#FF7648"
					}} key={day.date.toString()}>
						<Text style={{
							textAlign: 'center',
							color: day.isActive ? "white" : '#A7A7A7',
							fontSize: 12,
							fontWeight: '500',
						}}>{day.day}</Text>
						<Text style={{
							textAlign: 'center',
							fontSize: 16,
							color: day.isActive ? "white" : 'black',
							fontWeight: '600',
						}}>{day.date}</Text>
					</View>
				))}
			</View>
			<View style={{
				backgroundColor: '#F0F0F0',
				height: 1,
				marginVertical: 20,
			}} />
			<View style={{
				flex: 1,
				paddingHorizontal: 30,
			}}>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingBottom: 30,
				}}>
					<View style={{
						flexDirection: 'row',
						gap: 40,
					}}>
						<Text style={{
							fontSize: 16,
							color: "#A7A7A7",
							fontWeight: '500'
						}}>Time</Text>
						<Text style={{
							fontSize: 16,
							color: "#A7A7A7",
							fontWeight: '500'
						}}>Course</Text>
					</View>
					<Entypo name="list" size={24} color="#A7A7A7" />
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					{courses.map(course => (
						<View style={{
							flexDirection: "row",
							gap: 20,
						}}>
							<View style={{
								gap: 6
							}}>
								<Text style={{
									fontSize: 16,
									fontWeight: '500',
								}}>{course.startTime}</Text>
								<Text style={{
									fontSize: 16,
									fontWeight: '500',
									color: '#A7A7A7'
								}}>{course.endTime}</Text>
							</View>
							<View style={{
								backgroundColor: '#F0F0F0',
								height: "100%",
								width: 2,
							}} ></View>
							<View style={{
								height: 150,
								backgroundColor: course.isActive ? "#4DC591" : '#F0F0F0',
								flex: 1,
								borderRadius: 20,
								marginBottom: 20,
							}}>

							</View>
						</View>
					)
					)
					}
				</ScrollView>


			</View>
		</View>
	)
}

const Design2 = () => {
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: '#FAF9F9',
		}}>
			<View style={{
				flex: 1,
				gap: 20
			}}>
				<Top />
				<Middle />
				<Bottom />
			</View>
		</SafeAreaView>
	)
}

export default Design2

const styles = StyleSheet.create({})
