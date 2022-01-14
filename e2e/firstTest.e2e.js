/* eslint-disable */
describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check if a new skill is registered', async () => {
    const newSkillInput = await element(by.id('input'));
    const addButton = await element(by.id('add-button'));
    const skillsFlatList = await element(by.id('skills-flat-list'));
    const container = await element(by.id('container'));

    await newSkillInput.tap();
    await newSkillInput.typeText('React Native');

    await addButton.tap();
    await container.tap();

    expect(element(by.id('skills-flat-list'))).toBeVisible();
  });
});
