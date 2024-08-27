//Trips.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

// Import the updated trips.json
import tripsData from './trips.json';

const Trip = ({ trip }) => {
  return (
    <View style={styles.container}>
      <Text>Departure: {trip.depart}</Text>
      <Text>Days: {trip.numberOfDays}</Text>
      <Text>Destination: {trip.destination}</Text>
    </View>
  );
};

const Trips = () => {
  // Filter trips to only those that should show on the home page
  const homePageTrips = tripsData.flatMap(cruiseLine =>
    cruiseLine.cruises.filter(trip => trip.showOnHomePage)
  );

  return (
    <ScrollView>
      {homePageTrips.length > 0 ? (
        <FlatList
          data={homePageTrips}
          keyExtractor={(item, index) => index.toString()} // or use a unique id if available
          renderItem={({ item }) => <Trip trip={item} />}
        />
      ) : (
        <Text>No trips available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Trips;
