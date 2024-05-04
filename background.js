chrome.runtime.onInstalled.addListener(function() {
  console.log('Auto Refresh extension installed.');
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab && tab.url && tab.url.startsWith('http')) {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js']
    });
  }
});
