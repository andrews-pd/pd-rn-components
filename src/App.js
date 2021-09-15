import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from './Card';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CardDivider} from './Card/Card.Divider';
import {CardTitle} from './Card/Card.Title';
import {CardImage} from './Card/Card.Image';
import {Avatar} from './Avatar/Avatar';
//import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

const users = [
  {
    name: 'brynn',
    avatar:
      'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
  },
];

export default () => {
  return (
    <SafeAreaProvider style={style.App}>
      {/* <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Ionian_sea_islands%2C_pic2.JPG',
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: 220,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Avatar
            rounded
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Ionian_sea_islands%2C_pic2.JPG',
            }}
          />
          <Text style={{marginLeft: 10, marginTop: 5}}>Andrews Santiago</Text>
        </View>
      </Card> */}

      <Card>
        <CardTitle>HELLO WORLD</CardTitle>
        <CardDivider />
        <CardImage
          source={{
            uri: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: 220,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Avatar
            rounded
            source={{
              uri: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            }}
          />
          <Text style={{marginLeft: 10, marginTop: 5}}>Andrews Santiago</Text>
        </View>
      </Card>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  App: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
