import { newE2EPage } from '@stencil/core/testing';

describe('tov-first-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tov-first-component></tov-first-component>');

    const element = await page.find('tov-first-component');
    expect(element).toHaveClass('hydrated');
  });
});
