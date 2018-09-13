import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdminView = () => (
    <Tabs>
      <TabList>
        <Tab>ADD READER</Tab>
        <Tab>ADD BOOK</Tab>
      </TabList>

      <TabPanel>
          <div>
              <input> NAME </input>
              <input> ADDRESS </input>
              <input type="submit"> ADD </input>
          </div>
      </TabPanel>
      <TabPanel>
          <div>
              <input> TITLE </input>
              <input> ISBN </input>
              <input> AUTHOR </input>
              <input> No of Copies </input>
              <input type="submit"> ADD </input>
          </div>
      </TabPanel>
    </Tabs>
  );

  export default AdminView;