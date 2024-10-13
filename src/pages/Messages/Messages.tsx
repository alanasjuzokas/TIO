// src/pages/Messages/Messages.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonNote } from '@ionic/react';

const Messages: React.FC = () => {
  const messages = [
    { name: 'Asta Buijene', message: 'Gal galim pakeisti laiką?', time: '3 min ago' },
    { name: 'Augus Tas', message: 'Labai patiko, kada sekantis užsiėmimas?', time: '1 h ago' },
    { name: 'Varėna: Jaunimo grupė', message: 'Ačiū!', time: '3 days ago' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          {messages.map((chat, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <img src="/assets/imgs/profile-placeholder.png" alt="Avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{chat.name}</h2>
                <p>{chat.message}</p>
              </IonLabel>
              <IonNote slot="end">{chat.time}</IonNote>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
