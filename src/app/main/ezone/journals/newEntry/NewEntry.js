import React from 'react'
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useForm, FormProvider } from "react-hook-form";
import NewJournalHeader from './NewJournalHeader';
import NewJournal from './NewJournal';




function NewEntry() {
  return (
    
      <FusePageCarded
        classes={{
          // content: "flex",
          contentCard: "overflow-hidden",
          header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
        }}
        header={<NewJournalHeader />}
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <NewJournal />
          </div>
        }
        innerScroll
      />
    
  );
}

export default NewEntry