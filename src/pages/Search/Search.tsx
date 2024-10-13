// src/pages/Search/Search.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Search: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText((e.target as unknown as HTMLInputElement).value)}
          placeholder="Search instructors or activities"
        />
        <IonList>
          {/* This is where search results would go */}
          <IonItem>
            <IonLabel>No results found</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
