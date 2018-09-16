import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdminView = () => (
    <div>
      <Tabs>
        <TabList>
         <Tab>ADD READER</Tab>
         <Tab>ADD BOOK</Tab>
          </TabList>

        <TabPanel>
            <input placeholder="Name"></input> <br />
            <input placeholder="Address"></input> <br />
            <button type="submit"> ADD </button> <br />
          </TabPanel>
         <TabPanel>
             <div>
             <input placeholder="Title"></input> <br />
            <input placeholder="Author"></input> <br />
            <input placeholder="ISBN"></input> <br />
            <input placeholder="No of Copies"></input> <br />
            <button type="submit"> ADD </button> <br />
            </div>
       </TabPanel>
      </Tabs>
    </div>
  );

  export default AdminView;