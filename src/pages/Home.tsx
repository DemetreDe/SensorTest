import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import SensorsModule from "../components/SensorsModule";
import MagnetometerModule from '../components/MagnetometerModule';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>W&B App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SensorsModule/>
        <MagnetometerModule/>
      </IonContent>

    </IonPage>
  );
};

export default Home;
