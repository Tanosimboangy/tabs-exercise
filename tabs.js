const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
const handleTabClick = (event) => {
    // hide all panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // make all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false)
    });
    // mark the clicked tab as selected 
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associates tabPanel and show it
    const {id} = event.currentTarget;
    /* METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel)
    */
    // METHOD 2
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false; // show element
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));