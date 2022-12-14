export const homePageLocators = {
    globalAddBtnLocator : '[aria-label="Add to Planner"]',
    globalAddDailyTrackerBtnLocator : '//div[.="Daily Tracker"]/div[3]',
    globalAddAppointmentBtnLocator : '//div[.="Appointment"]/div[3]',
    globalAddTodoBtnLocator : '//div[.="To-Do"]/div[3]',
    globalAddMedicationBtnLocator : '//div[.="Medication"]/div[3]',
    globalAddNoteBtnLocator : '//div[.="Note"]/div[3]',
    globalAddDocumentBtnLocator : '//div[.="Photo or Document"]/div[3]',
    trackAllFlowBtnLocator : `//*[text()="Track how you're doing today"]/../..`,
    dailyTrackerCompleteStateLocator : `//*[text()="You’ve Tracked Today!"]`,
    allItemsTabLocator : '[data-testing="tab:{All Items}"]',
    allItemsActiveTabLocator : '[aria-selected="true"][data-testing="tab:{All Items}"]'

}