import React from 'react';
import { Navigator } from 'react-native';
import { Scene } from 'react-native-router-flux';
import TripRecordingView from '../components/TripRecordingView';
import TripBoundsView from '../components/TripBoundsView';
import TripRouteView from '../components/TripRouteView';
import TripPurposeView from '../components/TripPurposeView';
import TripListView from '../components/TripListView';
import CarListView from '../components/CarListView';
import CarDetailView from '../components/CarDetailView';
import DriverListView from '../components/DriverListView';
import DriverDetailView from '../components/DriverDetailView';
import ImportExportView from '../components/ImportExportView';
import AboutView from '../components/AboutView';
import Drawer from '../components/Drawer';

const navbarHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight - 2;

const commonNavbarProps = {
  sceneStyle: { marginTop: navbarHeight },
};

export default (
  <Scene key="main">
    <Scene key="drawer" component={Drawer}>
      <Scene key="drawerTabs" tabs>
        <Scene key="tripsTab">
          <Scene
            key="tripList"
            component={TripListView}
            title="Fahrtenbuch"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="tripRecording"
            component={TripRecordingView}
            title="Fahrtaufzeichnung"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="tripBounds"
            component={TripBoundsView}
            title="Fahrt bearbeiten"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="tripRoute"
            component={TripRouteView}
            title="Fahrtstrecke bearbeiten"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="tripPurpose"
            component={TripPurposeView}
            title="Reisezweck bearbeiten"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
        </Scene>
        <Scene key="carsTab">
          <Scene
            key="carList"
            component={CarListView}
            title="Fahrzeuge"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="carDetail"
            component={CarDetailView}
            sceneStyle={commonNavbarProps.sceneStyle}
          />
        </Scene>
        <Scene key="driversTab">
          <Scene
            key="driverList"
            component={DriverListView}
            title="Fahrerverwaltung"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
          <Scene
            key="driverDetail"
            title="Fahrer"
            component={DriverDetailView}
            sceneStyle={commonNavbarProps.sceneStyle}
          />
        </Scene>
        <Scene key="importExportTab">
          <Scene
            key="importExport"
            component={ImportExportView}
            title="Import/Export"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
        </Scene>
        <Scene key="aboutTab">
          <Scene
            key="about"
            component={AboutView}
            title="Über die App"
            sceneStyle={commonNavbarProps.sceneStyle}
          />
        </Scene>
      </Scene>
    </Scene>
  </Scene>
);
