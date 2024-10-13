// src/pages/Profile/Profile.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCard,
  IonSegment,
  IonSegmentButton,
  IonChip,
  IonList,
  IonNote,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import './Profile.css';

const Profile: React.FC = () => {
  const activities = ['Snowboarding', 'Driving BE', 'Skating'];
  const chats = [
    { name: 'Asta Buijene', message: 'Gal galim pakeisti laiką?', time: '3 min ago' },
    { name: 'Augus Tas', message: 'Labai patiko, kada sekantis užsiėmimas?', time: '1 h ago' },
    { name: 'Varėna: Jaunimo grupė', message: 'Ačiū!', time: '3 days ago' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <img src={process.env.PUBLIC_URL + '/assets/images/profile-placeholder.png'} alt="Profile" />
            </IonAvatar>
            <IonLabel>
              <h2>Martynas Gudaitis</h2>
              <p>I will show you fast and easy way</p>
            </IonLabel>
          </IonItem>

          <IonSegment value="requests">
            <IonSegmentButton value="requests">
              <IonLabel>Requests</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="messages">
              <IonLabel>Messages</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="calendar">
              <IonLabel>Calendar</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="edit">
              <IonLabel>Edit</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel className="activities-label">Activities</IonLabel>
          </IonItem>
          <IonGrid>
            <IonRow>
              {activities.map((activity, index) => (
                <IonCol size="auto" key={index}>
                  <IonChip color="primary">
                    <IonLabel>{activity}</IonLabel>
                  </IonChip>
                </IonCol>
              ))}
              <IonCol size="auto">
                <IonChip>
                  <IonLabel>Add New</IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel>Chats</IonLabel>
          </IonItem>
          <IonList>
            {chats.map((chat, index) => (
              <IonItem key={index}>
                <IonAvatar slot="start">
                  <img src={process.env.PUBLIC_URL + '/assets/imgs/profile-placeholder.png'} alt="Chat Avatar" />
                </IonAvatar>
                <IonLabel>
                  <h2>{chat.name}</h2>
                  <p>{chat.message}</p>
                </IonLabel>
                <IonNote slot="end">{chat.time}</IonNote>
              </IonItem>
            ))}
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
