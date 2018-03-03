/*import React, {Component} from 'react';
import {
	AsyncStorage,
	Alert,
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

class HomePage extends Component {







	
		siteList(){
			Actions.SiteList();
		}








		async userLogout() {
			try {
				await AsyncStorage.removeItem('token');
				Alert.alert("Logout Success!");
				Actions.Authentication();
			} catch (error) {
				console.log('AsyncStorage error: ' + error.message);
			}
		}

		render() {
			return (
				<View style={styles.container}>


					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.siteList}
						>
						<Text style={styles.buttonText}>
							Proceed
						</Text>
					</TouchableOpacity>


					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.userLogout}
						>
						<Text style={styles.buttonText} >
							Log out
						</Text>
					</TouchableOpacity>


				</View>
			);
		}
	}

	export default HomePage;
*/














import React, {Component} from 'react';
import {
	AsyncStorage,
	Alert,
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

class HomePage extends Component {




	



	
		siteList(){
			Actions.SiteList();
		}

	showMap(){

			Actions.ShowMap();
		}






		async userLogout() {
			try {
				await AsyncStorage.removeItem('token');
				Alert.alert("Logout Success!");
				Actions.Authentication();
			} catch (error) {
				console.log('AsyncStorage error: ' + error.message);
			}
		}

		render() {
			return (
				<View style={styles.container}>


				<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.showMap}
						>
						<Text style={styles.buttonText}>
							sites on map
						</Text>
					</TouchableOpacity>


					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.siteList}
						>
						<Text style={styles.buttonText}>
							Proceed
						</Text>
					</TouchableOpacity>


					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.userLogout}
						>
						<Text style={styles.buttonText} >
							Log out
						</Text>
					</TouchableOpacity>


				</View>
			);
		}
	}

	export default HomePage;
