let color = '#3aa757';   
     Chrome.runtime.onInstalled.addListener(() => {   
       Chrome.storage.sync.set({ color });   
       console.log('Default background color set to %cgreen', `color: ${color}`);   
     });   